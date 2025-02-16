import CompanionHeader from "./CompanionHeader.jsx";
import ChatMessages from "./Chatmessages.jsx";
import MessageInput from "./MessageInput.jsx";
import "../App.css"
export default function ChatWindow() {
  return (
    <div className={`flex-1 flex flex-col h-screen`}>
      <CompanionHeader />
      <div
        className="bg h-full"
      >
        <ChatMessages />
      </div>
      <MessageInput />
    </div>
  );
}

