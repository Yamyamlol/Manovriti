import speakerIcon from "../assets/speaker.svg";

export default function ChatMessages() {
  const messages = [
    {
      id: 1,
      sender: "bot",
      text: "Hi there! I'm Manovriti, your therapy companion. How are you feeling today?",
      time: "12:00 PM",
    },
    {
      id: 2,
      sender: "user",
      text: "I'm feeling a bit anxious today...",
      time: "12:01 PM",
    },
    {
      id: 3,
      sender: "bot",
      text: "I understand. Let's talk about what's making you feel anxious. Would you like to share more about it?",
      time: "12:01 PM",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "user" ? "justify-end " : "justify-start"
          }`}
        >
          <div
            className={`max-w-[70%] rounded-2xl px-4 py-2 ${
              message.sender === "user"
                ? " bg-red-300 bg-linear-to-r ml-auto"
                : " bg-[#F7F4F2]"
            }`}
          >
            <p className="text-[#292B39]">{message.text}</p>
            <span className="text-xs text-[#54586A] mt-1">{message.time}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            {message.sender !== "user" && (
              // <img className="pl-3 h-8 w-8 opacity-45" src={speakerIcon} alt="" />
              <i className="fa-solid fa-volume-low scale-150 ml-2"></i>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
