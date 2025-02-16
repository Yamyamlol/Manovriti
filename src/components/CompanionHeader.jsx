import ThemeToggleButton from "./ui/ThemeToggleButton";
import Logo from "../assets/logoHeartpng.png";

export default function CompanionHeader() {
  return (
    <div className="p-4 border-b border-red-800 bg-red-50 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* <div className="w-10 h-10 rounded-full bg-[#292B39]" /> */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" className="h-8" />
          <div>
            <h1 className="text-xl text-[#292B39] font-bold">Manovriti</h1>
            <p className="text-[#54586A] text-sm font-semibold">Your friendly companion</p>
          </div>
        </div>
      </div>

      <ThemeToggleButton />
    </div>
  );
}
