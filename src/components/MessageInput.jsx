export default function MessageInput() {
  return (
    <div className=" p-4">
      <input
        type="text"
        placeholder="Type your message here..."
        className="w-full bg-white px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
}
