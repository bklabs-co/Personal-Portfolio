import { useEffect, useState } from "react";

const SECTIONS = ["about", "work", "experience", "skills", "contact"];
const LABELS   = ["About", "Work", "Experience", "Skills", "Contact"];

export default function SectionTracker() {
  const [progress, setProgress] = useState(0);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.round((window.scrollY / total) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const currentLabel = LABELS[SECTIONS.indexOf(active)] ?? "";

  return (
    <>
      {/* Left: scroll counter */}
      <div className="scroll-counter">({progress})</div>

      {/* Right: section nav */}
      <div className="section-nav">
        <div className="section-nav-line" />
        {currentLabel && (
          <span className="section-nav-label">{currentLabel}</span>
        )}
      </div>
    </>
  );
}