import { education, interests, languages, skillSet, softSkills, toolkit } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import Curves from "./Curves";

function PanelHeading({ children, aside }) {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-3">
      <h3 className="font-display text-2xl">{children}</h3>
      {aside}
    </div>
  );
}

// Two-column list with a hairline divider, after the skill lists in the reference design.
function SplitList({ items }) {
  const half = Math.ceil(items.length / 2);
  const cols = [items.slice(0, half), items.slice(half)];
  return (
    <div className="grid grid-cols-2">
      {cols.map((col, i) => (
        <ul
          key={i}
          className={`space-y-2.5 text-sm ${i === 1 ? "border-l pl-6" : "pr-6"}`}
          style={i === 1 ? { borderColor: "var(--panel-border)" } : undefined}
        >
          {col.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}

function ChipList({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full bg-surface px-4 py-1.5 text-sm">
          {item}
        </li>
      ))}
    </ul>
  );
}

// The large rounded profile panel: education, toolkit, skills, interests and languages.
export default function About() {
  const ref = useReveal();
  return (
    <section id="profile" className="relative py-20 sm:py-24">
      <Curves variant="b" className="-left-40 bottom-0 hidden h-[460px] w-[620px] lg:block" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="reveal relative grid grid-cols-1 gap-12 rounded-[2.5rem] border p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:rounded-[3.5rem] lg:p-16"
          style={{
            background: "linear-gradient(160deg, var(--panel) 0%, var(--accent-soft) 100%)",
            borderColor: "var(--panel-border)",
          }}
        >
          <div className="space-y-12">
            <div>
              <PanelHeading>Education</PanelHeading>
              <div className="space-y-6">
                {education.map((e) => (
                  <div key={e.title}>
                    <div className="flex flex-col items-start gap-2">
                      <span
                        className="rounded-full border px-3 py-0.5 text-xs font-bold"
                        style={{ borderColor: "var(--accent)", color: "var(--accent-ink)" }}
                      >
                        {e.period}
                      </span>
                      <p className="font-bold">{e.title}</p>
                    </div>
                    <p className="mt-1 text-sm text-accent">{e.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{e.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <PanelHeading>Technical toolkit</PanelHeading>
              <ul className="grid grid-cols-4 gap-3 sm:max-w-sm">
                {toolkit.map((t) => (
                  <li
                    key={t.name}
                    title={t.name}
                    className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-surface card-shadow"
                  >
                    <span className="font-display text-2xl" style={{ color: "var(--accent-ink)" }}>
                      {t.short}
                    </span>
                    <span className="mt-0.5 text-[10px] font-bold text-muted">{t.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <PanelHeading>Interests</PanelHeading>
              <ChipList items={interests} />
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <PanelHeading>Soft skills</PanelHeading>
              <SplitList items={softSkills} />
            </div>
            <div>
              <PanelHeading>Skill set</PanelHeading>
              <SplitList items={skillSet} />
            </div>
            <div>
              <PanelHeading>Languages</PanelHeading>
              <SplitList items={languages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
