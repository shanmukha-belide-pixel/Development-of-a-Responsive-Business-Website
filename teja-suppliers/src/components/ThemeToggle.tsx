"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/10 hover:bg-blue-500/20 border border-white/20 dark:border-white/10 transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "dark"
        ? <Sun size={16} className="text-yellow-400" />
        : <Moon size={16} className="text-blue-600" />
      }
    </button>
  );
}
