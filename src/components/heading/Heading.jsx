import PropTypes from "prop-types";

export const Heading = ({ style, label }) => {
  return (
    <div>
      <h1 className={`${style}`}>{label}</h1>
    </div>
  );
};

// Prop validation
Heading.propTypes = {
  style: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Heading;
