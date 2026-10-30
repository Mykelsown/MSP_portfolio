# Samuel Micheal Pelumi, Portfolio

My personal portfolio as a full-stack software engineer, built with React, Vite, and Tailwind CSS. A light, neutral design with a Cooper / Avant Garde type pairing, and a resume that's actually kept up to date.

## Live site

https://mykelsown.netlify.app

## Features

- **Light, neutral design.** Warm paper background, ink-navy type and a soft periwinkle accent.
- **Cooper / Avant Garde type pairing.** Caprasimo (a Cooper-style display face) for headings and a self-hosted TeX Gyre Adventor (Avant Garde Gothic clone) for body text.
- **What I Do** section covering frontend, backend, data and deployment pipelines.
- **Currently Doing** section tracking my transition into AI and ML engineering.
- **Top three builds**, my most active GitHub repositories ranked by commit count, plus more projects.
- **Contact form.** Name, email, and message, wired up to Netlify Forms with spam protection built in.
- **Experience timeline** and a profile panel for education, toolkit and skills.
- **Downloadable resume**, kept in sync with the content on the site.
- Fully responsive, from phone to desktop.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) for the build and dev server
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Lucide](https://lucide.dev/) for icons
- [Caprasimo](https://fonts.google.com/specimen/Caprasimo) (OFL) and [TeX Gyre Adventor](https://www.gust.org.pl/projects/e-foundry/tex-gyre/adventor) (GUST Font License) for type
- [Netlify Forms](https://docs.netlify.com/forms/setup/) for the contact form backend

## Getting started

Clone the repo, then:

```bash
npm install
npm run dev
```

This starts the dev server, usually at `http://localhost:5173`.

Other useful commands:

```bash
npm run build     # production build, output goes to dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  components/       Page sections: Navbar, Hero, Services, Now, Projects, Experience, About, Contact, Footer
  components/icons/ Small custom icons not covered by lucide-react
  hooks/            useReveal, a small scroll-triggered fade-in hook
  data/content.js   All page copy and structured content in one place
  assets/imgs/      Project screenshots and profile photo
public/fonts/       Self-hosted TeX Gyre Adventor (woff2) and its license
public/resume/      Downloadable resume PDF
```

## Editing content

Almost everything text-based (name, bio, skills, projects, experience, contact info) lives in `src/data/content.js`. Update it there instead of digging through individual components.

To swap the resume, drop a new PDF into `public/resume/` and update the filename in `content.js` if it changes.

## Deploying

This is a static site once built, so it works on Netlify, Vercel, GitHub Pages, or anywhere that serves static files.

### Netlify

The contact form uses Netlify Forms. Since this is a single-page app, Netlify's build-time form scanner can't see the form inside the compiled JS, so `index.html` ships with a small hidden duplicate of the form, same name and fields, purely so Netlify picks it up at deploy time. You don't need to touch it. Just connect the repo to Netlify, deploy, and submissions will start showing up under Forms in the site dashboard.

## License

Personal project, feel free to use the structure as a reference for your own portfolio, but please don't copy the content or resume as your own.

## Contact

- Email: mykelsamuel512@gmail.com
- GitHub: [github.com/Mykelsown](https://github.com/Mykelsown)