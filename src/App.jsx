"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/Chatwindow";

export default function Page() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="flex h-screen bg-[#EDE8F5]">
      <Sidebar onChatClick={toggleChat} />
      {isChatOpen && <ChatWindow />}
    </div>
  );
}
