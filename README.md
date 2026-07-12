# Samuel Micheal Pelumi — Portfolio

A React + Tailwind CSS rebuild of the original portfolio, with dark/light mode and an ambient animated background.

## What's new in this rebuild

- **React + Vite + Tailwind CSS v4**, replacing the previous plain HTML/Parcel setup.
- **Dark/light mode toggle** in the navbar (and mobile menu), persisted to `localStorage`, with no flash on page load.
- **Dynamic ambient background**: slow-drifting, low-opacity color fields plus a faint node-grid texture, fixed behind content with `pointer-events: none` so it never obstructs text. Colors are theme-aware and shift automatically with dark/light mode.
- **Contact form**, restored and rebuilt in React, matching the site's new look. It posts to Netlify Forms under the hood (see note below), with a honeypot field for spam and a proper success/error state.
- **Updated content** across About, Skills, Projects, and Experience, reflecting current work: the SkinByWura full-stack build, the Superteam Nigeria bounty program, the InheritX/Fracverse open-source contribution, and the KSI Gadgets contract work.
- **Updated resume** (`public/resume/Samuel_Micheal_Pelumi_Resume.pdf`), rebuilt to match the same content, in a deep navy and electric blue layout.
- Same section structure as the original: Home, About, Projects, Experience & Education, Contact.

## Contact form and Netlify

The form in `src/components/ContactForm.jsx` submits using the same Netlify Forms approach as the original site. Because this is now a single-page React app, Netlify's build-time form scanner can't see the form inside the JS bundle, so `index.html` includes a small hidden, unused copy of the form (same name and fields) purely so Netlify detects it at deploy time. You don't need to touch that hidden form, just deploy to Netlify as usual and submissions will show up under Forms in your site dashboard.

If you deploy anywhere other than Netlify, the form will still render and validate, but submissions won't go anywhere until you point it at a different backend (a simple serverless function, Formspree, etc).

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build, output in dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/       UI sections (Navbar, Hero, About, Projects, Experience, Contact, Footer)
  components/icons/ Small custom icons not covered by lucide-react
  context/          ThemeContext (dark/light mode)
  hooks/            useReveal (scroll-triggered fade-in)
  data/content.js   All page copy and structured content in one place
  assets/imgs/      Project screenshots and profile photo
public/resume/      Downloadable resume PDF
```

## Editing content

Nearly everything text-based (name, bio, skills, projects, experience, contact info) lives in `src/data/content.js`. Update it there rather than digging through components.

## Notes

- Icons are from [lucide-react](https://lucide.dev/). The GitHub mark ships as a small custom inline SVG in `src/components/icons/GithubMark.jsx`, since recent lucide-react releases dropped brand icons.
- Fonts: Sora (headings), Inter (body), JetBrains Mono (labels and the terminal-style hero card), loaded from Google Fonts in `index.html`.
