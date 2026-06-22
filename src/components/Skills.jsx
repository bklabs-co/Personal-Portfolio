import { useState, useRef, useEffect } from "react";
import { skillGroups } from "../data/content";

function AccordionItem({ group }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (!bodyRef.current || !innerRef.current) return;
    bodyRef.current.style.height = open
      ? innerRef.current.offsetHeight + "px"
      : "0px";
  }, [open]);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "1.4em 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          color: "rgb(240,240,240)",
        }}
      >
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.4rem, 2.8vw, 2.6rem)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          color: open ? "rgb(240,240,240)" : "rgba(255,255,255,0.45)",
          transition: "color 0.35s",
          textAlign: "left",
        }}>
          {group.label}
        </span>
        <span style={{
          fontSize: "1.6rem",
          color: open ? "rgb(255,30,0)" : "rgba(255,255,255,0.3)",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "all 0.35s cubic-bezier(0.87,0,0.13,1)",
          lineHeight: 1,
          flexShrink: 0,
        }}>
          +
        </span>
      </button>
      <div ref={bodyRef} className="accordion-body">
        <ul
          ref={innerRef}
          style={{
            listStyle: "none",
            padding: "0 0 1.8rem",
            margin: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem 2rem",
          }}
        >
          {group.skills.map((sk) => (
            <li key={sk} style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(0.9rem, 1.2vw, 1.15rem)",
              lineHeight: 2.2,
              color: "rgba(255,255,255,0.4)",
            }}>
              {sk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "20vh 4rem 15vh",
        background: "rgb(10,10,10)",
        zIndex: 10,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0 8vw",
        alignItems: "start",
      }}
    >
      {/* Left: label + description */}
      <div>
        <span style={{
          display: "block",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          marginBottom: "6vh",
        }}>
          Skills
        </span>
        <p style={{
          fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          color: "rgb(240,240,240)",
          textTransform: "uppercase",
        }}>
          Full Stack Engineer.<br />
          Specialized in Access Control &amp; System Architecture.
        </p>
      </div>

      {/* Right: accordion */}
      <div style={{ paddingTop: "calc(0.75rem + 6vh)" }}>
        {(skillGroups || []).map((group) => (
          <AccordionItem key={group.label} group={group} />
        ))}
      </div>
    </section>
  );
}