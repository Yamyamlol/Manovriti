import React from "react";
import Week from "./ui/Week.jsx";
import { format, subDays } from "date-fns";

const getLastWeekEmotions = (calendarEmotions) => {
  const today = new Date();
  return Array.from({ length: 7 }, (_, i) => {
    const dateKey = format(subDays(today, 6 - i), "yyyy-MM-dd");
    return calendarEmotions[dateKey] || ""; // Default emoji if no emotion
  });
};

const WeeklyView = ({ calendarEmotions }) => {
  const lastWeek = getLastWeekEmotions(calendarEmotions);

  return (
    <div className="p-4 pr-6 max-w-full ">
      <div className="rounded-2xl shadow-lg bg-white text-black flex flex-col p-4">
        <div className="py-4 text-center font-semibold text-xl">
          Your Week Recap
        </div>
        <div className="grid grid-cols-7 gap-4 h-40">
          {lastWeek.map((emotion, i) => (
            <Week
              key={i}
              day={format(subDays(new Date(), 6 - i), "EEE")}
              date={format(subDays(new Date(), 6 - i), "d")}
              mood={emotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyView;
