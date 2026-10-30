export const profile = {
  name: "Samuel Micheal Pelumi",
  firstName: "Samuel",
  lastName: "Micheal Pelumi",
  shortName: "Micheal",
  initials: "favicon.svg",
  role: "Full-Stack Software Engineer",
  location: "Lagos, Nigeria",
  email: "mykelsamuel512@gmail.com",
  phone: "09132392431",
  github: "https://github.com/Mykelsown",
  githubHandle: "github.com/Mykelsown",
  resumePdf: "/resume/Samuel_Micheal_Pelumi_Resume.pdf",
  tagline:
    "I design, build and ship complete products: the interface people touch, the services and databases behind it, and the pipelines that carry it into production.",
  mantraJa: "未だだ",
  mantraRomaji: "mada da",
  mantraMeaning: "not yet",
};

export const aboutText = {
  greeting: "Hi!",
  intro: [
    { text: "My name is " },
    { text: "Samuel Micheal Pelumi", highlight: true },
    { text: ". I am a " },
    { text: "Full-Stack Software Engineer", highlight: true },
    {
      text: " based in Lagos, Nigeria, proficient across the frontend and the backend, from React and TypeScript interfaces to Go services, PostgreSQL schemas, Docker builds and production deploys.",
    },
  ],
  objectiveLabel: "My approach:",
  objective:
    "Own the whole path from idea to production. Break the problem down like an engineer, build it cleanly, ship it through a repeatable pipeline, then keep improving it once real users are on it.",
  mantraNote:
    "My working philosophy is mada da, not yet. Every project on this page is a checkpoint, not a finish line.",
};

// Full-stack capabilities, shown in the "What I Do" section.
export const services = [
  {
    key: "frontend",
    title: "Frontend Engineering",
    summary:
      "Responsive, accessible interfaces with considered UI states, design systems and real-time data views.",
    items: ["React & TypeScript", "Tailwind CSS & design tokens", "Live dashboards (SSE, charts)", "Wallet & OAuth flows"],
  },
  {
    key: "backend",
    title: "Backend Engineering",
    summary:
      "Layered services with clear handler, service and store boundaries, built to hold up under real traffic.",
    items: ["Go (Chi, net/http)", "Node.js & TypeScript", "REST APIs & auth", "Concurrency & worker pools"],
  },
  {
    key: "data",
    title: "Data & Integrations",
    summary:
      "Relational schemas, versioned migrations and third-party integrations wired in safely.",
    items: ["PostgreSQL & SQL migrations", "Rust (SQLx) pooling", "Payments (Paystack)", "LLM APIs (Anthropic)"],
  },
  {
    key: "devops",
    title: "Deployment & Pipelines",
    summary:
      "Organising build, release and production pipelines so shipping is repeatable rather than heroic.",
    items: ["Docker & docker-compose", "CI/CD & release workflows", "Vercel, Railway, Render, Netlify", "Env config & monitoring logs"],
  },
];

// "Currently doing": the transition into AI and ML engineering.
export const now = {
  heading: "Transitioning into AI & ML Engineering",
  status: "In progress",
  intro:
    "I'm deliberately extending my full-stack practice into AI and machine learning engineering. I've already shipped LLM-powered agents in production-style systems; now I'm going deeper into the models themselves and the infrastructure that serves them.",
  tracks: [
    {
      title: "Already shipping",
      body: "LLM agents built on the Anthropic SDK: a Jito tip-pricing agent for Solana bundles and an autonomous odds-analysis agent for TxLINE Sharp.",
    },
    {
      title: "Learning now",
      body: "Python for data work, the maths behind ML (linear algebra, probability, optimisation), and core model training and evaluation.",
    },
    {
      title: "Where it's heading",
      body: "ML engineering: serving models behind solid APIs, data pipelines, retrieval systems and evaluation, using the backend and DevOps skills I already have.",
    },
  ],
};

