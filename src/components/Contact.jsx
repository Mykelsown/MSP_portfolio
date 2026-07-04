import { Globe, Mail, Phone } from "lucide-react";
import GithubMark from "./icons/GithubMark";
import { contact, profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const CHANNELS = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, accentVar: "--accent" },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, accentVar: "--signal" },
  { icon: GithubMark, label: "GitHub", value: profile.githubHandle, href: profile.github, accentVar: "--accent-2" },
  { icon: Globe, label: "Portfolio", value: profile.githubHandle, href: profile.github, accentVar: "--accent" },
];

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal rounded-3xl border border-hairline bg-surface p-8 card-shadow sm:p-12">
          <p className="mb-3 font-mono text-sm" style={{ color: "var(--accent)" }}>
            // 04 contact
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{contact.heading}</h2>
          <p className="mt-4 text-lg text-muted">{contact.sub}</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CHANNELS.map(({ icon: Icon, label, value, href, accentVar }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-hairline bg-soft p-4 transition-transform hover:-translate-y-0.5"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: `var(${accentVar})` }}
                >
                  <Icon size={18} />
                </span>
                <span>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
                  <p className="font-medium">{value}</p>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
