import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/Chatwindow";
import Journal from "./components/pages/Journal";
import EmotionalCalendar from "./components/pages/EmotionalCalendar";

export default function Landing() {
  const [activePage, setActivePage] = useState(null);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex bg-red-100">
      <Sidebar onPageChange={handlePageChange} />
      <div className="overflow-auto flex-1 h-full">
        {activePage === "Chat" && <ChatWindow />}
        {activePage === "Journal" && <Journal />}
        {activePage === "EmotionalCalendar" && <EmotionalCalendar />}
        {/* Add other pages here */}
      </div>
    </div>
  );
}
