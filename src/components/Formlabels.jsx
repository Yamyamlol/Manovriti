import PropTypes from "prop-types";

const FormLabels = ({ label, id, type = "text", required = false }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-gray-700 sm:text-sm"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="mt-0.5 block w-full px-2 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md outline-none focus:border-2 focus:border-red-600 focus:ring-1 focus:ring-red-500"
        required={required}
      />
    </div>
  );
};

FormLabels.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

FormLabels.defaultProps = {
  type: "text",
  required: false,
};

export default FormLabels;
