import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const titleRef = useRef(null);
  const rootRef  = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const chars = titleRef.current.querySelectorAll(".char");
    gsap.fromTo(chars,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, stagger: 0.04, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
      }
    );
  }, []);

  const renderChars = (text) =>
    text.split("").map((ch, i) => (
      <span key={i} className="char" style={{ display: "inline-block" }}>
        {ch === " " ? "\u00A0" : ch}
      </span>
    ));

  return (
    <section
      id="contact"
      ref={rootRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "20vh 4rem 18vh",
        background: "rgb(10,10,10)",
        zIndex: 10,
        overflow: "hidden",
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
        Contact
      </span>

      {/* Big title */}
      <h2
        ref={titleRef}
        style={{
          fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(3.5rem, 10vw, 9rem)",
          letterSpacing: "-0.04em",
          lineHeight: 0.92,
          color: "rgb(240,240,240)",
          textTransform: "uppercase",
          marginBottom: "8vh",
        }}
      >
        {renderChars("Let's")}
        <br />
        {renderChars("Work")}
        <br />
        <span style={{ color: "rgb(255,30,0)", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400, textTransform: "none" }}>
          {renderChars("Together.")}
        </span>
      </h2>

      {/* Email link */}
      <a
        href={`mailto:${profile.email}`}
        className="chr-hover"
        style={{
          display: "inline-flex",
          fontSize: "clamp(1rem, 1.8vw, 1.5rem)",
          color: "rgba(255,255,255,0.55)",
          textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          paddingBottom: "0.3em",
          marginBottom: "5vh",
          transition: "color 0.3s, border-color 0.3s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "rgb(240,240,240)"; e.currentTarget.style.borderBottomColor = "rgb(255,30,0)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)"; }}
      >
        {profile.email}
      </a>

      {/* Social row */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "rgb(240,240,240)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
        >
          LinkedIn
        </a>
        <span style={{ color: "rgba(255,255,255,0.15)" }}>/</span>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "rgb(240,240,240)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
        >
          GitHub
        </a>
        <span style={{ color: "rgba(255,255,255,0.15)" }}>/</span>
        <a
          href={`mailto:${profile.email}`}
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "rgb(240,240,240)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
        >
          Email
        </a>
      </div>
    </section>
  );
}