"use client";

import { useRef, useEffect, useCallback } from "react";

const Tilt3D = ({
  children,
  className = "",
  tiltMaxAngleX = 15,
  tiltMaxAngleY = 15,
  perspective = 1000,
  scale = 1.02,
  transitionSpeed = 300,
}) => {
  const ref = useRef(null);
  const requestRef = useRef(null);
  const isHoveringRef = useRef(false);

  const throttledMouseMove = useCallback(
    (e) => {
      if (!isHoveringRef.current || !ref.current) return;

      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }

      requestRef.current = requestAnimationFrame(() => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * tiltMaxAngleX;
        const rotateY = ((centerX - x) / centerX) * tiltMaxAngleY;

        element.style.transform = `
        perspective(${perspective}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(${scale}, ${scale}, ${scale})
      `;
      });
    },
    [tiltMaxAngleX, tiltMaxAngleY, perspective, scale]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      element.style.transition = `transform ${transitionSpeed}ms cubic-bezier(0.23, 1, 0.32, 1)`;
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      element.style.transition = `transform ${transitionSpeed}ms cubic-bezier(0.23, 1, 0.32, 1)`;
      element.style.transform = `
        perspective(${perspective}px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `;
    };

    element.addEventListener("mousemove", throttledMouseMove, {
      passive: true,
    });
    element.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    element.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      element.removeEventListener("mousemove", throttledMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [throttledMouseMove, transitionSpeed, perspective]);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default Tilt3D;
