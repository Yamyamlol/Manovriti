import { useEffect, useState } from "react";
import "../index.css"
export default function Note({ note, onEdit }) {
  const sizeClasses = {
    small: "h-40",
    medium: "h-56",
    large: "h-72",
  };

  const colors = [
    "#3D53A0", // Deep blue
    "#7191E6", // Light blue
    "#8796C3", // Soft blue-gray
    "#ADBBDB", // Light slate blue
    "#EEE9F7", // Light lavender
    "#C8D0E6", // Soft pastel blue
    "#F1A7C9", // Soft pink
    "#F5E1C8", // Pale yellow
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
