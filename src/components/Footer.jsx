import { Mail } from "lucide-react";
import GithubMark from "./icons/GithubMark";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="font-mono text-sm text-muted">
          © {new Date().getFullYear()} {profile.name} ·{" "}
          <span title={`${profile.mantraRomaji}, meaning ${profile.mantraMeaning}`}>{profile.mantraJa}</span>
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-[var(--text)]">
            <GithubMark size={20} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-[var(--text)]">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
