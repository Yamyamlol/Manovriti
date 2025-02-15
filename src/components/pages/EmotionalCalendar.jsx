import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const emotions = {
  happy: { color: "bg-orange-200", emoji: "😃" },
  sad: { color: "bg-blue-200", emoji: "😢" },
  angry: { color: "bg-red-300", emoji: "😡" },
  funny: { color: "bg-yellow-200", emoji: "😂" },
  exhausted: { color: "bg-gray-300", emoji: "😩" },
  excited: { color: "bg-yellow-400", emoji: "🤩" },
  chill: { color: "bg-green-200", emoji: "😌" },
  confused: { color: "bg-purple-200", emoji: "🤔" },
};

const EmotionalCalendar = () => {
  const [selectedEmotions, setSelectedEmotions] = useState({});
  const [dropdownDate, setDropdownDate] = useState(null);

  const handleEmotionChange = (date, emotionKey) => {
    setSelectedEmotions((prev) => ({
      ...prev,
      [date]: emotions[emotionKey],
    }));
    setDropdownDate(null);
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <div className="shadow-lg rounded-lg p-5 bg-white">
        <Calendar
          className="border-none"
          tileClassName={({ date }) => {
            const dateString = date.toDateString();
            return selectedEmotions[dateString]
              ? selectedEmotions[dateString].color
              : "";
          }}A
          tileContent={({ date }) => {
            const dateString = date.toDateString();
            const selectedEmotion = selectedEmotions[dateString];

            return (
              <div
                className="w-full h-full flex items-center justify-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownDate(dateString);
                }}
              >
                {selectedEmotion ? (
                  <span className="text-2xl">{selectedEmotion.emoji}</span>
                ) : (
                  <span className="text-sm">{date.getDate()}</span>
                )}
              </div>
            );
          }}
        />
      </div>

      {/* Dropdown */}
      {dropdownDate && (
        <div className="absolute bg-white shadow-md rounded-lg p-3 mt-2 z-10">
          <p className="font-semibold text-gray-700 mb-2">Select Emotion:</p>
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(emotions).map(([key, { color, emoji }]) => (
              <button
                key={key}
                className={`p-2 rounded-lg text-xl ${color} hover:scale-110 transition`}
                onClick={() => handleEmotionChange(dropdownDate, key)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmotionalCalendar;
