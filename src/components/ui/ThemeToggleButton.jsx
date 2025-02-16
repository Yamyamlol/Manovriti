import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(true); // Default to Sun

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-600" />}
    </button>
  );
}
