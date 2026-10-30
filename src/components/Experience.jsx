import { experience } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

function Role({ role, org, period, points }) {
  const ref = useReveal();
  return (
    <li ref={ref} className="reveal grid grid-cols-1 gap-4 border-t border-hairline py-9 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
      <div>
        <span
          className="inline-block rounded-full border px-3 py-0.5 text-xs font-bold"
          style={{ borderColor: "var(--accent)", color: "var(--accent-ink)" }}
        >
          {period}
        </span>
        <h3 className="mt-4 font-display text-2xl">{role}</h3>
        <p className="mt-1 text-sm font-bold text-muted">{org}</p>
      </div>
      <ul className="space-y-3">
        {points.map((pt) => (
          <li key={pt} className="flex gap-3 leading-relaxed text-muted">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
            {pt}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped"
          sub="Contract work, open-source contributions, infrastructure bounties and hackathons, each taken from first commit to a running deployment."
        />
        <ol className="border-b border-hairline">
          {experience.map((item) => (
            <Role key={item.role} {...item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
