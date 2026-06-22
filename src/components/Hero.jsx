import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { profile } from "../data/content";

export default function Hero() {
  const taglineRef = useRef(null);
  const nameRef    = useRef(null);
  const barRef     = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    if (nameRef.current) {
      const parts = nameRef.current.querySelectorAll(".name-part");
      tl.fromTo(parts,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1.1, ease: "power3.out" }
      );
    }
    if (taglineRef.current) {
      tl.fromTo(taglineRef.current,
        { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        { opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );
    }
    if (barRef.current) {
      tl.fromTo(barRef.current,
        { opacity: 0, clipPath: "inset(0 0 100% 0)" },
        { opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
    }
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "rgb(10,10,10)",
      }}
    >
      {/* Red atmospheric glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "65vw",
          height: "110vh",
          background:
            "radial-gradient(ellipse at top right, rgba(255,30,0,0.45) 0%, rgba(160,0,0,0.25) 35%, rgba(80,0,0,0.1) 60%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "blob-drift 14s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "35vw",
          height: "50vh",
          background:
            "radial-gradient(ellipse at bottom left, rgba(255,30,0,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Tagline - top left */}
      <p
        ref={taglineRef}
        style={{
          position: "absolute",
          top: "3rem",
          left: "3rem",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)",
          lineHeight: 1.75,
          color: "rgb(240,240,240)",
          maxWidth: "26rem",
          opacity: 0,
        }}
      >
        {profile.tagline}
      </p>

      {/* Main name block - centered vertically */}
      <div
        ref={nameRef}
        style={{
          position: "absolute",
          bottom: "clamp(5rem, 12vh, 9rem)",
          left: "3rem",
          right: "3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          lineHeight: 1,
          overflow: "hidden",
        }}
      >
        <span
          className="name-part"
          style={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(4rem, 11.5vw, 11rem)",
            letterSpacing: "-0.03em",
            color: "rgb(240,240,240)",
            display: "block",
            lineHeight: 1,
          }}
        >
          Bharanikumar
        </span>
        <span
          className="name-part"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(4rem, 11.5vw, 11rem)",
            letterSpacing: "-0.02em",
            color: "rgb(255,30,0)",
            display: "block",
            lineHeight: 1,
          }}
        >
          R.
        </span>
      </div>

      {/* Horizontal rule */}
      <div
        ref={barRef}
        style={{
          position: "absolute",
          bottom: "calc(clamp(5rem, 12vh, 9rem) - 1.5rem)",
          left: "3rem",
          right: "3rem",
          height: "1px",
          background: "rgba(255,255,255,0.15)",
          opacity: 0,
        }}
      />

      {/* Subtitle row */}
      <div
        style={{
          position: "absolute",
          top: "3rem",
          right: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "0.4rem",
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
          {profile.role}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
          {profile.location}
        </span>
      </div>

      {/* Scroll hint */}
      <div
        onClick={() => scrollTo("about")}
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          opacity: 0.35,
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          scroll
        </span>
        <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)" }} />
      </div>
    </section>
  );
}