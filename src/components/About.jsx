import { aboutText, skills } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const CATEGORY_ORDER = ["Frontend", "Backend", "Tooling"];

export default function About() {
  const headingRef = useReveal();
  const textRef = useReveal();
  const skillsRef = useReveal();

  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm" style={{ color: "var(--accent)" }}>
            // 01 about
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{aboutText.heading}</h2>
          <p className="mt-4 text-lg text-muted">{aboutText.intro}</p>
        </div>

        <div ref={textRef} className="reveal grid grid-cols-1 gap-6 lg:grid-cols-3">
          {aboutText.paragraphs.map((p, i) => (
            <p key={i} className="rounded-2xl border border-hairline bg-surface p-6 leading-relaxed text-muted card-shadow">
              {p}
            </p>
          ))}
        </div>

        <div
          ref={skillsRef}
          className="reveal mt-8 rounded-2xl border p-6"
          style={{ borderColor: "var(--accent-2)", background: "var(--accent-2-soft)" }}
        >
          <p className="font-mono text-sm leading-relaxed">{aboutText.mantraNote}</p>
        </div>

        <div className="mt-20">
          <h3 className="mb-10 font-display text-2xl font-bold">Technical Skills</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {CATEGORY_ORDER.map((category) => (
              <div key={category}>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === category)
                    .map((s) => (
                      <span
                        key={s.name}
                        className="rounded-lg border border-hairline bg-surface px-3 py-2 text-sm font-medium"
                      >
                        {s.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
