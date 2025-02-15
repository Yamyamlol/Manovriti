import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/Chatwindow";
import Journal from "./components/pages/Journal";

export default function App() {
  const [activePage, setActivePage] = useState(null);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex bg-[#EDE8F5]">
      <Sidebar onPageChange={handlePageChange} />
      <div className="overflow-auto flex-1 h-full"> 
        {activePage === "Chat" && <ChatWindow />}
        {activePage === "Journal" && <Journal />}
        {/* Add other pages here */}
      </div>
    </div>
  );
}