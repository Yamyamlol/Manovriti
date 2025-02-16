import PropTypes from "prop-types";
import FormLabels from "./Formlabels.jsx";

const Form = ({ formType }) => {
  return (
    <form className="space-y-2">
      {formType === "user" && <FormLabels label="Name" id="name" required />}

      <FormLabels label="Email" id="email" type="email" required />
      <FormLabels label="Password" id="password" type="password" required />

      {formType === "user" && (
        <FormLabels
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          required
        />
      )}
      {formType === "pro" && (
        <a
          href="#"
          className="flex text-xs text-gray-500 justify-end hover:text-indigo-600 transition-colors duration-300"
        >
          Forgot password?
        </a>
      )}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-1.5 px-4 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold hover:bg-blue-700 transition"
      >
        {formType === "pro" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

// Prop validation
Form.propTypes = {
  formType: PropTypes.oneOf(["pro", "user"]).isRequired,
};

export default Form;
