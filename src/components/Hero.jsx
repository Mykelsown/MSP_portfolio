import { ArrowRight, Download } from "lucide-react";
import Curves from "./Curves";
import Icon3D from "./Icon3D";
import { aboutText, profile } from "../data/content";
import photo from "../assets/imgs/micheal-photo.jpg";

const CONTACTS = [
  { icon: "email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: "github", value: profile.githubHandle, href: profile.github },
  { icon: "location", value: profile.location, href: null },
];

function ContactChip({ icon, value, href }) {
  const inner = (
    <>
      <Icon3D name={icon} size={38} className="group-hover:-translate-y-0.5" />
      <span className="truncate text-sm font-bold">{value}</span>
    </>
  );
  const className = "group flex min-w-0 items-center gap-3";
  if (!href) return <div className={className}>{inner}</div>;
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`${className} transition-colors hover:text-[var(--accent-ink)]`}
    >
      {inner}
    </a>
  );
}

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 sm:pt-36 lg:pb-28">
      <Curves className="-right-24 top-10 hidden h-[520px] w-[700px] lg:block" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          {/* Plain editorial line rather than a status badge: no pill, no glowing dot. */}
          <p className="mb-6 flex items-center gap-3 text-sm text-muted">
            <span className="h-px w-8 shrink-0" style={{ background: "var(--accent)" }} aria-hidden="true" />
            Open to full-stack and AI/ML roles
          </p>

          <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            {profile.firstName}
            <br />
            <span style={{ color: "var(--accent-ink)" }}>{profile.lastName}</span>
          </h1>

          <div className="mt-6 pill-heading">
            <span className="label">{profile.role}</span>
          </div>

          <p className="mt-7 text-sm text-muted">{aboutText.greeting}</p>
          <p className="mt-1 max-w-xl leading-relaxed text-muted">
            {aboutText.intro.map((part) =>
              part.highlight ? (
                <span key={part.text} className="font-bold text-accent">
                  {part.text}
                </span>
              ) : (
                <span key={part.text}>{part.text}</span>
              )
            )}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            <span className="font-bold text-accent">{aboutText.objectiveLabel}</span> {aboutText.objective}
          </p>

          <h2 className="mt-10 font-display text-2xl">Contact</h2>
          <div className="mt-4 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {CONTACTS.map((c) => (
              <ContactChip key={c.value} {...c} />
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold text-white transition-transform hover:scale-[1.02]"
              style={{ background: "var(--text)" }}
            >
              See my work <ArrowRight size={18} />
            </a>
            <a
              href={profile.resumePdf}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-surface px-6 py-3.5 font-bold transition-colors hover:border-[var(--accent)]"
            >
              <Download size={18} /> Download resume
            </a>
          </div>
        </div>

        {/* Stadium-shaped portrait with an offset outline, after the reference design. */}
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]">
          <div
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[999px] border"
            style={{ borderColor: "var(--line)" }}
            aria-hidden="true"
          />
          <div
            className="relative aspect-[3/4.2] overflow-hidden rounded-[999px] card-shadow"
            style={{ background: "linear-gradient(180deg, var(--accent-soft), var(--panel))" }}
          >
            <img src={photo} alt={profile.name} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-hairline bg-surface px-4 py-3 card-shadow">
            <p className="label text-muted">Frontend · Backend · DevOps</p>
            <p className="mt-1 font-display text-lg">Build, ship, scale.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
