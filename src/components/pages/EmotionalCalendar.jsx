import Calendar from "../Calendar";
import MonthlyEmotion from "../MonthlyEmotion";
import WeeklyView from "../WeeklyView.jsx";

const EmotionalCalendar = () => {
  return (
    <div className="min-h-screen max-h-screen">
      <div className="flex ">
        <Calendar />
        <MonthlyEmotion />
      </div>
      <div>
        <WeeklyView />
      </div>
    </div>
  );
};

export default EmotionalCalendar;
