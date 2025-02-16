import { Mic, Send } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="p-4 flex items-center gap-2 bg-white rounded-lg">
      <input
        type="text"
        placeholder="Type your message here..."
        className="flex-1 px-4 py-2 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
      <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
        <Mic className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
        <Send className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}
