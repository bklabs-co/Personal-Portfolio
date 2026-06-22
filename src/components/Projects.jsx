import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { professionalProjects, personalProjects } from "../data/content";

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        <Reveal>
          <div className="chip mb-4 flex items-center gap-3 text-signal">
            <span className="text-faint">02 /</span>
            <span className="uppercase tracking-[0.18em]">Selected Work</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="font-display font-black leading-[1.05] tracking-[-0.03em] text-text"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            Production systems,
            <span className="text-muted font-medium"> not just demos.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-lg text-muted leading-relaxed">
            Client work running in production and personal builds made to learn something
            specific. Every card opens into the actual problem it solved.
          </p>
        </Reveal>

        {/* Professional work */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-signal" />
              <span className="chip text-muted uppercase tracking-[0.15em]">Professional Work</span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {professionalProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* Personal projects */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-violet" />
              <span className="chip text-muted uppercase tracking-[0.15em]">Personal Projects</span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}