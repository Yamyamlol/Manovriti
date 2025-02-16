import { useEffect, useState } from "react";
import "../index.css"
export default function Note({ note, onEdit }) {
  const sizeClasses = {
    small: "h-40",
    medium: "h-56",
    large: "h-72",
  };

  const colors = [
    "#FAD0C9", // Soft peach
    "#F9D5E5", // Light blush pink
    "#D3E4F4", // Soft light blue
    "#D6E7D6", // Soft mint green
    "#E6D3F1", // Light lavender purple
    "#F1E6B9", // Soft light yellow
    "#C3D9A0", // Pale olive green
    "#C0C9F7", // Light sky blue
];


  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setRandomColor(color);
  }, []);

  return (
    <div
      className={`relative ${sizeClasses[note.size]} rounded-lg shadow-lg overflow-hidden 
        transition-all duration-300 ease-in-out transform hover:scale-105 hover:z-10 cursor-pointer`}
      style={{ backgroundColor: randomColor }}
      onClick={() => onEdit(note)}
    >
      <div className="absolute inset-0 bg-[#EEE9F7] opacity-60"></div>
      <div className="relative z-10 p-4 h-full overflow-auto">
        <p className="text-[#3D53A0] leading-relaxed">{note.content}</p>
      </div>
    </div>
  );
}
