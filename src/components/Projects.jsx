import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { professionalProjects, personalProjects } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const ALL = [
  ...(professionalProjects || []).map((p) => ({ ...p, type: "professional" })),
  ...(personalProjects   || []).map((p) => ({ ...p, type: "personal" })),
];

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const listRef = useRef(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll(".proj-item");
    if (!items?.length) return;
    gsap.fromTo(items,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: listRef.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section
      id="work"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "20vh 4rem 15vh",
        background: "rgb(10,10,10)",
        zIndex: 10,
      }}
    >
      <span style={{
        display: "block",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.75rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.35)",
        marginBottom: "8vh",
      }}>
        Selected Work
      </span>

      <div ref={listRef} style={{ position: "relative" }}>
        {ALL.map((project, i) => (
          <div
            key={project.id || i}
            className="proj-item"
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(-1)}
            style={{
              opacity: 0,
              padding: "1.4em 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              cursor: "pointer",
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: "2rem",
              transition: "all 0.4s ease",
              ...(i === 0 ? { borderTop: "1px solid rgba(255,255,255,0.08)" } : {}),
            }}
          >
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.6rem, 3.5vw, 3.5rem)",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: activeIdx === i ? "rgb(240,240,240)" : "rgba(255,255,255,0.2)",
              transition: "color 0.4s ease",
              whiteSpace: "nowrap",
            }}>
              {project.name}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}>
                {project.kind || project.type}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgb(255,30,0)",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                >
                  &rarr; View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}