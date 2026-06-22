// Central content store — single source of truth for resume + project data.

export const profile = {
  name: "Bharanikumar R",
  role: "Full Stack Developer",
  subRole: "Software Engineer",
  location: "Tamil Nadu, India",
  email: "kbharani98@gmail.com",
  phone: "+91 9944827683",
  linkedin: "https://www.linkedin.com/in/bharanikumarz/",
  github: "https://github.com/bklabs-co",
  tagline:
    "I build the layer between a request and the system that has to trust it.",
  summary:
    "A full-stack engineer who treats access control as a feature, not an afterthought. One year deep in the MERN stack, shipping production systems where the interesting problem isn't the UI — it's deciding who gets through the door.",
};

export const stats = [
  { value: "1+", label: "Year in production systems" },
  { value: "6", label: "Shipped projects" },
  { value: "12+", label: "Technologies in active use" },
  { value: "3", label: "Companies trusting the work" },
];

export const skillGroups = [
  {
    label: "Core",
    skills: ["JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    label: "Also fluent",
    skills: ["Java", "Django", "Networking", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    label: "Ship & run",
    skills: ["Docker", "Cloudflare", "Server Deployment", "Git", "GitHub", "GitLab"],
  },
  {
    label: "Workflow",
    skills: ["Postman", "VS Code", "CI/CD"],
  },
];

export const experience = [
  {
    role: "Software Developer",
    org: "Skylink Fibernet Pvt Ltd",
    period: "Apr 2025 — May 2026",
    summary:
      "Owned the firewall-based access control system end to end — design through maintenance — plus frontend work on the company's public site and an internal inventory tool.",
    points: [
      {
        title: "Firewall-Based Web Application",
        detail:
          "Built a full-stack access control and request-filtering system: React + Tailwind on the front end, Django handling auth/authorization on the back, PostgreSQL tuned for query performance, deployed on Cloudflare with company-hosted servers.",
        tags: ["React.js", "Django", "PostgreSQL", "Cloudflare"],
        link: "https://zforto.com",
        linkLabel: "Live demo — ZForto",
      },
      {
        title: "Company Website",
        detail:
          "Rebuilt the frontend UI in React.js — tightened responsiveness, layout structure, and load performance for the public-facing site.",
        tags: ["React.js", "Performance"],
        link: "https://skylink.in",
        linkLabel: "Live demo — Skylink",
      },
      {
        title: "Inventory Management System",
        detail:
          "Team build for internal stock tracking — contributed feature work, debugging, and API integration alongside the core dev team.",
        tags: ["API Integration", "Team Project"],
      },
      {
        title: "GIS Automation Scripts",
        detail:
          "Wrote Python automation for repetitive geospatial data processing, cutting manual handling time and improving data accuracy.",
        tags: ["Python", "Automation"],
      },
    ],
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science",
    school: "PSG College of Arts and Science",
    period: "2023 — 2025",
    detail: "CGPA 8.1 / 10.0",
  },
  {
    degree: "B.Sc. Mathematics",
    school: "Gobi Arts and Science College",
    period: "2019 — 2022",
    detail: "CGPA 7.1 / 10.0",
  },
];

export const certifications = [
  {
    name: "Master Full Stack Development (MERN)",
    issuer: "Error Makes Clever Academy",
    period: "Jun 2025 — Sep 2025",
  },
  {
    name: "Introduction to Web Development",
    issuer: "Coursera, by Microsoft",
    period: "4-week course",
  },
];

export const professionalProjects = [
  {
    id: "zforto",
    name: "ZForto",
    kind: "Firewall-Based Access Control Platform",
    problem:
      "Skylink needed a way to filter and govern requests hitting internal infrastructure — without slowing the network down or trusting a black box.",
    solution:
      "End-to-end build covering design, auth, request filtering, and deployment. React handles the control surface; Django owns authentication, authorization, and request processing; PostgreSQL stores and indexes access policy at speed; Cloudflare fronts the whole thing for security and uptime.",
    stack: ["React.js", "Tailwind CSS", "Django", "PostgreSQL", "Cloudflare"],
    features: [
      "Role-based authentication & authorization",
      "Real-time request filtering at the firewall layer",
      "Query-tuned PostgreSQL schema for access policy lookups",
      "Cloudflare-fronted deployment on company-hosted servers",
    ],
    live: "https://zforto.com",
    type: "professional",
    featured: true,
  },
  {
    id: "skylink",
    name: "Skylink",
    kind: "Company Website — Frontend Rebuild",
    problem:
      "The public site needed to load faster and hold its layout cleanly across devices for a fibernet provider's customer base.",
    solution:
      "Rebuilt the frontend in React.js, restructuring layout and trimming render weight to improve responsiveness and perceived performance.",
    stack: ["React.js", "Tailwind CSS"],
    features: [
      "Fully responsive layout rework",
      "Performance-focused component structure",
      "Cleaner information hierarchy for service pages",
    ],
    live: "https://skylink.in",
    type: "professional",
    featured: false,
  },
  {
    id: "freddyfish",
    name: "Freddy Fish Events",
    kind: "Event Management — Client Site",
    problem:
      "An events business needed a public-facing site that presents services and bookings clearly to prospective clients.",
    solution:
      "Built and shipped a client-facing site focused on clarity of offerings and a smooth path from browsing to inquiry.",
    stack: ["React.js", "Tailwind CSS"],
    features: ["Service showcase layout", "Mobile-first responsive build", "Fast-loading client deployment"],
    live: "https://freddyfishevents.in",
    type: "professional",
    featured: false,
  },
];

export const personalProjects = [
  {
    id: "mindscribe",
    name: "Mindscribe",
    kind: "Full-Stack Blog Platform",
    problem:
      "Wanted a blog platform built entirely from scratch — auth, content lifecycle, and API design — without a framework doing the thinking.",
    solution:
      "Full MERN-stack build: Express REST APIs consumed via Axios, React + Tailwind UI, complete CRUD and authentication flow for posts and users.",
    stack: ["React.js", "Node.js", "Express.js", "Axios", "Tailwind CSS"],
    features: [
      "JWT-based authentication",
      "Full CRUD for posts, comments, and users",
      "REST API layer built from scratch",
      "Responsive reading & writing experience",
    ],
    github: "https://github.com/bklabs-co/Mindscribe-Web-App.git",
    type: "personal",
    featured: true,
  },
  {
    id: "movieapp",
    name: "Movie Explorer",
    kind: "React Movie Discovery App",
    problem: "Needed a clean way to browse and search movies via a third-party API with fast, responsive UI.",
    solution:
      "Built a React single-page app consuming a public movie API, with search, filtering, and detail views.",
    stack: ["React.js", "REST API", "CSS"],
    features: ["Live search & filtering", "Movie detail views", "Responsive grid layout"],
    github: "https://github.com/bklabs-co/Movie-Application-Using-React-JS.git",
    type: "personal",
    featured: false,
  },
  {
    id: "cyberbullying",
    name: "Cyberbullying Detection",
    kind: "ML-Based Text Classification",
    problem:
      "Social platforms need a way to flag harmful text content automatically rather than relying purely on manual moderation.",
    solution:
      "Built a text classification pipeline to detect cyberbullying patterns in social content, applying NLP preprocessing and a trained classification model.",
    stack: ["Python", "NLP", "Machine Learning"],
    features: ["Text preprocessing pipeline", "Trained classification model", "Evaluated on labeled social text data"],
    github: "https://github.com/bklabs-co/cyberbullying-detection.git",
    type: "personal",
    featured: false,
  },
];

export const allProjects = [...professionalProjects, ...personalProjects];
