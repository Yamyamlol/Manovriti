import speakerIcon from "../assets/speaker.svg";
import PropTypes from "prop-types";
import { useState } from "react";

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
    <div className="w-64 p-4 rounded-r-xl bg-[#DFD9EA] flex flex-col h-screen">
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
              <div
                key={index}
                onClick={() => handleItemClick(index)}
                className={`text-[#292B39] font-bold w-full text-left cursor-pointer p-2 rounded-lg transition-colors duration-200 flex justify-center items-center ${
                  activeItem === index ? "bg-[#8796C3]" : "hover:bg-[#ABB7D9]"
                }`}
              >
                {item.name}
                {item.isPremium && <img alt="" className="w-10 h-10" src={speakerIcon}></img>}
              </div>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <div className="text-[#292B39] font-bold cursor-pointer p-2 rounded-lg hover:bg-[#ABB7D9] hover:text- transition-colors duration-200">
            Go Premium
          </div>
          <div className="text-[#292B39] font-bold cursor-pointer p-2 rounded-lg hover:bg-[#ABB7D9] transition-colors duration-200">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Sidebar;