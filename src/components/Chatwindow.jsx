import CompanionHeader from "./CompanionHeader.jsx";
import ChatMessages from "./Chatmessages.jsx";
import MessageInput from "./MessageInput.jsx";
import bgPNG from "../assets/bg.png";

export default function ChatWindow() {
  return (
    <div className={`flex-1 flex flex-col h-screen`}>
      <CompanionHeader />
      <div
        className="bg-red-50 flex h-full overflow-auto"
        style={{
          backgroundImage: `url(${bgPNG})`,
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
        }}
      >
        <ChatMessages />
      </div>
      <MessageInput />
    </div>
  );
}
