"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;
    if (!cursor || !text) return;

    let xTo = gsap.quickTo(cursor, "left", { duration: 0.15, ease: "power3" });
    let yTo = gsap.quickTo(cursor, "top", { duration: 0.15, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Elements that should trigger cursor expansion
      const isInteractive = 
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group"); // our hover text or project cards

      if (isInteractive) {
        gsap.to(cursor, { scale: 2.2, backgroundColor: "rgba(170, 66, 255, 0.2)", borderColor: "#aa42ff", borderWidth: "1.5px", duration: 0.2, ease: "power2.out" });
        if (text) {
          gsap.to(text, { opacity: 0, duration: 0.1 });
        }
      } else {
        gsap.to(cursor, { scale: 1, backgroundColor: "#aa42ff", borderWidth: "0px", duration: 0.2, ease: "power2.out" });
        if (text) {
          gsap.to(text, { opacity: 0, duration: 0.1 });
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-[#aa42ff] rounded-full pointer-events-none z-[10000] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-lg hidden md:flex"
      style={{ willChange: "top, left, transform" }}
    >
      <div
        ref={textRef}
        className="text-[2.5px] tracking-widest font-bold text-black opacity-0"
      ></div>
    </div>
  );
}
