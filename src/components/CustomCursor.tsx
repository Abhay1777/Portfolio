"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on true pointer devices (not touch/stylus)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;

      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a, button, [role='button'], input, textarea, select, label") !== null;
      setIsPointer(isClickable);
    };

    const animate = () => {
      const speed = 0.12;
      ringX += (dotX - ringX) * speed;
      ringY += (dotY - ringY) * speed;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none"
        style={{
          position: "fixed",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: isPointer ? "var(--accent-color)" : "var(--main-color)",
          transform: `translate(-50%, -50%) scale(${isPointer ? 2 : 1})`,
          transition: "background 0.2s, transform 0.15s",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none"
        style={{
          position: "fixed",
          width: isPointer ? 50 : 36,
          height: isPointer ? 50 : 36,
          border: `1.5px solid rgba(58, 191, 248, ${isPointer ? 0.8 : 0.4})`,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s",
          zIndex: 9997,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
