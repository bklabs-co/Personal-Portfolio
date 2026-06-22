import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { profile, stats } from "../data/content";

function HeroBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Primary blue aurora */}
      <div
        className="absolute -top-60 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full"
        style={{ background: "radial-gradient(ellipse at center, rgba(79,123,255,0.16) 0%, rgba(79,123,255,0.04) 45%, transparent 70%)" }}
      />
      {/* Violet accent â€” right */}
      <div
        className="absolute top-1/3 -right-32 h-[550px] w-[550px] rounded-full"
        style={{ background: "radial-gradient(ellipse at center, rgba(155,135,255,0.13) 0%, transparent 65%)" }}
      />
      {/* Subtle bottom-left glow */}
      <div
        className="absolute -bottom-20 -left-20 h-[380px] w-[380px] rounded-full"
        style={{ background: "radial-gradient(ellipse at center, rgba(79,123,255,0.07) 0%, transparent 70%)" }}
      />
      {/* Grid */}
      <div className="bg-grid absolute inset-0" />
      {/* Grain */}
      <div className="bg-grain absolute inset-0" />
    </div>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-32 pb-24"
    >
      <HeroBg />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="mb-10">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/70 px-4 py-2 text-sm text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-mint opacity-75" />
              <span className="inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Open to full-time roles
          </span>
        </motion.div>

        {/* Main heading â€” huge Satoshi */}
        <motion.h1 variants={fadeUp} className="font-display font-black leading-[0.88] tracking-[-0.04em]">
          <span
            className="block text-text"
            style={{ fontSize: "clamp(3.8rem, 10.5vw, 9rem)" }}
          >
            {profile.name.split(" ")[0]}
          </span>
          <span
            className="text-gradient block"
            style={{ fontSize: "clamp(3.8rem, 10.5vw, 9rem)" }}
          >
            {profile.name.split(" ").slice(1).join(" ")}.
          </span>
        </motion.h1>

        {/* Role line */}
        <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
          <span className="h-px w-12 bg-signal/50 shrink-0" />
          <span className="chip uppercase tracking-[0.22em] text-signal">
            {profile.role} &middot; {profile.subRole}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-lg text-xl font-light leading-relaxed text-muted sm:text-2xl"
        >
          {profile.tagline}
        </motion.p>
        <motion.p variants={fadeUp} className="mt-3 chip text-faint uppercase tracking-[0.14em]">
          MERN &middot; Django &middot; PostgreSQL &middot; Cloudflare &middot; Access Control
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="mt-11 flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollTo("work")}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-signal px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-signal/20 transition-shadow hover:shadow-signal/40"
          >
            <span className="relative z-10">View Work</span>
            <FiArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="absolute inset-0 bg-gradient-to-r from-signal via-violet to-signal bg-[length:200%] opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-7 py-4 text-sm font-medium text-text backdrop-blur-sm transition-all hover:border-signal/50 hover:text-signal"
          >
            Contact Me
          </button>
          <a
            href="/Bharanikumar-R-Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-sm text-faint transition-colors hover:text-muted"
          >
            <FiDownload className="h-3.5 w-3.5" />
            <span>CV</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2.5">
              <span className="font-display text-2xl font-black tabular-nums text-text sm:text-3xl">
                {s.value}
              </span>
              <span className="chip text-faint uppercase tracking-[0.1em]">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="chip text-faint uppercase tracking-[0.22em]">scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.35, 1], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-px bg-gradient-to-b from-faint to-transparent"
        />
      </motion.div>
    </section>
  );
}
