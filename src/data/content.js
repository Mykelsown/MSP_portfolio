export const profile = {
  name: "Samuel Micheal Pelumi",
  shortName: "Micheal",
  initials: "SMP",
  role: "Frontend-Leaning Full-Stack Developer",
  location: "Lagos, Nigeria",
  email: "mykelsamuel512@gmail.com",
  phone: "09132392431",
  github: "https://github.com/Mykelsown",
  githubHandle: "github.com/Mykelsown",
  resumePdf: "/resume/Samuel_Micheal_Pelumi_Resume.pdf",
  tagline:
    "I build clean, responsive interfaces in React and Tailwind, and I'm growing a matching backend practice in Go, one shipped project at a time.",
  mantraJa: "未だだ",
  mantraRomaji: "mada da",
  mantraMeaning: "not yet",
};

export const aboutText = {
  heading: "About Me",
  intro:
    "I'm a frontend-leaning full-stack developer with a background in Mechatronics Engineering. I care about interfaces that feel considered, and about backend systems that hold up under real usage, not just in a demo.",
  paragraphs: [
    "I started in front-end work, React and Tailwind CSS are where I'm strongest and where most of my shipped projects live. Over the last year I've been deliberately growing into the backend, learning Go and TypeScript through structured practice, open-source contributions, and paid contract work rather than tutorials alone.",
    "My engineering background from Lagos State Polytechnic taught me to think in systems before I think in syntax: break a problem down, reason about edge cases, then build. That habit shows up in how I approach both UI states and server logic.",
    "Right now I'm splitting my time between finishing the Go backend for SkinByWura, contributing to open-source infrastructure projects, and taking on bounty-driven engineering challenges that push me into unfamiliar territory on purpose.",
  ],
  mantraNote:
    "My working philosophy is mada da, not yet. Every project on this page is a checkpoint, not a finish line.",
};

export const skills = [
  { name: "React", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML5 & CSS3", category: "Frontend" },
  { name: "Go", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Rust (SQLx)", category: "Backend" },
  { name: "Git & GitHub", category: "Tooling" },
  { name: "REST APIs", category: "Tooling" },
  { name: "Figma", category: "Tooling" },
];

export const projects = [
  {
    title: "SkinByWura",
    tag: "Full-Stack · In Progress",
    description:
      "A Gen-Z-coded skincare e-commerce platform. The React storefront, built on a custom peach, coral, lime, and ink design system, is complete. I'm now building the Go backend behind it: a layered service architecture with PostgreSQL, migrations, and a proper API layer.",
    stack: ["React", "Tailwind CSS", "Go", "PostgreSQL"],
    image: "skin-by-wura.png",
    href: "https://mykelsown.github.io/Skin-By-Wura/",
    codeHref: "https://github.com/Mykelsown",
    featured: true,
  },
  {
    title: "ClimateGuard",
    tag: "Hackathon Build",
    description:
      "A decentralized climate-action platform combining AI-powered weather predictions with blockchain verification. I led frontend development: reusable React components, responsive Tailwind layouts, and Web3 wallet integration, built in 48 hours for the Hedera hackathon.",
    stack: ["React", "Vite", "Tailwind CSS", "ethers.js"],
    image: "climate-guard.png",
    href: "https://climateeguard.netlify.app/",
    codeHref: "https://github.com/Mykelsown",
  },
  {
    title: "Forex Risk-Reward Calculator",
    tag: "Personal Project",
    description:
      "A focused trading utility that calculates risk, reward, position size, and risk-to-reward ratio before a trade is placed. Built with vanilla JavaScript, prioritizing clarity and accurate math over feature bloat.",
    stack: ["JavaScript", "Tailwind CSS", "API Integration"],
    image: "forex-calculator.png",
    href: "https://mykelsown.github.io/forex-risk-reward-calculator/",
    codeHref: "https://github.com/Mykelsown",
  },
];

export const experience = [
  {
    role: "Solana Infrastructure Engineer",
    org: "Superteam Nigeria: Advanced Infrastructure Challenge",
    period: "Bounty Program",
    points: [
      "Engineered a production-grade Solana transaction infrastructure stack in TypeScript, including Jito bundle construction and Yellowstone/Geyser gRPC streaming.",
      "Built an AI agent, Tip Intelligence, on the Anthropic SDK to reason about transaction tip strategy.",
      "Attempted live mainnet bundle submissions and is closing out remaining leader-window timing logic.",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "InheritX (Fracverse)",
    period: "Ongoing",
    points: [
      "Contributing a pull request that implements SQLx-based PostgreSQL connection pooling in Rust.",
      "Maintaining lint-clean, warning-free code to satisfy maintainer review standards via cargo clippy.",
    ],
  },
  {
    role: "Backend Developer (Contract)",
    org: "KSI Gadgets",
    period: "Ongoing",
    points: [
      "Building and maintaining Node.js and TypeScript backend services, including transactional email via Resend.",
      "Diagnosed and resolved PostgreSQL authentication issues affecting service reliability.",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Freelance & Open Source",
    period: "2023 to Present",
    points: [
      "Delivered responsive React and Tailwind CSS applications for freelance clients, from first mockup to deployment.",
      "Contributed to frontend issues across multiple public GitHub repositories.",
    ],
  },
];

export const education = [
  {
    title: "National Diploma in Mechatronics Engineering",
    org: "Lagos State Polytechnic (LASPOTECH)",
    period: "2021 to 2024",
    description:
      "Capstone project: an automated sun-tracking solar system using Arduino programming and control logic. Built a foundation in systems thinking, automation, and analytical problem-solving that now carries directly into backend engineering.",
  },
  {
    title: "Self-Directed Go & Backend Study",
    org: "Learning Go (Bodner) · Let's Go (Edwards)",
    period: "Ongoing",
    description:
      "Working systematically through structured practice projects, an animal shelter system, a fintech payment processor, and a concurrent log processor, to build production-level Go fluency.",
  },
];

export const contact = {
  heading: "Let's Work Together",
  sub:
    "Open to frontend and full-stack roles, freelance projects, and open-source collaboration.",
};
