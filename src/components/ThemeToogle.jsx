import { cn } from "../Lib/utils";
import { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../utils/context";

export const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  // Optionnel : Sauvegarde dans localStorage à chaque changement

  return (
    <button
      style={{ zIndex: 100 }}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "fixed max-sm:hidden top-5 right-5 p-2  rounded-full transition-colors duration-300",
        "focus: outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
