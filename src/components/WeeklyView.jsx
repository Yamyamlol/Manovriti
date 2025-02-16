import Week from "./ui/Week.jsx";
import { format, subDays } from "date-fns";

const today = new Date();

const lastWeek = Array.from({length: 7}, (_,i) =>{
   const date = subDays(today, 6-i);
   return{
      day:format(date, 'EEE'),
      date: format(date, "d"),
   };
});

const moods = {
  Sun: "😃",
  Mon: "😢",
  Tue: "😡",
  Wed: "😂",
  Thu: "😩",
  Fri: "🤩",
  Sat: "😌",
};


const WeeklyView = () => {
  return (
     <div className="p-4 max-w-full">
      <div className="rounded-2xl bg-white text-black flex flex-col p-4">
        <div className="py-4 text-center font-semibold text-xl">Your Week Recap</div>
        <div className="grid grid-cols-7 gap-4">
       {console.log("date"+today.getDay())}
         {lastWeek.map(({day, date}) =>{
            return <Week key = {date} day = {day} date = {date} mood={moods[day] || "🙂"}/>
         })}
        </div>
      </div>
    </div>
  );
};

export default WeeklyView;
