"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="size-9" />; // جای خالی هم‌اندازه

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="تغییر تم"
      className="rounded-lg p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}