"use client"
import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
}

export default function TypingText({ text }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const cleanText = text.trim();

    const interval = setInterval(() => {
      if (i < cleanText.length) {
        setDisplayedText((prev) => prev + (cleanText.charAt(i) ? cleanText.charAt(i) : ""));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-center dark:text-white">
      {displayedText}
    </p>
  );
}