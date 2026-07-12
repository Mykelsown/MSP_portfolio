# Samuel Micheal Pelumi, Portfolio

My personal developer portfolio, built with React, Vite, and Tailwind CSS. Dark and light mode, an ambient animated background, and a resume that's actually kept up to date.

## Live site

https://mykelsown.netlify.app

## Features

- **Dark and light mode.** Toggle in the navbar, saved across visits, no flash on reload.
- **Ambient animated background.** Soft, slow-drifting color fields behind the content, never on top of it. Colors adapt automatically to the active theme.
- **Contact form.** Name, email, and message, wired up to Netlify Forms with spam protection built in.
- **Projects section** with live demo and source links for everything I've shipped.
- **Experience and education timeline.**
- **Downloadable resume**, kept in sync with the content on the site.
- Fully responsive, from phone to desktop.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) for the build and dev server
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Lucide](https://lucide.dev/) for icons
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
  components/       Page sections: Navbar, Hero, About, Projects, Experience, Contact, Footer
  components/icons/ Small custom icons not covered by lucide-react
  context/          ThemeContext, handles the dark/light mode toggle
  hooks/            useReveal, a small scroll-triggered fade-in hook
  data/content.js   All page copy and structured content in one place
  assets/imgs/      Project screenshots and profile photo
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