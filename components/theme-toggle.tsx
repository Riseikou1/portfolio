"use client";

import { useTheme } from "./theme-provider";

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
      <span className="theme-icon theme-sun" aria-hidden="true">✳</span>
      <span className="theme-icon theme-moon" aria-hidden="true">◒</span>
      <span className="theme-thumb" aria-hidden="true"><span /></span>
    </button>
  );
}
