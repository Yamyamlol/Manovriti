import PropTypes from "prop-types";

const Week = ({ mood, day, date }) => {
  return (
    <div className="flex items-center bg-red-50 justify-between flex-col p-4 bg-gray-100 rounded-lg text-center">
      <div className="flex  flex-col">
        <div>
          <div className="text-lg font-semibold">{day}</div>
          <div className="text-xl">{date}</div>
        </div>
        <div className="text-6xl">{mood}</div>
      </div>
    </div>
  );
};

// Move propTypes definition below the component
Week.propTypes = {
  mood: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Week;
