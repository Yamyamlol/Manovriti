import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import googleLogo from "/src/assets/google.svg";
import Form from "./Form";
import { Heading } from "./heading/Heading";

const Login = () => {
  const [activeButton, setActiveButton] = useState("user");
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-10 py-6 sm:py-10 bg-red-50">
      <div className="w-full max-w-md rounded-lg flex flex-col justify-center p-4 sm:p-8 bg-white shadow-lg">
        <div className="text-center">
          <Heading
            style="font-bold text-lg sm:text-xl tracking-tight text-[#292B39]"
            label="Welcome to Manovritti"
          />
          <p className="text-xs sm:text-sm font-extralight text-gray-500 pb-2">
            Sign in to your account
          </p>
        </div>

        {/* Google Sign-In Button */}
        <div className="flex justify-center items-center gap-2 cursor-pointer border border-gray-300 p-2 rounded-lg transition duration-300 hover:bg-red-200">
          <img
            src={googleLogo || "/placeholder.svg"}
            alt="Google"
            className="h-4 w-4 sm:h-5 sm:w-5"
          />
          <span className="text-xs sm:text-sm font-medium text-[#292B39]">
            Sign in with Google
          </span>
        </div>

        {/* OR CONTINUE WITH */}
        <div className="flex items-center justify-center my-3">
          <span className="flex-grow h-px bg-gray-300"></span>
          <div className="mx-2 sm:mx-4 text-gray-500 font-normal text-xs">
            OR CONTINUE WITH
          </div>
          <span className="flex-grow h-px bg-gray-300"></span>
        </div>

        {/* Sign In / Sign Up Toggle */}
        <div className="flex bg-red-100 rounded-xl mb-4 overflow-hidden">
          <div
            className={`flex-1 m-1 text-center py-2 sm:py-3 cursor-pointer font-semibold text-xs sm:text-sm transition-all duration-300 rounded-lg ${
              activeButton === "user"
                ? "bg-red-200 text-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveButton("user")}
          >
            Professional
          </div>
          <div
            className={`flex-1 m-1 text-center py-2 sm:py-3 cursor-pointer font-semibold text-xs sm:text-sm transition-all duration-300 rounded-lg ${
              activeButton === "pro" ? "bg-red-200 text-black" : "text-gray-600"
            }`}
            onClick={() => setActiveButton("pro")}
          >
            User
          </div>
        </div>

        {/* Form for Login or Sign-Up */}
        <Form formType={activeButton} />

        {/* Terms and Privacy Links */}
        <div className="text-center text-xs text-gray-500 mt-4">
          By signing up, you agree to our
          <a href="/terms" className="text-blue-500">
            {" "}
            Terms of Service
          </a>{" "}
          and
          <a href="/privacy" className="text-blue-500">
            {" "}
            Privacy Policy
          </a>
          .
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-4">
          <button
            className="w-full border border-gray-300 py-2 sm:py-3 font-semibold px-4 sm:px-6 rounded-lg text-xs sm:text-sm hover:bg-red-200 transition cursor-pointer"
            onClick={() => navigate("/")} // Redirect to home
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
