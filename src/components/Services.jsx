import { Database, Layout, Rocket, Server } from "lucide-react";
import { services } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

const ICONS = { frontend: Layout, backend: Server, data: Database, devops: Rocket };

function ServiceCard({ service, index }) {
  const ref = useReveal();
  const Icon = ICONS[service.key];
  return (
    <article
      ref={ref}
      className="reveal flex flex-col rounded-3xl border border-hairline bg-surface p-7 card-shadow transition-transform hover:-translate-y-1"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center justify-between">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-2xl"
          style={{ background: "var(--accent-soft)", color: "var(--accent-ink)" }}
        >
          <Icon size={20} />
        </span>
        <span className="font-display text-2xl" style={{ color: "var(--panel-border)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 font-display text-xl">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
      <ul className="mt-6 space-y-2 border-t border-hairline pt-5">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I do"
          title="End-to-end, front to back"
          sub="I'm a full-stack engineer: I build the frontend and the backend, then organise the build, deployment and production pipelines that keep them running."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.key} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
