"use client";

import { Moon, Sun1 } from "iconsax-reactjs";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      document.documentElement.classList.toggle("dark", newTheme);
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <div
      className="w-[42px] h-[42px] lg:w-[83px] lg:h-[83px] rounded-2xl bg-[#D8D0DF]/55 flex justify-center items-center cursor-pointer transition-colors hover:bg-[#D8D0DF]/75"
      onClick={toggleTheme}
    >
      {isDark ? <Sun1 className="size-[22px] lg:size-[39px]" color="#FFD700" /> : <Moon className="size-[22px] lg:size-[39px]" color="#FEB235" />}
    </div>
  );
}