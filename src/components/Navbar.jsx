import { profile } from "../data/content";

const NAV_LINKS = [
  { id: "about",      label: "About" },
  { id: "work",       label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills",     label: "Skills" },
  { id: "contact",    label: "Contact" },
];

function ChrHover({ label, onClick, size = "0.85rem" }) {
  return (
    <button
      onClick={onClick}
      className="chr-hover"
      style={{ fontSize: size, background: "none", border: "none", padding: 0, cursor: "pointer" }}
      aria-label={label}
    >
      {label.split("").map((ch, i) => (
        <span key={i} className="ch-wrap" style={{ "--i": i }}>
          <span className="ch-top">{ch}</span>
          <span className="ch-bot">{ch}</span>
        </span>
      ))}
    </button>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav className="bottom-nav">
      {/* Left: version */}
      <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        &rarr; v1.0
      </div>

      {/* Center: social links */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="chr-hover"
          style={{ fontSize: "0.85rem" }}
        >
          {"LINKEDIN".split("").map((ch, i) => (
            <span key={i} className="ch-wrap" style={{ "--i": i }}>
              <span className="ch-top">{ch}</span>
              <span className="ch-bot">{ch}</span>
            </span>
          ))}
        </a>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "1.1rem" }}>/</span>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="chr-hover"
          style={{ fontSize: "0.85rem" }}
        >
          {"GITHUB".split("").map((ch, i) => (
            <span key={i} className="ch-wrap" style={{ "--i": i }}>
              <span className="ch-top">{ch}</span>
              <span className="ch-bot">{ch}</span>
            </span>
          ))}
        </a>
      </div>

      {/* Right: page nav */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <ChrHover key={link.id} label={link.label} onClick={() => scrollTo(link.id)} />
        ))}
      </div>
    </nav>
  );
}