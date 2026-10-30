import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";
import GithubMark from "./icons/GithubMark";
import SectionHeading from "./SectionHeading";
import { profile, projects, topProjects } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const IMAGES = import.meta.glob("../assets/imgs/*.{png,jpg}", { eager: true, import: "default" });

function resolveImage(name) {
  if (!name) return undefined;
  const match = Object.entries(IMAGES).find(([path]) => path.endsWith(name));
  return match ? match[1] : undefined;
}

function monogram(title) {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-5">
      <a
        href={project.codeHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-bold text-muted hover:text-[var(--text)]"
      >
        <GithubMark size={15} /> Source
      </a>
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline"
        >
          Live <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  );
}

function StackList({ stack }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <li key={s} className="rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-bold text-muted">
          {s}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project, rank }) {
  const ref = useReveal();
  const flip = rank % 2 === 0;
  return (
    <article
      ref={ref}
      className="reveal grid grid-cols-1 overflow-hidden rounded-[2.5rem] border border-hairline bg-surface card-shadow lg:grid-cols-[0.8fr_1.2fr]"
    >
      <div
        className={`relative flex flex-col justify-between gap-10 p-8 sm:p-10 ${flip ? "lg:order-2" : ""}`}
        style={{ background: "linear-gradient(160deg, var(--panel), var(--accent-soft))" }}
      >
        <div className="flex items-center justify-between">
          <span className="label text-accent">Top {rank} by commits</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-bold">
            <GitCommitHorizontal size={14} /> {project.commits} commits
          </span>
        </div>
        <p className="font-display text-[7rem] leading-none sm:text-[9rem]" style={{ color: "var(--accent-ink)" }}>
          {String(rank).padStart(2, "0")}
        </p>
        <StackList stack={project.stack} />
      </div>

      <div className="flex flex-col p-8 sm:p-10">
        <p className="label text-muted">{project.tag}</p>
        <h3 className="mt-3 font-display text-3xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-hairline pt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  const ref = useReveal();
  const image = resolveImage(project.image);
  return (
    <article ref={ref} className="reveal group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-surface card-shadow">
      {image ? (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={project.title}
            className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className="flex h-44 items-end p-6"
          style={{ background: "linear-gradient(160deg, var(--bg-soft), var(--accent-soft))" }}
        >
          <p className="font-display text-6xl leading-none" style={{ color: "var(--accent-ink)" }} aria-hidden="true">
            {monogram(project.title)}
          </p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="label text-accent">{project.tag}</p>
        <h3 className="mt-2 font-display text-xl">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <p className="mt-4 text-xs font-bold text-muted">{project.stack.join(" · ")}</p>
        <div className="mt-5 border-t border-hairline pt-4">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Top three builds"
          sub="My three most active repositories on GitHub, ranked by commit count: a Go backend workshop, a real-time full-stack system and a zero-knowledge web app."
        />

        <div className="space-y-8">
          {topProjects.map((p, i) => (
            <FeaturedProject key={p.title} project={p} rank={i + 1} />
          ))}
        </div>

        <div className="mt-24 mb-10 flex flex-wrap items-end justify-between gap-4">
          <h3 className="font-display text-3xl">More projects</h3>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline"
          >
            Everything on GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
