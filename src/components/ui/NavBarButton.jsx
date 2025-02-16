import PropTypes from "prop-types";

function NavBarButton({
  label,
  isActive,
  onClick,
  isPremium = false,
  customBgColor = "bg-red-100",
  customHoverColor = "hover:bg-red-200",
  icon
}) {
  return (
    <div
      onClick={onClick}
      className={`text-[#292B39] font-bold w-full text-left cursor-pointer p-2 rounded-lg transition-colors duration-200 flex justify-center items-center ${
        isActive ? "bg-red-300" : customHoverColor
      } ${customBgColor}`}
    >
      {label}
      {icon}
      {isPremium && (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgba(243,186,69,1)"
        className="w-8 h-8 m-2"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M2.00488 19H22.0049V21H2.00488V19ZM2.00488 5L7.00488 8L12.0049 2L17.0049 8L22.0049 5V17H2.00488V5Z" />
      </svg>
      )}
    </div>
  );
}

NavBarButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isPremium: PropTypes.bool,
  customBgColor: PropTypes.string,
  customHoverColor: PropTypes.string,
  icon : PropTypes.node
};

export default NavBarButton;
