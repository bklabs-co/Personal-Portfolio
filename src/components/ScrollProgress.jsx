import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (barRef.current) barRef.current.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 99998, background: "rgba(255,255,255,0.05)" }}>
      <div ref={barRef} style={{ height: "100%", background: "rgb(255,30,0)", width: "0%", transition: "width 0.1s linear", transformOrigin: "left" }} />
    </div>
  );
}