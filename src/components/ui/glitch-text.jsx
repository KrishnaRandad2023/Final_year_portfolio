"use client";

import { useEffect, useState, useRef } from "react";

const GlitchText = ({
  text,
  className = "",
  speed = 100,
  glitchIntensity = 5,
  colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

  const createGlitch = () => {
    let glitched = "";
    for (let i = 0; i < text.length; i++) {
      if (Math.random() < 0.1) {
        glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
      } else {
        glitched += text[i];
      }
    }
    return glitched;
  };

  const startGlitch = () => {
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = glitchIntensity;

    intervalRef.current = setInterval(() => {
      setDisplayText(createGlitch());
      iterations++;

      if (iterations >= maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, speed / glitchIntensity);
  };

  useEffect(() => {
    const randomGlitch = () => {
      const delay = Math.random() * 5000 + 2000; // Random delay between 2-7 seconds
      timeoutRef.current = setTimeout(() => {
        startGlitch();
        randomGlitch();
      }, delay);
    };

    randomGlitch();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, glitchIntensity]);

  const glitchStyle = isGlitching
    ? {
        textShadow: `
      ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 ${colors[0]},
      ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 ${colors[1]},
      ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 ${colors[2]}
    `,
        animation: "glitch 0.3s ease-in-out infinite alternate",
      }
    : {};

  return (
    <>
      <style jsx>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
      <span
        className={`relative inline-block ${className}`}
        style={glitchStyle}
        onMouseEnter={startGlitch}
      >
        {displayText}
      </span>
    </>
  );
};

export default GlitchText;
