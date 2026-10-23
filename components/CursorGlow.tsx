"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setOn(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!on) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] h-72 w-72 rounded-full opacity-20 blur-[110px]"
      style={{
        transform: `translate(${pos.x - 144}px, ${pos.y - 144}px)`,
        background: "linear-gradient(135deg,#d4ff3f,#ff3fd4)",
      }}
    />
  );
}
