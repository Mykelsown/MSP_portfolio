import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "What I Do" },
  { href: "#now", label: "Now" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`mx-auto max-w-6xl px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-full border px-4 py-2 backdrop-blur-md transition-all duration-300 sm:px-6 ${
            scrolled
              ? "border-hairline bg-surface/85 card-shadow"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#about" aria-label="Back to top">
            <img src={profile.initials} alt="Samuel Micheal Pelumi logo" className="h-10 w-auto" />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.resumePdf}
              download
              className="hidden rounded-full px-5 py-2 text-sm font-bold text-white transition-transform hover:scale-[1.03] md:inline-block"
              style={{ background: "var(--text)" }}
            >
              Resume
            </a>
            <button
              className="text-[var(--text)] md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mx-4 mt-1 rounded-3xl border border-hairline bg-surface/95 p-4 backdrop-blur-md card-shadow md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-muted hover:bg-soft hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumePdf}
              download
              className="mt-2 rounded-xl px-3 py-2.5 text-center text-sm font-bold text-white"
              style={{ background: "var(--text)" }}
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
