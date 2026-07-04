import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "../data/content";
import { useReveal } from "../hooks/useReveal";

function TimelineItem({ index, title, org, period, points, description, accentVar }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal relative pl-9">
      <span
        className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white"
        style={{ background: `var(${accentVar})` }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute left-[11px] top-7 bottom-[-2rem] w-px bg-[var(--border)] last:hidden" />

      <div className="rounded-2xl border border-hairline bg-surface p-6 card-shadow">
        <h4 className="font-display text-lg font-bold">{title}</h4>
        <p className="mt-1 font-mono text-sm" style={{ color: `var(${accentVar})` }}>
          {org} · {period}
        </p>
        {description && <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>}
        {points && (
          <ul className="mt-3 space-y-2">
            {points.map((pt, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-current" />
                {pt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const headingRef = useReveal();
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm" style={{ color: "var(--accent)" }}>
            // 03 experience
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Experience &amp; Education</h2>
          <p className="mt-4 text-lg text-muted">
            Bounty programs, open-source contributions, and contract work, alongside the engineering
            foundation underneath it all.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 flex items-center gap-2 font-display text-xl font-bold">
              <Briefcase size={20} style={{ color: "var(--accent)" }} /> Experience
            </h3>
            <div className="space-y-8">
              {experience.map((item, i) => (
                <TimelineItem key={item.role} index={i} accentVar="--accent" {...item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 flex items-center gap-2 font-display text-xl font-bold">
              <GraduationCap size={20} style={{ color: "var(--signal)" }} /> Education
            </h3>
            <div className="space-y-8">
              {education.map((item, i) => (
                <TimelineItem
                  key={item.title}
                  index={i}
                  accentVar="--signal"
                  title={item.title}
                  org={item.org}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
