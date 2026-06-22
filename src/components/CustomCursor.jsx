import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{ position: "fixed", top: 0, left: 0, width: 6, height: 6, borderRadius: "50%", background: "rgb(240,240,240)", pointerEvents: "none", zIndex: 99999, mixBlendMode: "difference" }} />
      <div ref={ringRef} style={{ position: "fixed", top: 0, left: 0, width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.5)", pointerEvents: "none", zIndex: 99999, mixBlendMode: "difference" }} />
    </>
  );
}