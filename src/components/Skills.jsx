import Reveal from "./Reveal";
import { skillGroups } from "../data/content";

const GROUP_ACCENTS = {
  "Core": "#4f7bff",
  "Also fluent": "#9b87ff",
  "Ship & run": "#34d399",
  "Workflow": "#fbbf24",
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(155,135,255,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="chip mb-4 flex items-center gap-3 text-signal">
            <span className="text-faint">04 /</span>
            <span className="uppercase tracking-[0.18em]">Stack</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="font-display font-black leading-[1.05] tracking-[-0.03em] text-text"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            Tools I reach for
            <span className="text-muted font-medium"> without thinking twice.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const color = GROUP_ACCENTS[group.label] || "#4f7bff";
            return (
              <Reveal
                key={group.label}
                delay={i * 0.08}
                className="group relative overflow-hidden rounded-2xl border border-line bg-panel p-6 transition-all hover:border-signal/30"
              >
                <div
                  className="absolute left-0 right-0 top-0 h-0.5 opacity-50 transition-opacity group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, " + color + ", transparent)" }}
                />
                <h3
                  className="chip mb-5 uppercase tracking-[0.2em]"
                  style={{ color }}
                >
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip rounded-full border border-line px-3 py-1.5 text-muted transition-colors hover:border-signal/30 hover:text-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}