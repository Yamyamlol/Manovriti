import React, { useState, useCallback } from "react";
import Calendar from "../Calendar";
import MonthlyEmotion from "../MonthlyEmotion";
import WeeklyView from "../WeeklyView";

const EmotionalCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarEmotions, setCalendarEmotions] = useState({});
  const [hoveredDate, setHoveredDate] = useState(null);

  // Other logic (handlePreviousMonth, handleNextMonth, etc.)

  return (
    <div className="pl-2 min-h-screen max-h-screen">
      <div className="flex">
        <Calendar
          calendarEmotions={calendarEmotions}
          setCalendarEmotions={setCalendarEmotions}
          setSelectedDate={setSelectedDate}
        />
        <MonthlyEmotion calendarEmotions={calendarEmotions} />
      </div>
      <div>
        <WeeklyView
          calendarEmotions={calendarEmotions}
        />
      </div>
    </div>
  );
};

export default EmotionalCalendar;
