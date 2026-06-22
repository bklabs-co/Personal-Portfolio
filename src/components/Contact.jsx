import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck, FiDownload, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(79,123,255,0.1) 0%, rgba(155,135,255,0.05) 40%, transparent 70%)" }}
        />
        <div className="bg-grain absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal className="mb-6 flex justify-center">
          <div className="chip flex items-center gap-3 text-signal">
            <span className="text-faint">05 /</span>
            <span className="uppercase tracking-[0.18em]">Get in Touch</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="font-display font-black leading-[1.0] tracking-[-0.04em] text-text"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
          >
            Got a system
            <br />
            that needs{" "}
            <span className="text-gradient">building?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted leading-relaxed">
            Open to full-time roles and select freelance work. React, secure APIs,
            or deploying something that needs to stay up.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={"mailto:" + profile.email}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-signal to-violet px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-signal/20 transition-shadow hover:shadow-signal/40"
          >
            <FiMail className="h-4 w-4" />
            <span>{profile.email}</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-6 py-4 text-sm font-medium text-text backdrop-blur-sm transition-all hover:border-signal/50 hover:text-signal"
            aria-label="Copy email address"
          >
            {copied ? <FiCheck className="h-4 w-4 text-mint" /> : <FiCopy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            { href: profile.github, label: "GitHub", icon: FiGithub },
            { href: profile.linkedin, label: "LinkedIn", icon: FiLinkedin },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-all hover:border-signal/50 hover:text-signal"
            >
              <Icon className="h-4 w-4" />
              {label}
              <FiArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
          <a
            href="/Bharanikumar-R-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-muted transition-all hover:border-signal/50 hover:text-signal"
          >
            <FiDownload className="h-4 w-4" />
            Resume PDF
          </a>
        </Reveal>
      </div>
    </section>
  );
}