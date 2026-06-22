import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiX, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const isPro = project.type === "professional";
  const accent = isPro ? "#4f7bff" : "#9b87ff";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        style={{ "--accent": accent }}
      >
        {/* Accent bar */}
        <div
          className="h-[2px] w-full opacity-50 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "linear-gradient(90deg, " + accent + ", transparent)" }}
        />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-line bg-panel-2 px-5 py-3">
          <span className="chip uppercase tracking-[0.18em]" style={{ color: accent, opacity: 0.85 }}>
            {String(index + 1).padStart(2, "0")} / {isPro ? "client" : "personal"}
          </span>
          {project.live && (
            <span className="chip flex items-center gap-1.5 text-mint/70">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-mint" />
              live
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-bold tracking-tight text-text">
            {project.name}
          </h3>
          <p className="chip mt-0.5 text-faint">{project.kind}</p>

          <p className="mt-4 text-sm leading-relaxed text-muted line-clamp-3">
            {project.solution}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((t) => (
              <span key={t} className="chip rounded-full border border-line px-2.5 py-1 text-faint">
                {t}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="chip rounded-full border border-line px-2.5 py-1 text-faint">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
            <button
              onClick={() => setOpen(true)}
              className="text-sm font-medium text-muted transition-colors hover:text-text"
            >
              Case study &rarr;
            </button>
            <div className="flex items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-faint transition-colors hover:text-signal"
                  aria-label={"Visit " + project.name}
                >
                  <FiExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-faint transition-colors hover:text-signal"
                  aria-label={project.name + " GitHub"}
                >
                  <FiGithub className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle at 50% 0%, " + accent + "0a 0%, transparent 60%)" }}
        />
      </motion.article>

      {/* Case study modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-panel p-8"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-signal/50 hover:text-signal"
                aria-label="Close"
              >
                <FiX className="h-4 w-4" />
              </button>

              <div className="mb-6 h-0.5 w-12 rounded-full" style={{ background: accent }} />

              <span className="chip uppercase tracking-[0.2em]" style={{ color: accent }}>
                {isPro ? "Client Work" : "Personal Project"}
              </span>
              <h3 className="mt-3 font-display text-2xl font-black tracking-tight text-text">
                {project.name}
              </h3>
              <p className="chip mt-1 text-muted">{project.kind}</p>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="chip mb-2 uppercase tracking-[0.15em] text-faint">Problem</h4>
                  <p className="text-muted leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="chip mb-2 uppercase tracking-[0.15em] text-faint">Solution</h4>
                  <p className="text-muted leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <h4 className="chip mb-3 uppercase tracking-[0.15em] text-faint">Key Features</h4>
                  <ul className="space-y-2.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-text">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="chip mb-3 uppercase tracking-[0.15em] text-faint">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span key={t} className="chip rounded-full border border-line px-3 py-1.5 text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-base transition-opacity hover:opacity-90"
                  >
                    View Live <FiArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-text transition-all hover:border-signal/50 hover:text-signal"
                  >
                    <FiGithub className="h-4 w-4" /> View Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}