import speakerIcon from "../assets/speaker.svg";
import crownIcon from "../assets/crown.svg";
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
              <div
                key={index}
                onClick={() => handleItemClick(index)}
                className={`text-[#292B39] font-bold w-full text-left cursor-pointer p-2 rounded-lg transition-colors duration-200 flex justify-center items-center ${
                  activeItem === index ? "bg-red-300" : "hover:bg-red-200"
                }`}
              >
                {item.name}
                {item.isPremium && <img alt="" className="w-10 h-10" src={crownIcon}></img>}
              </div>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <div className="text-[#292B39] font-bold cursor-pointer p-2 rounded-lg hover:bg-[#ABB7D9] hover:text- transition-colors duration-200 flex justify-center items-center">
            Go Premium
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(243,186,69,1)" className="w-8 h-8 m-2"><path fill="none" d="M0 0h24v24H0z" ></path><path d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8L12.0049 2L17.0049 8L22.0049 5V17H2.00488V5Z"></path></svg>
            
          </div>
          <div className="text-[#292B39] font-bold cursor-pointer p-2 rounded-lg hover:bg-[#ABB7D9] transition-colors duration-200 flex justify-center items-center">
            Logout
            <i className="fa-solid fa-right-from-bracket m-2"></i>
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