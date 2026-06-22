import { useEffect, useState } from "react";
import { profile } from "../data/content";

const LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
          scrolled ? "glass mx-4 sm:mx-6 lg:mx-auto" : "mx-4 sm:mx-6 lg:mx-auto"
        }`}
        style={{ paddingTop: scrolled ? "0.6rem" : "0", paddingBottom: scrolled ? "0.6rem" : "0" }}
      >
        <button
          onClick={() => scrollTo("top")}
          className="flex items-center gap-2.5 text-text"
          aria-label="Back to top"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-display font-bold tracking-tight">{profile.name.split(" ")[0].toLowerCase()}</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === link.id ? "text-text font-medium" : "text-muted hover:text-text"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="/Bharanikumar-R-Resume.pdf"
            download
            className="rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-signal/50 hover:text-signal"
          >
            Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex rounded-full bg-signal px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-signal/20 transition-all hover:shadow-signal/40"
          >
            Let&apos;s talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-[1.5px] w-4 bg-text transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-[1.5px] w-4 bg-text transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mx-4 mt-2 overflow-hidden rounded-2xl transition-all duration-300 sm:mx-6 md:hidden ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass flex flex-col gap-1 rounded-2xl p-3">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="chip rounded-xl px-4 py-3 text-left text-text hover:bg-panel-2"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/Bharanikumar-R-Resume.pdf"
            download
            className="chip rounded-xl px-4 py-3 text-left text-signal hover:bg-panel-2"
          >
            Download résumé
          </a>
        </div>
      </div>
    </header>
  );
}
