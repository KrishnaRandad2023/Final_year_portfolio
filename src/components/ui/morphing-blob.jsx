"use client";

import { useEffect, useRef } from "react";

const MorphingBlob = ({
  className = "",
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"],
  size = 300,
  speed = 0.02,
  blur = 40,
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createBlob = (x, y, size, color, time) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, color + "80");
      gradient.addColorStop(0.5, color + "40");
      gradient.addColorStop(1, color + "00");

      ctx.fillStyle = gradient;
      ctx.beginPath();

      const points = 8;
      const angleStep = (Math.PI * 2) / points;

      for (let i = 0; i <= points; i++) {
        const angle = i * angleStep;
        const radius = size + Math.sin(time * 2 + angle * 3) * (size * 0.3);
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          const prevAngle = (i - 1) * angleStep;
          const prevRadius =
            size + Math.sin(time * 2 + prevAngle * 3) * (size * 0.3);
          const prevPx = x + Math.cos(prevAngle) * prevRadius;
          const prevPy = y + Math.sin(prevAngle) * prevRadius;

          const cpx1 =
            prevPx + Math.cos(prevAngle + Math.PI / 2) * (size * 0.2);
          const cpy1 =
            prevPy + Math.sin(prevAngle + Math.PI / 2) * (size * 0.2);
          const cpx2 = px + Math.cos(angle - Math.PI / 2) * (size * 0.2);
          const cpy2 = py + Math.sin(angle - Math.PI / 2) * (size * 0.2);

          ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, px, py);
        }
      }

      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Apply blur filter
      ctx.filter = `blur(${blur}px)`;

      // Create multiple morphing blobs
      colors.forEach((color, index) => {
        const offsetX = Math.sin(time * speed + index * 2) * (width * 0.2);
        const offsetY =
          Math.cos(time * speed * 0.8 + index * 1.5) * (height * 0.2);
        const blobSize =
          size + Math.sin(time * speed * 1.5 + index) * (size * 0.4);

        const x = width * 0.5 + offsetX;
        const y = height * 0.5 + offsetY;

        createBlob(x, y, blobSize, color, time + index * 2);
      });

      ctx.filter = "none";
      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors, size, speed, blur]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default MorphingBlob;
