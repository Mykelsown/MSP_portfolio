import { Mail, MapPin, Phone } from "lucide-react";
import GithubMark from "./icons/GithubMark";
import ContactForm from "./ContactForm";
import { contact, profile } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const CHANNELS = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, accentVar: "--accent" },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, accentVar: "--signal" },
  { icon: GithubMark, label: "GitHub", value: profile.githubHandle, href: profile.github, accentVar: "--accent-2" },
  { icon: MapPin, label: "Location", value: profile.location, href: null, accentVar: "--accent" },
];

function ChannelCard({ icon: Icon, label, value, href, accentVar }) {
  const content = (
    <>
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
        style={{ background: `var(${accentVar})` }}
      >
        <Icon size={18} />
      </span>
      <span className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
        <p className="font-medium break-all">{value}</p>
      </span>
    </>
  );

  const className = "flex items-center gap-4 rounded-xl border border-hairline bg-soft p-4 transition-transform hover:-translate-y-0.5";

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  );
}

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm" style={{ color: "var(--accent)" }}>
            // 04 contact
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{contact.heading}</h2>
          <p className="mt-4 text-lg text-muted">{contact.sub}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ContactForm />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:content-start">
            {CHANNELS.map((c) => (
              <ChannelCard key={c.label} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
