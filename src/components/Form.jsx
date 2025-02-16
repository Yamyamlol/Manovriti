import PropTypes from "prop-types";
import FormLabels from "./Formlabels.jsx";

const Form = ({ formType }) => {
  return (
    <form className="space-y-2">
      {formType === "pro" && (
        <FormLabels
          label="User ID"
          id="UserId"
          type="password"
          required
        />
      )}

      <FormLabels label="Email" id="email" type="email" required />
      <FormLabels label="Password" id="password" type="password" required />

      {formType === "pro" && (
        <a
          href="#"
          className="flex text-xs text-gray-500 justify-end hover:text-gray-600 transition-colors duration-300"
        >
          Forgot password?
        </a>
      )}

      <button
        type="submit"
        className="w-full bg-red-400 text-white py-1.5 px-4 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold hover:bg-red-300 transition cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

// Prop validation
Form.propTypes = {
  formType: PropTypes.oneOf(["pro", "user"]).isRequired,
};

export default Form;
