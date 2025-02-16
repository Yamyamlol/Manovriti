export default function Button({ children, onClick, className }){
    return (
        <button
        onClick={onClick}
        className={`
           px-6 py-2 bg-red-300 text-black font-bold rounded-full shadow-md hover:bg-red-200 transition-all duration-300 cursor-pointer
            ${className}
        `}
        >
        {children}
        </button>
    );
}