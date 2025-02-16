import React, { useState } from "react";
import Week from "./ui/Week.jsx";
import { format, subDays } from "date-fns";

const today = new Date();

const WeeklyView = ({ calendarEmotions}) => {
  // Get the last 7 days of emotions (or use the selected date to adjust)
  const lastWeek = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(today, 6 - i);
    const dateKey = format(date, "yyyy-MM-dd");
    return {
      day: format(date, "EEE"),
      date: format(date, "d"),
      emotion: calendarEmotions[dateKey] || "🙂", // Default to a neutral emoji if no emotion is set
    };
  });

  return (
    <div className="p-4 max-w-full">
      <div className="rounded-2xl bg-white text-black flex flex-col p-4">
        <div className="py-4 text-center font-semibold text-xl">
          Your Week Recap
        </div>
        <div className="grid grid-cols-7 gap-4">
          {lastWeek.map(({ day, date, emotion }) => (
            <Week key={date} day={day} date={date} mood={emotion} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyView;
