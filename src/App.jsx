import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/Chatwindow";
import Journal from "./components/pages/Journal";

export default function Page() {
  const [activePage, setActivePage] = useState(null);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex h-screen bg-[#EDE8F5]">
      <Sidebar onPageChange={handlePageChange} />
      {activePage === "Chat" && <ChatWindow />}
      {activePage === "Journal" && <Journal />}
      {/* Add other pages here */}
    </div>
  );
}