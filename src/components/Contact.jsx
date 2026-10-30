import { Mail, MapPin, Phone } from "lucide-react";
import GithubMark from "./icons/GithubMark";
import ContactForm from "./ContactForm";
import { contact, profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const CHANNELS = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: GithubMark, label: "GitHub", value: profile.githubHandle, href: profile.github },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
];

function ChannelCard({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
        style={{ background: "var(--accent-soft)", color: "var(--accent-ink)" }}
      >
        <Icon size={18} />
      </span>
      <span className="min-w-0">
        <p className="label text-muted">{label}</p>
        <p className="font-bold break-all">{value}</p>
      </span>
    </>
  );

  const className = "flex items-center gap-4 rounded-2xl border border-hairline bg-surface p-4 transition-transform hover:-translate-y-0.5";

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
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact" title={contact.heading} sub={contact.sub} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ContactForm />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
            {CHANNELS.map((c) => (
              <ChannelCard key={c.label} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
