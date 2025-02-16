import React from "react";
import { format } from "date-fns";

const MonthlyEmotion = ({ calendarEmotions }) => {
  // Extract the most frequent emotion for the month, or handle if it's empty
  const emotionCounts = {};

  if (calendarEmotions && Object.keys(calendarEmotions).length > 0) {
    // Count emotions
    Object.values(calendarEmotions).forEach((emoji) => {
      emotionCounts[emoji] = (emotionCounts[emoji] || 0) + 1;
    });

    // Find the most frequent emotion
    const mostFrequentEmotion = Object.entries(emotionCounts).reduce(
      (max, [emoji, count]) => (count > max.count ? { emoji, count } : max),
      { emoji: "", count: 0 }
    );

    return (
      <div className="p-4 flex justify-center">
        <div className="h-[370px] shadow-lg bg-white rounded-2xl">
          <div className="flex flex-col items-center">
            <div className="font-bold p-6 text-3xl text-center">
              Emotion of the Month
            </div>
            <div className="flex px-8 py-4 items-center">
              <div className="h-50 w-50 rounded-[50%] bg-black"></div>
              <div className="px-8 flex flex-col">
                <div className="text-2xl font-bold">{mostFrequentEmotion.emoji}</div>
                <div className="py-4 text-gray-600">
                  The most frequent emotion for this month is "{mostFrequentEmotion.emoji}".
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 flex justify-center">
      <div className="h-[370px] shadow-lg bg-white rounded-2xl">
        <div className="flex flex-col items-center">
          <div className="font-bold p-6 text-3xl text-center">
            Emotion of the Month
          </div>
          <div className="text-gray-600 py-4">
            No emotions recorded for this month.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyEmotion;
