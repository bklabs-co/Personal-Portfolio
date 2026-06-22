import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import Reveal from "./Reveal";
import { experience, education, certifications } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">

        <Reveal>
          <div className="chip mb-4 flex items-center gap-3 text-signal">
            <span className="text-faint">03 /</span>
            <span className="uppercase tracking-[0.18em]">Experience</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="font-display font-black leading-[1.05] tracking-[-0.03em] text-text"
            style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
          >
            Where the work
            <span className="text-gradient"> actually happened.</span>
          </h2>
        </Reveal>

        {/* Work timeline */}
        <div className="relative mt-16 space-y-12 pl-0 sm:pl-10">
          {/* Vertical line */}
          <div className="absolute left-0 top-3 bottom-0 hidden w-px bg-line sm:block" />

          {experience.map((job) => (
            <Reveal key={job.org} className="relative">
              {/* Dot */}
              <div className="absolute -left-[42px] top-3 hidden h-2.5 w-2.5 rounded-full border-2 border-signal bg-base ring-4 ring-signal/10 sm:block" />

              <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8 transition-colors hover:border-signal/20">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-text sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-signal font-semibold">{job.org}</p>
                  </div>
                  <span className="chip flex items-center gap-1.5 text-faint shrink-0">
                    <FiCalendar className="h-3 w-3" />
                    {job.period}
                  </span>
                </div>

                <p className="mt-4 max-w-2xl text-muted leading-relaxed">{job.summary}</p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {job.points.map((pt) => (
                    <div
                      key={pt.title}
                      className="rounded-xl border border-line bg-panel-2 p-4 transition-colors hover:border-signal/30"
                    >
                      <h4 className="font-semibold text-text text-sm">{pt.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{pt.detail}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {pt.tags.map((t) => (
                          <span key={t} className="chip rounded-full border border-line px-2 py-0.5 text-faint">
                            {t}
                          </span>
                        ))}
                      </div>
                      {pt.link && (
                        <a
                          href={pt.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chip mt-3 flex items-center gap-1 text-muted transition-colors hover:text-signal"
                        >
                          {pt.linkLabel} <FiArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education + Certs */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="chip mb-6 uppercase tracking-[0.15em] text-muted">Education</div>
            </Reveal>
            <div className="space-y-4">
              {education.map((e) => (
                <Reveal key={e.degree}>
                  <div className="rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-signal/30">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <h4 className="font-semibold text-text">{e.degree}</h4>
                      <span className="chip text-faint shrink-0">{e.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{e.school}</p>
                    <span className="mt-2 inline-block rounded-full border border-signal/30 px-2.5 py-0.5 chip text-signal">
                      {e.detail}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="chip mb-6 uppercase tracking-[0.15em] text-muted">Certifications</div>
            </Reveal>
            <div className="space-y-4">
              {certifications.map((c) => (
                <Reveal key={c.name}>
                  <div className="rounded-2xl border border-line bg-panel p-5 transition-colors hover:border-violet/30">
                    <h4 className="font-semibold text-text">{c.name}</h4>
                    <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                    <p className="chip mt-2 text-faint">{c.period}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}