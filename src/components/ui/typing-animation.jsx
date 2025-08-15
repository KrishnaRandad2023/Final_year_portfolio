"use client";

import { useEffect, useState, useCallback } from "react";

const TypingAnimation = ({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 1500,
  className = "",
  cursorColor = "#3b82f6",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const updateText = useCallback(() => {
    const currentText = texts[textIndex];

    if (isPaused) {
      setIsPaused(false);
      setIsDeleting(true);
      return;
    }

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        setIsPaused(true);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, textIndex, isDeleting, isPaused, texts]);

  useEffect(() => {
    const delay = isPaused ? pauseTime : isDeleting ? deleteSpeed : speed;
    const timer = setTimeout(updateText, delay);
    return () => clearTimeout(timer);
  }, [updateText, isPaused, isDeleting, speed, deleteSpeed, pauseTime]);

  return (
    <span className={`relative ${className}`}>
      <span className="inline-block" style={{ minHeight: "1em" }}>
        {displayText}
      </span>
      <span
        className="inline-block w-0.5 ml-1 animate-pulse"
        style={{
          backgroundColor: cursorColor,
          height: "1em",
          animation: "blink 1s infinite",
        }}
      />
      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
};

export default TypingAnimation;
