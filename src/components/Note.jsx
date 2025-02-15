export default function Note({ note, onEdit }) {
    const sizeClasses = {
      small: "h-40",
      medium: "h-56",
      large: "h-72",
    }
  
    return (
      <div
        className={`
          relative bg-white rounded-lg shadow-md overflow-hidden 
          transition-all duration-300 ease-in-out transform 
          hover:scale-105 hover:z-10 cursor-pointer
          ${sizeClasses[note.size]}
        `}
        onClick={() => onEdit(note)}
      >
        <div className="absolute inset-0 bg-notebook-paper"></div>
        <div className="relative z-10 p-4 h-full overflow-auto">
          <p className="text-gray-800 leading-relaxed">{note.content}</p>
        </div>
      </div>
    )
  }
  
  