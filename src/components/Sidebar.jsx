import speakerIcon from "../assets/speaker.svg";
import crownIcon from "../assets/crown.svg";
import PropTypes from "prop-types";
import { useState } from "react";
import NavBarButton from "./ui/NavBarButton"; // Import the new SidebarButton component

function Sidebar({ onPageChange }) {
  const [activeItem, setActiveItem] = useState(null);

  const navItems = [
    { name: "Chat with Manovriti", page: "Chat" },
    { name: "Journal", page: "Journal" },
    { name: "Emotion Calendar", page: "EmotionalCalendar" },
    { name: "Chat History", page: "ChatHistory" },
    { name: "Settings", page: "Settings" },
    { name: "Talk to a Therapist", page: "Therapist", isPremium: true },
  ];

  const handleItemClick = (index) => {
    if (index === activeItem) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
      if (navItems[index].page) {
        onPageChange(navItems[index].page);
      }
    }
  };

  return (
    <div className="w-64 p-4 rounded-r-xl bg-red-100 flex flex-col h-screen">
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-center text-3xl text-[#292B39] font-black">
            Manovriti
          </div>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-[1px] mt-[4px] w-10 bg-black"></div>
            <span className="text-xl font-sm">x</span>
            <div className="h-[1px] mt-[4px] w-10 bg-black"></div>
          </div>
          <nav className="space-y-4">
            {navItems.map((item, index) => (
              <NavBarButton
                key={index}
                label={item.name}
                isActive={activeItem === index}
                onClick={() => handleItemClick(index)}
                isPremium={item.isPremium}
                customHoverColor="hover:bg-red-200"
              />
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <NavBarButton
            label="Go Premium"
            isActive={false}
            isPremium = {true}
            onClick={() => {}}
          />
          <NavBarButton
            label="Logout"
            isActive={false}
            onClick={() => {}}
            iconColor="black"
            icon={<i class="fa-solid fa-right-from-bracket ml-2"></i>}
          />
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Sidebar;
