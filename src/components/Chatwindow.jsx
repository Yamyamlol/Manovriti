import CompanionHeader from "./CompanionHeader.jsx";
import ChatMessages from "./Chatmessages.jsx";
import MessageInput from "./MessageInput.jsx";

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col">
      <CompanionHeader />
      <ChatMessages />
      <MessageInput />
    </div>
  );
}
