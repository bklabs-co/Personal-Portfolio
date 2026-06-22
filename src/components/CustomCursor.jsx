import { useEffect, useRef, useState } from "react";

// Subtle custom cursor: a small dot plus a lagging ring.
// Disabled automatically on touch devices.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    let raf;
    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onDown = () => ringRef.current?.classList.add("scale-75");
    const onUp = () => ringRef.current?.classList.remove("scale-75");

    const onEnterInteractive = () => ringRef.current?.classList.add("scale-150", "opacity-60");
    const onLeaveInteractive = () => ringRef.current?.classList.remove("scale-150", "opacity-60");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(tick);

    const interactive = document.querySelectorAll("a, button, [data-cursor-interactive]");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] hidden md:block">
      <div
        ref={dotRef}
        className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal"
      />
      <div
        ref={ringRef}
        className="absolute top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal/50 transition-[transform,opacity] duration-200 ease-out opacity-40"
      />
    </div>
  );
}
