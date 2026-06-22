import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "./Reveal";
import { profile, stats } from "../data/content";
import profileImg from "../assets/profile-clean.jpg";

function Counter({ target, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const numTarget = parseInt(target.replace(/\D/g, ""), 10) || 0;
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView || numTarget === 0) return;
    let start = 0;
    const increment = numTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numTarget) {
        setCount(numTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numTarget, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {inView ? count : 0}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        <Reveal>
          <div className="chip mb-4 flex items-center gap-3 text-signal">
            <span className="text-faint">01 /</span>
            <span className="uppercase tracking-[0.18em]">About</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_400px] lg:gap-20">

          {/* Left: Story */}
          <div>
            <Reveal delay={0.05}>
              <h2
                className="font-display font-black leading-[1.05] tracking-[-0.03em] text-text"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                Most devs ship features.
                <br />
                <span className="text-gradient">I ship the boundary</span>
                <br />
                <span className="text-muted font-medium" style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}>
                  that decides what gets through.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 space-y-4 text-lg text-muted leading-relaxed">
              <p>{profile.summary}</p>
              <p>
                My stack lives in the MERN ecosystem: React on the front, Node/Express or
                Django on the back, PostgreSQL underneath. The work that actually shaped how
                I think is access control -- building the layer that decides whether a request
                gets through, gets logged, or gets blocked, and deploying it somewhere that stays up.
              </p>
              <p>
                Outside client work I build to understand. A blog platform from raw REST APIs.
                A cyberbullying classifier. Small tools that taught me something when I made them.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-2.5">
              {["Problem-first", "Security-minded", "Ships & maintains", "Clean APIs", "Production-grade"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-muted transition-colors hover:border-signal/50 hover:text-text"
                >
                  {t}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Right: Photo */}
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[380px] lg:mx-0">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-panel">
              <img
                src={profileImg}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
              <div className="glass absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3">
                <p className="chip text-muted">
                  <span className="text-mint">&#9679;</span> {profile.location}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-violet/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-4 bottom-12 h-28 w-28 rounded-full bg-signal/12 blur-2xl" />
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.07}
              className="relative overflow-hidden bg-panel px-6 py-9 text-center sm:text-left"
            >
              <div className="font-display text-4xl font-black text-text sm:text-5xl">
                <Counter target={s.value} />
              </div>
              <div className="chip mt-2 text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}