import { useState, useCallback } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  addMonths,
  subMonths,
  isAfter,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

const today = new Date();

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
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarEmotions, setCalendarEmotions] = useState({});
  const [hoveredDate, setHoveredDate] = useState(null);

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const handleNextMonth = () => {
    if (!isAfter(currentDate, today)) {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  const handleDateClick = (date) => {
    if (isSameMonth(date, currentDate) && !isAfter(date, today)) {
      setSelectedDate(date);
    }
  };

  const handleEmotionSelect = useCallback(
    (emotion) => {
      if (selectedDate) {
        const dateKey = format(selectedDate, "yyyy-MM-dd");
        setCalendarEmotions((prev) => ({
          ...prev,
          [dateKey]: emotions[emotion].emoji,
        }));
        setSelectedDate(null);
      }
    },
    [selectedDate]
  );

  return (
    <div className="max-h-screen min-w-100 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePreviousMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">
            {format(currentDate, "MMMM yyyy")}
          </h2>
          <button
            onClick={handleNextMonth}
            className={`p-2 hover:bg-gray-100 rounded-full transition ${
              isAfter(currentDate, today) ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isAfter(currentDate, today)}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="h-10 flex items-center justify-center text-sm font-medium text-gray-500"
            >
              {day}
            </div>
          ))}
          {daysInMonth.map((date) => {
            const dateKey = format(date, "yyyy-MM-dd");
            const emotion = calendarEmotions[dateKey];
            const isCurrentMonth = isSameMonth(date, currentDate);
            const isFuture = isAfter(date, today);
            const isHovered = hoveredDate === dateKey;

            return (
              <button
                key={date.toString()}
                onClick={() => handleDateClick(date)}
                onMouseEnter={() => setHoveredDate(dateKey)}
                onMouseLeave={() => setHoveredDate(null)}
                className={`h-12 flex items-center justify-center rounded-lg transition cursor-pointer 
                ${!isCurrentMonth ? "text-gray-300" : "hover:bg-gray-50"} 
                ${
                  selectedDate && date.getTime() === selectedDate.getTime()
                    ? "bg-gray-100"
                    : ""
                } 
                ${isFuture ? "text-gray-300 cursor-not-allowed" : ""}
                ${
                  emotion
                    ? `text-3xl ${
                        Object.values(emotions).find((e) => e.emoji === emotion)
                          ?.color
                      }`
                    : "text-xl"
                }`}
                disabled={!isCurrentMonth || isFuture}
              >
                <span className="w-full h-full flex items-center justify-center text-xl flex-shrink-0">
                  {isHovered && emotion
                    ? format(date, "d")
                    : emotion || format(date, "d")}
                </span>
              </button>
            );
          })}
        </div>

        {selectedDate && (
          <div className="mt-6 animate-scale-in">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              {selectedDate &&
                (format(selectedDate, "yyyy-MM-dd") ===
                format(today, "yyyy-MM-dd")
                  ? "How are you feeling today?"
                  : `How were you on ${format(selectedDate, "MMMM d")}`)}
            </h3>

            <div className="grid grid-cols-4 gap-2">
              {Object.entries(emotions).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => handleEmotionSelect(key)}
                  className={`p-1 rounded-lg transition transform hover:scale-105 flex items-center justify-center text-lg ${value.color}`}
                >
                  <div className="text-3xl">{value.emoji}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionalCalendar;
