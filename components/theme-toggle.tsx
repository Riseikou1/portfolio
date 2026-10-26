"use client";

import { useTheme } from "./theme-provider";
import { MoonIcon, SunIcon } from "./ui-icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
    >
      <span className="theme-track-icon theme-track-sun"><SunIcon /></span>
      <span className="theme-track-icon theme-track-moon"><MoonIcon /></span>
      <span className="theme-thumb"><SunIcon className="theme-thumb-sun" /><MoonIcon className="theme-thumb-moon" /></span>
    </button>
  );
}
