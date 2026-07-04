import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`group relative flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-soft transition-colors hover:border-[var(--accent)] ${className}`}
    >
      <Sun
        size={16}
        strokeWidth={2}
        className={`absolute transition-all duration-300 ${
          isDark ? "scale-0 opacity-0 rotate-45" : "scale-100 opacity-100 rotate-0"
        }`}
        style={{ color: "var(--accent-2)" }}
      />
      <Moon
        size={16}
        strokeWidth={2}
        className={`absolute transition-all duration-300 ${
          isDark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-45"
        }`}
        style={{ color: "var(--accent)" }}
      />
    </button>
  );
}
