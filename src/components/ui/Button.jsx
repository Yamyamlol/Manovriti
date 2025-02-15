export default function Button({ children, onClick, className }){
    return (
        <button
        onClick={onClick}
        className={`
           px-6 py-2 bg-[#3D53A0] text-white rounded-full shadow-md hover:bg-[#7191E6] transition-all duration-300
            ${className}
        `}
        >
        {children}
        </button>
    );
}