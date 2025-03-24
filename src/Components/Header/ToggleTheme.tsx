import { useTheme } from "../../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-secondary" />
      ) : (
        <Sun className="h-5 w-5 text-secondary" />
      )}
    </button>
  );
};
