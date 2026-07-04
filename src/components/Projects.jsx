import { ArrowUpRight } from "lucide-react";
import GithubMark from "./icons/GithubMark";
import { projects } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const IMAGES = import.meta.glob("../assets/imgs/*.{png,jpg}", { eager: true, import: "default" });

function resolveImage(name) {
  const match = Object.entries(IMAGES).find(([path]) => path.endsWith(name));
  return match ? match[1] : undefined;
}

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface card-shadow"
    >
      <a href={project.href} target="_blank" rel="noreferrer" className="block overflow-hidden">
        <img
          src={resolveImage(project.image)}
          alt={project.title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {project.tag}
        </p>
        <h3 className="font-display text-xl font-bold">
          <a href={project.href} target="_blank" rel="noreferrer" className="hover:underline">
            {project.title}
          </a>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md bg-soft px-2 py-1 text-xs font-medium text-muted">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-5 border-t border-hairline pt-4">
          <a
            href={project.codeHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-[var(--text)]"
          >
            <GithubMark size={15} /> Code
          </a>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Live demo <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useReveal();
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="reveal mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm" style={{ color: "var(--accent)" }}>
            // 02 projects
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted">
            A showcase of shipped work, from hackathon sprints to an in-progress full-stack build.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/Mykelsown"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02]"
            style={{ background: "var(--accent)" }}
          >
            View all projects on GitHub <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
