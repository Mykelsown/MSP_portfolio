import { BrainCircuit } from "lucide-react";
import { now } from "../data/content";
import { useReveal } from "../hooks/useReveal";

// "Currently doing": the move into AI and ML engineering.
export default function Now() {
  const ref = useReveal();
  return (
    <section id="now" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="reveal grid grid-cols-1 gap-10 rounded-[2.5rem] border border-hairline bg-surface p-8 card-shadow sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="label text-accent">Currently doing</p>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold"
                style={{ background: "var(--signal-soft)", color: "var(--signal)" }}
              >
                <span className="status-dot" /> {now.status}
              </span>
            </div>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">{now.heading}</h2>
            <p className="mt-5 leading-relaxed text-muted">{now.intro}</p>
            <div
              className="mt-8 hidden h-24 w-24 items-center justify-center rounded-full lg:flex"
              style={{ background: "var(--accent-soft)", color: "var(--accent-ink)" }}
              aria-hidden="true"
            >
              <BrainCircuit size={40} strokeWidth={1.4} />
            </div>
          </div>

          <ol className="relative space-y-5">
            {now.tracks.map((track, i) => (
              <li
                key={track.title}
                className="rounded-3xl border p-6"
                style={{
                  borderColor: i === 1 ? "var(--accent)" : "var(--border)",
                  background: i === 1 ? "var(--accent-soft)" : "var(--bg)",
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl" style={{ color: "var(--accent-ink)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold">{track.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{track.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