// Top three repositories on GitHub by commit count (default branch).
export const topProjects = [
  {
    title: "Go Practice Projects",
    tag: "Backend · Systems",
    commits: 72,
    description:
      "My structured backend workshop in Go: eight self-contained systems built to master types, interfaces, error handling and concurrency. Includes a bounded worker-pool job processor, a concurrent log processor, a payment processing system, a sale-order HTTP endpoint, a student assessment engine and a Brainfuck interpreter.",
    highlights: [
      "N-worker pool with graceful channel shutdown",
      "Concurrent file and log processing with goroutines",
      "Domain modelling with interfaces and methods",
    ],
    stack: ["Go", "Goroutines", "Channels", "Interfaces", "net/http"],
    href: null,
    codeHref: "https://github.com/Mykelsown/GO-practice-projects",
  },
  {
    title: "RSV: Refinery Supply Verification",
    tag: "Full-Stack · Real-Time",
    commits: 71,
    description:
      "A tamper-evident, real-time system that records crude intake, production unit throughput and truck-loading events, reconciles them daily and surfaces the results on role-specific dashboards. Go and Chi API on PostgreSQL 15 (Docker), live updates over Server-Sent Events, role-based access control, a simulation engine with pause and resume, and a React and TypeScript dashboard with a regulatory portal.",
    highlights: [
      "Tamper-evident ledger with daily reconciliation",
      "SSE live feed with role-based access",
      "Found and fixed a cumulative-reading bug that inflated daily totals",
    ],
    stack: ["Go", "Chi", "PostgreSQL", "Docker", "React", "TypeScript", "SSE"],
    href: null,
    codeHref: "https://github.com/Mykelsown/RSV-project",
  },
  {
    title: "DevMatch",
    tag: "Web3 · Zero-Knowledge",
    commits: 58,
    description:
      "A privacy-first developer team-matching platform on the Midnight network. Developers commit their skills and availability on-chain as a hash, and a zero-knowledge circuit proves compatibility with a team's requirements without revealing the raw profile. The contract is deployed on Midnight Preview, the frontend runs on Vercel and GitHub OAuth runs as a serverless function.",
    highlights: [
      "Compact ZK contract deployed to Midnight Preview",
      "Serverless GitHub OAuth with CSRF state",
      "Multi-wallet discovery (Lace, 1AM) with fallbacks",
    ],
    stack: ["Compact", "React", "TypeScript", "Vite", "Tailwind", "Vercel"],
    href: "https://devmatch.vercel.app",
    codeHref: "https://github.com/Mykelsown/devmatch",
  },
];

export const projects = [
  {
    title: "SkinByWura",
    tag: "Full-Stack E-commerce",
    description:
      "A Gen-Z skincare store. A React and Vite storefront with cart, wishlist, auth, checkout drawer and order history, backed by a Go API with handler, service and store layers, versioned PostgreSQL migrations and session auth.",
    stack: ["React", "Go", "PostgreSQL", "Migrations"],
    image: "skin-by-wura.png",
    href: "https://mykelsown.github.io/Skin-By-Wura/",
    codeHref: "https://github.com/Mykelsown/skinbywura_backend",
  },
  {
    title: "KSI Gadgets Store",
    tag: "Client Work · Payments",
    description:
      "The storefront for a gadgets retailer, wired to a Node.js backend on Render. Paystack payment flow with callback and status pages, saved addresses, coupon support and guest checkout.",
    stack: ["React", "Vite", "Paystack", "Node.js"],
    image: null,
    href: null,
    codeHref: "https://github.com/Mykelsown/ksi-store-frontend",
  },
  {
    title: "TxLINE Sharp",
    tag: "Hackathon · AI Agent",
    description:
      "An autonomous odds-intelligence agent for World Cup 2026. A Go agent on Railway detects sharp market movement, anchors each signal to a Solana block hash and has Claude write the market analysis.",
    stack: ["Go", "Docker", "Railway", "Anthropic API"],
    image: null,
    href: "https://txline-sharp.vercel.app",
    codeHref: "https://github.com/Mykelsown/txline-sharp",
  },
  {
    title: "Smart Transaction Stack",
    tag: "Infrastructure · Solana",
    description:
      "Real-time Solana transaction infrastructure: Yellowstone gRPC slot streaming, Jito leader-window detection, an LLM tip-pricing agent, and full bundle lifecycle tracking with failure classification.",
    stack: ["TypeScript", "gRPC", "Jito", "Anthropic SDK"],
    image: null,
    href: null,
    codeHref: "https://github.com/Mykelsown/smart_transaction_stack-solana-",
  },
  {
    title: "ClimateGuard",
    tag: "Hackathon Build",
    description:
      "A decentralised climate-action platform pairing AI weather predictions with Hedera blockchain verification. I led the frontend: React components, responsive layouts and Web3 wallet integration in 48 hours.",
    stack: ["React", "Tailwind CSS", "ethers.js"],
    image: "climate-guard.png",
    href: "https://climateeguard.netlify.app/",
    codeHref: "https://github.com/Mykelsown/ClimateGuard",
  },
  {
    title: "Forex Risk-Reward Calculator",
    tag: "Personal Tool",
    description:
      "A focused trading utility that works out risk, reward, position size and risk-to-reward ratio before a trade is placed, prioritising accurate maths over feature bloat.",
    stack: ["JavaScript", "Tailwind CSS"],
    image: "forex-calculator.png",
    href: "https://mykelsown.github.io/forex-risk-reward-calculator/",
    codeHref: "https://github.com/Mykelsown/forex-risk-reward-calculator",
  },
];

