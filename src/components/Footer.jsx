import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer style={{
      padding: "2rem 4rem",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "rgb(10,10,10)",
    }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)" }}>
        {profile.name} &copy; 2025
      </span>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.2)",
          background: "none",
          border: "none",
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "rgb(240,240,240)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.2)"; }}
      >
        Back to top &uarr;
      </button>
    </footer>
  );
}