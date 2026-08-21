export const profile = {
  name: "Your Name",
  role: "Full-Stack Developer",
  location: "Your City, Country",
  email: "you@example.com",
  phone: "+1 (000) 000-0000",
  github: "https://github.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourhandle",
  resumeUrl: "#",
  intro:
    "I design and build fast, accessible web products — from crisp interfaces to the APIs and data models behind them. I care about details that survive real users.",
  about: [
    "I'm a developer focused on building end-to-end products: thoughtful front-end experiences backed by clean, well-tested services. My work sits at the intersection of engineering rigour and design sensibility.",
    "Recently I've been working with React, TypeScript and Python, shipping interfaces that stay quick under load and code that stays readable months later. I'm drawn to problems involving data, performance and developer experience.",
    "Right now I'm looking for a team where I can own meaningful surface area, learn from strong engineers, and keep raising the bar on craft.",
  ],
};

export const skills: { group: string; items: { name: string; level: number }[] }[] = [
  {
    group: "Frontend",
    items: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    group: "Backend & Data",
    items: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "Node.js", level: 82 },
      { name: "SQL / PostgreSQL", level: 80 },
      { name: "REST & GraphQL", level: 78 },
    ],
  },
  {
    group: "Tooling & Practice",
    items: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 70 },
      { name: "Testing (Vitest/Jest)", level: 78 },
      { name: "CI/CD", level: 72 },
      { name: "UI/UX & Accessibility", level: 84 },
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  category: "Web App" | "Data" | "Open Source";
  features: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    name: "Atlas Analytics",
    description:
      "A real-time analytics dashboard that turns raw event streams into readable product insight for small teams.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Web App",
    features: [
      "Live event ingestion with sub-second charts",
      "Custom funnels and cohort breakdowns",
      "Role-based access with audit trail",
    ],
    github: "https://github.com/yourhandle/atlas-analytics",
    demo: "https://example.com",
  },
  {
    name: "Ledgerly",
    description:
      "Personal finance tracker with automatic categorisation and a forecasting model for monthly cash flow.",
    tech: ["Python", "SQL", "React", "Tailwind CSS"],
    category: "Data",
    features: [
      "Rule + ML hybrid transaction categorisation",
      "12-month cash-flow forecasting",
      "CSV and bank statement import",
    ],
    github: "https://github.com/yourhandle/ledgerly",
    demo: "https://example.com",
  },
  {
    name: "Formcraft",
    description:
      "An open-source, accessible form builder that outputs typed React components instead of locked-in JSON.",
    tech: ["TypeScript", "React", "Vite"],
    category: "Open Source",
    features: [
      "Keyboard-first drag and drop",
      "WCAG 2.1 AA compliant output",
      "Zero-runtime generated components",
    ],
    github: "https://github.com/yourhandle/formcraft",
    demo: "https://example.com",
  },
  {
    name: "Signal Digest",
    description:
      "A daily reading digest that summarises long technical articles and ranks them against your interests.",
    tech: ["Python", "Java", "PostgreSQL"],
    category: "Data",
    features: [
      "Embedding-based relevance ranking",
      "Scheduled email digests",
      "Feedback loop that retrains preferences",
    ],
    github: "https://github.com/yourhandle/signal-digest",
    demo: "https://example.com",
  },
  {
    name: "Studio Portfolio Kit",
    description:
      "A component kit for design studios: motion-aware sections, theming tokens and CMS-agnostic content models.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    category: "Open Source",
    features: [
      "Token-driven theming",
      "Reduced-motion aware animations",
      "Lighthouse 100 on all pages",
    ],
    github: "https://github.com/yourhandle/portfolio-kit",
    demo: "https://example.com",
  },
  {
    name: "Campus Connect",
    description:
      "A student event platform with ticketing, attendance QR check-in and organiser analytics.",
    tech: ["React", "Node.js", "SQL"],
    category: "Web App",
    features: [
      "QR check-in with offline fallback",
      "Waitlists and capacity rules",
      "Organiser revenue dashboard",
    ],
    github: "https://github.com/yourhandle/campus-connect",
    demo: "https://example.com",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Your University",
    period: "2020 — 2024",
    detail: "Coursework in data structures, distributed systems, databases and human-computer interaction.",
  },
  {
    degree: "Higher Secondary — Science & Mathematics",
    school: "Your School",
    period: "2018 — 2020",
    detail: "Graduated with distinction; led the school computer club.",
  },
];

export const experience = [
  {
    title: "Software Engineer",
    org: "Company Name",
    period: "2024 — Present",
    detail:
      "Own front-end architecture for the core product. Cut initial load time by 42% and introduced a shared component library used by three teams.",
  },
  {
    title: "Full-Stack Engineering Intern",
    org: "Company Name",
    period: "Summer 2023",
    detail:
      "Built an internal admin tool used daily by the support team, replacing a manual spreadsheet workflow.",
  },
  {
    title: "Open Source Contributor",
    org: "Various Projects",
    period: "2022 — Present",
    detail:
      "Merged contributions across React and Python tooling repositories, focused on accessibility and documentation.",
  },
];

export const achievements = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    year: "2023",
  },
  {
    title: "National Hackathon — 1st Place",
    issuer: "TechFest",
    year: "2023",
  },
  {
    title: "Dean's List for Academic Excellence",
    issuer: "Your University",
    year: "2022 & 2023",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