export const experience = [
  {
    role: "Backend Developer (Contract)",
    org: "KSI Gadgets",
    period: "Ongoing",
    points: [
      "Build and maintain Node.js and TypeScript backend services, including transactional email via Resend.",
      "Integrated the Paystack payment flow end to end: checkout, callback and payment status pages, coupons and guest checkout.",
      "Diagnosed and resolved PostgreSQL authentication issues affecting service reliability.",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "InheritX (Fracverse)",
    period: "Ongoing",
    points: [
      "Implemented SQLx-based PostgreSQL connection pooling in Rust.",
      "Kept contributions lint-clean and warning-free under cargo clippy to meet maintainer review standards.",
    ],
  },
  {
    role: "Solana Infrastructure Engineer",
    org: "Superteam Nigeria: Advanced Infrastructure Challenge",
    period: "2026",
    points: [
      "Engineered a Solana transaction stack in TypeScript: Yellowstone gRPC streaming, Jito bundle construction and lifecycle tracking from submitted to finalized.",
      "Built an LLM agent on the Anthropic SDK that prices Jito tips from live percentiles and recent outcomes, with no hard-coded values.",
      "Documented a systematic root-cause investigation of mainnet bundle landing across leader timing, tip size and RPC paths.",
    ],
  },
  {
    role: "Hackathon Builder",
    org: "Superteam × TxODDS · Midnight · Hedera",
    period: "2025 to 2026",
    points: [
      "Shipped TxLINE Sharp (Go agent on Railway with a Vercel frontend), DevMatch (ZK contract on Midnight) and ClimateGuard (Hedera).",
      "Took each from first commit to a live deployment within the hackathon window.",
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
    title: "National Diploma, Mechatronics Engineering",
    org: "Lagos State Polytechnic (LASPOTECH)",
    period: "2021 to 2024",
    description:
      "Capstone: an automated sun-tracking solar system using Arduino and control logic. Systems thinking that carries straight into backend engineering.",
  },
  {
    title: "L2E Software Engineering Track (Go)",
    org: "Structured Go curriculum and checkpoints",
    period: "2025 to 2026",
    description:
      "Piscine, checkpoints and projects (GO-Reloaded, ASCII-Art series) alongside Learning Go (Bodner) and Let's Go (Edwards).",
  },
];

// Tile grid, after the software-icon tiles in the reference design.
export const toolkit = [
  { short: "Go", name: "Go" },
  { short: "Ts", name: "TypeScript" },
  { short: "Re", name: "React" },
  { short: "Pg", name: "PostgreSQL" },
  { short: "Dk", name: "Docker" },
  { short: "Nd", name: "Node.js" },
  { short: "Rs", name: "Rust" },
  { short: "Py", name: "Python" },
];

export const softSkills = ["Systems thinking", "Debugging & root cause", "Clear documentation", "Ownership"];
export const skillSet = ["API design", "Database modelling", "CI/CD & deploys", "Real-time systems", "UI engineering", "LLM integration"];
export const interests = ["AI & ML", "Distributed systems", "Web3 infrastructure", "Trading tools"];
export const languages = ["Go", "TypeScript", "JavaScript", "SQL", "Python", "Rust"];

export const contact = {
  heading: "Let's build something",
  sub: "Open to full-stack and backend roles, AI/ML engineering opportunities, freelance builds and open-source collaboration.",
};
