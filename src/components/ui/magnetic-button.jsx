"use client";

import { useRef, useEffect, useCallback } from "react";

const MagneticButton = ({
  children,
  className = "",
  magneticPower = 0.15,
  returnSpeed = 0.08,
  ...props
}) => {
  const buttonRef = useRef(null);
  const animationRef = useRef(null);
  const isHoveringRef = useRef(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    const { x: targetX, y: targetY } = targetRef.current;
    const current = currentRef.current;

    current.x += (targetX - current.x) * returnSpeed;
    current.y += (targetY - current.y) * returnSpeed;

    // Use transform3d for GPU acceleration
    button.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

    if (
      isHoveringRef.current ||
      Math.abs(current.x) > 0.1 ||
      Math.abs(current.y) > 0.1
    ) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [returnSpeed]);

  const throttledMouseMove = useCallback(
    (e) => {
      if (!isHoveringRef.current || !buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      targetRef.current.x = (e.clientX - centerX) * magneticPower;
      targetRef.current.y = (e.clientY - centerY) * magneticPower;
    },
    [magneticPower]
  );

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      targetRef.current.x = 0;
      targetRef.current.y = 0;
    };

    // Use passive listeners for better performance
    document.addEventListener("mousemove", throttledMouseMove, {
      passive: true,
    });
    button.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    button.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [throttledMouseMove, animate]);

  return (
    <button
      ref={buttonRef}
      className={`relative transition-colors duration-200 ease-out ${className}`}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
