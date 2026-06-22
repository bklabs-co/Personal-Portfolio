import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile, stats } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

function wrapWords(text) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="word" style={{ marginRight: "0.28em" }}>
      {word}
    </span>
  ));
}

export default function About() {
  const textRef = useRef(null);
  const subRef  = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const words = textRef.current?.querySelectorAll(".word");
    if (words?.length) {
      gsap.fromTo(
        words,
        { opacity: 0, filter: "blur(8px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.04,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            end: "bottom 30%",
            scrub: 0.8,
          },
        }
      );
    }

    const subWords = subRef.current?.querySelectorAll(".word");
    if (subWords?.length) {
      gsap.fromTo(
        subWords,
        { opacity: 0, filter: "blur(6px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.035,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subRef.current,
            start: "top 80%",
            end: "bottom 35%",
            scrub: 0.6,
          },
        }
      );
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll(".stat-item"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "20vh 4rem 15vh",
        background: "rgb(10,10,10)",
        zIndex: 10,
      }}
    >
      {/* Section label */}
      <span style={{
        display: "block",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.75rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.35)",
        marginBottom: "6vh",
      }}>
        About
      </span>

      {/* Main bio text */}
      <div
        ref={textRef}
        className="word-reveal"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
          lineHeight: 1.5,
          letterSpacing: "-0.01em",
          color: "rgb(240,240,240)",
          maxWidth: "65%",
        }}
      >
        {wrapWords(profile.summary)}
      </div>

      {/* Sub text */}
      <div
        ref={subRef}
        className="word-reveal"
        style={{
          marginTop: "8vh",
          marginLeft: "20%",
          maxWidth: "32%",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(0.9rem, 1.5vw, 1.4rem)",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.55)",
        }}
      >
        {wrapWords("Based in Tamil Nadu, India. Open to remote roles and global collaborations.")}
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        style={{
          marginTop: "14vh",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem 6rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "3rem",
        }}
      >
        {stats.map((s) => (
          <div key={s.label} className="stat-item" style={{ opacity: 0 }}>
            <div style={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.04em",
              color: "rgb(240,240,240)",
              lineHeight: 1,
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginTop: "0.5rem",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}