import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience, education, certifications } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const rootRef = useRef(null);

  useEffect(() => {
    const items = rootRef.current?.querySelectorAll(".exp-row");
    if (!items?.length) return;
    gsap.fromTo(items,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" } }
    );
  }, []);

  return (
    <section
      id="experience"
      ref={rootRef}
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
        Experience
      </span>

      {/* Work experience */}
      {(experience || []).map((job) => (
        <div key={job.org} className="exp-row" style={{ opacity: 0, marginBottom: "6vh" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "rgb(240,240,240)", lineHeight: 1.2 }}>
                {job.role}
              </h3>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginTop: "0.3rem", display: "block" }}>
                {job.org}
              </span>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.25)", whiteSpace: "nowrap" }}>
              {job.period}
            </span>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.45)", maxWidth: "60%" }}>
            {job.summary}
          </p>
          {job.points?.map((pt) => (
            <div key={pt.title} style={{ marginTop: "1.5rem", paddingLeft: "1.5rem", borderLeft: "1px solid rgba(255,30,0,0.3)" }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "rgb(240,240,240)", marginBottom: "0.3rem" }}>
                {pt.title}
                {pt.link && <a href={pt.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "0.8rem", color: "rgb(255,30,0)", fontSize: "0.75rem", textDecoration: "none" }}>&rarr; {pt.linkLabel}</a>}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.4rem" }}>
                {pt.tags?.map((t) => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "0.2em 0.7em" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Education + Certs */}
      <div style={{ marginTop: "10vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 8vw" }}>
        <div>
          <span style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "2rem" }}>Education</span>
          {(education || []).map((ed) => (
            <div key={ed.degree} className="exp-row" style={{ opacity: 0, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.2rem", marginBottom: "1.2rem" }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1rem, 1.5vw, 1.3rem)", color: "rgb(240,240,240)" }}>{ed.degree}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginTop: "0.3rem" }}>{ed.school} · {ed.period}</div>
            </div>
          ))}
        </div>
        <div>
          <span style={{ display: "block", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "2rem" }}>Certifications</span>
          {(certifications || []).map((cert) => (
            <div key={cert.name} className="exp-row" style={{ opacity: 0, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.2rem", marginBottom: "1.2rem" }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1rem, 1.5vw, 1.3rem)", color: "rgb(240,240,240)" }}>{cert.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", marginTop: "0.3rem" }}>{cert.issuer} · {cert.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}