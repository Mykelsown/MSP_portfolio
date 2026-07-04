import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/content";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
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
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-md transition-all duration-300 sm:px-6 ${
            scrolled ? "border-hairline bg-surface/80 card-shadow" : "border-transparent bg-transparent"
          }`}
        >
          <a href="#home" className="font-mono text-lg font-semibold tracking-tight">
            <span style={{ color: "var(--accent)" }}>{profile.initials}</span>
            <span className="text-muted">.</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 font-mono text-sm text-muted transition-colors hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden md:flex" />
            <a
              href="#contact"
              className="hidden rounded-lg px-4 py-2 font-mono text-sm font-medium text-white transition-transform hover:scale-[1.03] md:inline-block"
              style={{ background: "var(--accent)" }}
            >
              Say hi
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
        <div className="mx-4 mt-2 rounded-2xl border border-hairline bg-surface/95 p-4 backdrop-blur-md card-shadow md:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-mono text-sm text-muted hover:bg-soft hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-hairline pt-3">
              <span className="font-mono text-xs text-muted">Theme</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
