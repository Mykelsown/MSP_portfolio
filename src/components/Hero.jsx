import { ArrowRight, Download } from "lucide-react";
import { profile } from "../data/content";
import photo from "../assets/imgs/micheal-photo.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="mb-5 flex items-center gap-2 font-mono text-sm text-muted">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--signal)", boxShadow: "0 0 0 4px color-mix(in srgb, var(--signal) 20%, transparent)" }}
            />
            Available for frontend & full-stack work
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-lg sm:text-xl" style={{ color: "var(--accent)" }}>
            {profile.role}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02]"
              style={{ background: "var(--accent)" }}
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href={profile.resumePdf}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-hairline px-6 py-3.5 font-semibold transition-colors hover:border-[var(--accent)]"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-3xl blur-2xl" style={{ background: "var(--accent-soft)" }} />
          <div className="overflow-hidden rounded-2xl border border-hairline bg-surface card-shadow">
            <div className="flex items-center gap-1.5 border-b border-hairline px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-muted">whoami.sh</span>
            </div>

            <div className="p-5">
              <img
                src={photo}
                alt={profile.name}
                className="mb-5 h-40 w-40 rounded-xl object-cover mx-auto border border-hairline"
              />
              <div className="space-y-2 font-mono text-[13px] leading-relaxed">
                <p className="text-muted">
                  <span style={{ color: "var(--signal)" }}>$</span> whoami
                </p>
                <p>{profile.name}</p>
                <p className="text-muted">
                  <span style={{ color: "var(--signal)" }}>$</span> cat status.txt
                </p>
                <p>
                  {profile.mantraJa}{" "}
                  <span className="text-muted">
                    ({profile.mantraRomaji}), meaning "{profile.mantraMeaning}"
                  </span>
                </p>
                <p className="text-muted">
                  <span style={{ color: "var(--signal)" }}>$</span> location --show
                </p>
                <p>
                  {profile.location}
                  <span className="terminal-caret" style={{ color: "var(--accent)" }}>
                    _
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
