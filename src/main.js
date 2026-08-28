import "./style.css";

/* ══════════════════════════════════════════════
   1. BRAND ICONS & DATA
   ══════════════════════════════════════════════ */

const brandIcons = {
  react: `<svg width="22" height="22" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
  ts: `<svg width="22" height="22" viewBox="0 0 128 128"><path fill="#3178C6" d="M0 0h128v128H0z"/><path fill="#FFF" d="M37.8 77.1v31.4H24.3V77.1H8.6V65.8h44.9v11.3H37.8zm63.4 12.3c0 3.7-1.1 6.8-3.4 9.3s-5.6 4.3-10 5.4-9.2 1.6-14.4 1.6c-5.4 0-10.4-.9-15.1-2.6v-12c4.4 2.3 8.8 4 13.1 5.1s8.4 1.6 12.2 1.6c3.2 0 5.7-.6 7.4-1.7s2.6-2.8 2.6-5.1c0-1.8-.7-3.3-2.1-4.5s-3.7-2.4-7-3.7l-9.6-3.8c-5.4-2.1-9.4-4.7-11.9-7.9s-3.7-7.2-3.7-12c0-3.6 1.1-6.7 3.3-9.3s5.4-4.5 9.5-5.7 8.9-1.8 14.3-1.8c4.6 0 9.1.7 13.3 2s8.2 3.1 12 5.5l-5.6 10.4c-3.6-2-7-3.5-10.3-4.4s-6.5-1.4-9.6-1.4c-3.1 0-5.5.6-7.1 1.7s-2.4 2.6-2.4 4.5c0 1.6.6 2.9 1.9 4s3.3 2.1 6.1 3.2l10.1 4c5.6 2.2 9.7 4.9 12.3 8.1s3.9 7.3 3.9 12.3z"/></svg>`,
  next: `<svg width="22" height="22" viewBox="0 0 180 180" fill="none"><mask id="next_mask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="#000"/></mask><g mask="url(#next_mask)"><circle cx="90" cy="90" r="90" fill="#000"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#next_grad)"/><rect x="115" y="54" width="12" height="72" fill="url(#next_grad2)"/></g><defs><linearGradient id="next_grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="next_grad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>`,
  tailwind: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#38BDF8"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>`,
  html: `<svg width="22" height="22" viewBox="0 0 512 512"><path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z"/><path fill="#EF652A" d="M256 472l149-41 35-394H256z"/><path fill="#EBEBEB" d="M256 208h-74l-5-57h79V95H113l15 170h128zm0 147l-63-17-4-45h-56l7 89 116 32z"/><path fill="#FFF" d="M256 208v-56h75l7-57H256V38h143l-15 170zm0 147v57l116-32 11-125h-56l-6 83z"/></svg>`,
  node: `<svg width="22" height="22" viewBox="0 0 32 32"><path fill="#339933" d="M16 2.5l12.1 7v14l-12.1 7-12.1-7v-14L16 2.5zm0 2.3L5.9 10.6v11.8L16 28.2l10.1-5.8V10.6L16 4.8zm-1 6.2v10h2V11h-2z"/></svg>`,
  express: `<svg width="22" height="22" viewBox="0 0 50 50"><text x="4" y="36" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#171614">ex</text></svg>`,
  mysql: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#00758F"><path d="M12 3C6.48 3 2 7.48 2 13c0 3.1 1.45 5.86 3.72 7.67l1.24-1.57C5.22 17.72 4 15.51 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.51-1.22 4.72-2.96 6.1l1.24 1.57C20.55 18.86 22 16.1 22 13c0-5.52-4.48-10-10-10z"/></svg>`,
  mongo: `<svg width="22" height="22" viewBox="0 0 24 24"><path fill="#47A248" d="M12 1.5c-.3 0-.6.1-.8.3C10.5 2.5 5 8.1 5 14.5c0 4.1 3.1 7.5 7 8 3.9-.5 7-3.9 7-8 0-6.4-5.5-12-6.2-12.7-.2-.2-.5-.3-.8-.3zm0 2.2c1.2 1.5 5 6.6 5 10.8 0 3-2.2 5.5-5 6-2.8-.5-5-3-5-6 0-4.2 3.8-9.3 5-10.8z"/><path fill="#47A248" d="M12 6.5v14c2.2-.5 4-2.5 4-5 0-3.5-3.3-7.7-4-9z"/></svg>`,
  git: `<svg width="22" height="22" viewBox="0 0 24 24"><path fill="#F05032" d="M21.6 10.8l-8.4-8.4a1.8 1.8 0 00-2.5 0L8.4 4.7l3.2 3.2a2.1 2.1 0 012.7 2.7l3.1 3.1a2.1 2.1 0 11-1.3 1.3l-2.9-2.9v4.3a2.1 2.1 0 11-1.8 0v-4.5a2.1 2.1 0 01-1.2-2.7L7 6.1 2.4 10.8a1.8 1.8 0 000 2.5l8.4 8.4a1.8 1.8 0 002.5 0l8.3-8.4a1.8 1.8 0 000-2.5z"/></svg>`,
  aws: `<svg width="22" height="22" viewBox="0 0 24 24"><path fill="#FF9900" d="M18.8 15.2c-2.3 1.7-5.5 2.6-8.4 2.6-4.1 0-7.7-1.5-10.4-4-.2-.2 0-.5.3-.4 3 1.7 6.6 2.7 10.4 2.7 2.6 0 5.4-.7 7.9-2.1.4-.3.7.2.2.6z"/><path fill="#FF9900" d="M19.9 14c-.3-.4-1.8-.2-2.5-.1-.2 0-.3-.2-.1-.3.9-.7 2.4-.5 2.7-.2.3.4.1 1.9-.8 2.6-.2.1-.3 0-.3-.2.2-.6.7-1.4 1-1.8z"/></svg>`,
  docker: `<svg width="22" height="22" viewBox="0 0 24 24" fill="#2496ED"><path d="M13 10.5h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm14.5 4.5c-.3-.2-1.4-.4-2.3.2-.2-1.3-.9-2-1.1-2.2l-.4.3c.3.9.1 2.1-.2 2.8-.7.2-2 .3-2.5-.2l-.3.3c.4.6 1.1.9 2 .9-1.2 3.4-3.8 4.4-7.7 4.4H2.5C2.2 19 4 21 8.5 21c6.5 0 11-4.2 11.5-9.5h1.5z"/></svg>`,
  jest: `<svg width="22" height="22" viewBox="0 0 24 24"><path fill="#C21325" d="M12 2a9 9 0 00-9 9c0 4.2 2.8 7.7 6.7 8.7L12 22l2.3-2.3c3.9-1 6.7-4.5 6.7-8.7a9 9 0 00-9-9zm-2.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></svg>`
};

const skillsColumns = {
  frontend: {
    title: "Frontend Development",
    items: [
      { name: "React.js", pct: 95, icon: brandIcons.react },
      { name: "TypeScript", pct: 90, icon: brandIcons.ts },
      { name: "Next.js", pct: 85, icon: brandIcons.next },
      { name: "Tailwind CSS", pct: 90, icon: brandIcons.tailwind },
      { name: "HTML5 / CSS3", pct: 95, icon: brandIcons.html }
    ]
  },
  backend: {
    title: "Backend Development",
    items: [
      { name: "Node.js", pct: 90, icon: brandIcons.node },
      { name: "Express.js", pct: 85, icon: brandIcons.express },
      { name: "MySQL", pct: 85, icon: brandIcons.mysql },
      { name: "MongoDB", pct: 80, icon: brandIcons.mongo }
    ]
  },
  tools: {
    title: "Tools & Technologies",
    items: [
      { name: "Git / GitHub", pct: 90, icon: brandIcons.git },
      { name: "AWS", pct: 70, icon: brandIcons.aws },
      { name: "Docker", pct: 80, icon: brandIcons.docker },
      { name: "Jest / Testing", pct: 85, icon: brandIcons.jest }
    ]
  }
};

const projects = [
  {
    badge: "Enterprise Platform",
    title: "FeatureHub",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    desc: "Community-driven feedback and roadmap platform with a Java 17 / Spring Boot 3 REST API, MySQL database, and Next.js web application.",
    bullets: [
      "Java 17 & Spring Boot 3 REST API with Spring Security JWT authentication",
      "Real-time duplicate detection, atomic-constraint voting, and roadmap lifecycle",
      "Containerized with Docker Compose with Flyway database migrations"
    ],
    tags: ["Java", "Spring Boot", "MySQL", "Next.js", "React Native", "Docker"],
    live: "https://featurehub-three.vercel.app/",
    github: "https://github.com/codewithabhi101"
  },
  {
    badge: "AI & GraphQL Engine",
    title: "AI Agent Workflow Builder",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    desc: "Visual agent workflow execution platform with a 7-table multi-tenant schema in PostgreSQL and real-time GraphQL APIs via Hasura on Nhost.",
    bullets: [
      "7-table multi-tenant schema (organizations, workflows, steps, triggers, runs)",
      "Hasura row-level permissions scoped by role (owner/editor/viewer)",
      "Step-level authorization engine with resumable execution pipelines"
    ],
    tags: ["Next.js", "TypeScript", "Hasura GraphQL", "PostgreSQL", "Nhost"],
    live: "https://agent-workflow-builder-kappa.vercel.app/",
    github: "https://github.com/codewithabhi101"
  },
  {
    badge: "Mobile & Web Sync",
    title: "Local-First Notes App",
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    desc: "Cross-platform (iOS/Android/Web) offline-first notes system with a custom sync engine, offline change queueing, and client-side encryption.",
    bullets: [
      "Platform-specific data layer: SQLite (Native) & IndexedDB Dexie.js (Web)",
      "Custom sync engine with offline change queuing & conflict resolution",
      "Client-side AES encryption and Express backend deployed to Render"
    ],
    tags: ["React Native", "Expo", "TypeScript", "SQLite", "IndexedDB", "Node.js"],
    live: "https://local-first-notes-app.netlify.app/",
    github: "https://github.com/codewithabhi101"
  },
  {
    badge: "Subscription SaaS",
    title: "SubTracker",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    desc: "Full-stack application for subscription tracking with JWT authentication, category spend analytics, and duplicate charge detection.",
    bullets: [
      "JWT authentication with custom protected middleware",
      "Category-wise spend analytics and renewal alerts",
      "Scalable MongoDB data models deployed on Vercel"
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "https://subtracker-murex.vercel.app/",
    github: "https://github.com/codewithabhi101"
  },
  {
    badge: "Institutional Portal",
    title: "Agriculture College Website",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    desc: "Responsive multi-page institutional web portal with structured sections for admissions, academic programs, facilities, and contact.",
    bullets: [
      "Reusable, type-safe Next.js component system",
      "File-based routing with mobile-first layouts",
      "Optimized production build deployed to Netlify"
    ],
    tags: ["Next.js", "TypeScript", "Responsive Design", "Netlify"],
    live: "https://agrdemo1.netlify.app/",
    github: "https://github.com/codewithabhi101"
  }
];

const experiences = [
  {
    year: "2026",
    role: "Full-Stack Software Engineer",
    company: "Software Architecture & Modern Systems",
    period: "2025 – Present",
    points: [
      "Engineered full-stack and mobile applications end-to-end spanning GraphQL, REST, and offline-first architectures.",
      "Developed a custom offline-first sync engine with conflict resolution queues and client-side AES encryption.",
      "Modeled 7-table multi-tenant PostgreSQL schemas on Hasura/Nhost with organization-level row permissions."
    ],
    tags: ["Next.js", "React Native", "Java / Spring Boot", "GraphQL", "PostgreSQL", "Docker"]
  },
  {
    year: "2024",
    role: "Full-Stack Web Developer",
    company: "Web Platforms & SaaS Systems",
    period: "2024 – 2025",
    points: [
      "Engineered SubTracker full-stack application with JWT authentication and automated category spend analytics.",
      "Developed an institutional web platform for an Agriculture College featuring scalable component systems.",
      "Configured automated CI/CD pipelines, containerization with Docker Compose, and cloud deployments."
    ],
    tags: ["TypeScript", "Node.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS"]
  },
  {
    year: "2023",
    role: "B.E. in Information Science & Engineering",
    company: "AIET, Mijar - Moodbidri",
    period: "2023 – Present (Final Year)",
    points: [
      "Pursuing Bachelor of Engineering with an academic CGPA of 7.5.",
      "Specializing in System Design, Offline-First Architecture, and Database Modeling.",
      "Completed backend engineering and database development certifications from IBM and Meta."
    ],
    tags: ["System Design", "Data Structures", "Java", "SQL", "OOP"]
  }
];

const education = [
  {
    degree: "B.E. in Information Science & Engineering",
    school: "AIET, Mijar - Moodbidri",
    period: "2023 – Present",
    score: "CGPA: 7.5"
  },
  {
    degree: "Pre-University Course (PUC)",
    school: "Shubhodaya PU College",
    period: "2021 – 2023",
    score: "66%"
  },
  {
    degree: "SSLC (Secondary School)",
    school: "Shubhodaya English School",
    period: "2020 – 2021",
    score: "81%"
  }
];

// Verified Certifications with Direct Verification Links
const certifications = [
  {
    title: "Developing Back-End Apps with Node.js and MongoDB",
    issuer: "IBM · Coursera",
    link: "https://coursera.org/verify/IQ5M1D58FPCR",
    hasLiveLink: true,
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    id: "IQ5M1D58FPCR"
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta · Coursera",
    link: "https://coursera.org/verify/FATWWHTD06IL",
    hasLiveLink: true,
    tags: ["JavaScript", "ES6+", "Unit Testing", "Jest"],
    id: "FATWWHTD06IL"
  },
  {
    title: "Java Full Stack Development",
    issuer: "Wipro",
    link: "",
    hasLiveLink: false,
    statusText: "In Progress",
    tags: ["Java", "Spring Boot", "REST APIs", "Microservices", "SQL"],
    id: "WIPRO-JFS-2026"
  }
];

const techCloud = [
  "JavaScript", "TypeScript", "Java", "SQL", "React", "React Native", "Next.js",
  "Spring Boot", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB",
  "SQLite", "IndexedDB", "GraphQL", "Hasura", "Spring Security", "JWT Auth",
  "OAuth 2.0", "Docker", "Zustand", "Dexie.js", "Vercel", "Netlify", "Render", "EAS Build"
];

const spokenLanguages = [
  { name: "English", level: "Professional Working Proficiency", icon: "🌐" },
  { name: "Kannada", level: "Native / Mother Tongue", icon: "🗣️" },
  { name: "Hindi", level: "Conversational Proficiency", icon: "💬" }
];

const svg = (path, size = 20) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

/* ══════════════════════════════════════════════
   2. DOM STRUCTURE
   ══════════════════════════════════════════════ */

document.querySelector("#app").innerHTML = `
  <!-- NAVBAR -->
  <header class="navbar">
    <div class="container nav-wrap">
      <a href="#home" class="brand">
        <span class="brand-tag">&lt;/&gt;</span>
        Abhi B C
      </a>
      <nav class="nav-links">
        <a class="nav-item active" href="#home">Home</a>
        <a class="nav-item" href="#about">About</a>
        <a class="nav-item" href="#experience">Experience</a>
        <a class="nav-item" href="#projects">Projects</a>
        <a class="nav-item" href="#skills">Skills</a>
        <a class="nav-item" href="#credentials">Credentials</a>
        <a class="nav-item" href="#contact">Contact</a>
      </nav>
      <a href="#contact" class="btn-nav">Let's Talk</a>
    </div>
  </header>

  <main>
    <!-- HERO -->
    <section id="home" class="slide hero-slide">
      <div class="container hero-grid">
        <div class="hero-left">
          <div class="status-pill">
            <span class="status-dot"></span> Available for Full-Stack Roles & Internships
          </div>
          <h1 class="hero-title">
            I'm <span class="highlight">Abhi B C</span><br />
            Full-Stack Software Engineer
          </h1>
          <p class="hero-desc">
            Designing resilient web and mobile applications end-to-end.
            Specializing in offline-first mobile sync engines, Spring Boot backend systems, and multi-tenant GraphQL architectures.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn primary">View My Work &rarr;</a>
            <a href="/ABHI_RESUME.pdf" download class="btn outline">&#8659; Download Resume</a>
          </div>
          <div class="hero-counters">
            <div class="counter-item">
              <span class="counter-num">5</span>
              <span class="counter-label">Built Projects</span>
            </div>
            <div class="counter-item">
              <span class="counter-num">7.5</span>
              <span class="counter-label">Engineering CGPA</span>
            </div>
            <div class="counter-item">
              <span class="counter-num">100%</span>
              <span class="counter-label">Live Deployments</span>
            </div>
          </div>
        </div>

        <div class="hero-right">
          <div class="hero-avatar-wrap">
            <div class="avatar-glow"></div>
            <div class="avatar-ring">
              <img src="/profile.jpg" alt="Abhi B C" onerror="this.parentElement.innerHTML='<div class=\\'avatar-placeholder\\'>&lt;/&gt;</div>'" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="slide">
      <div class="container">
        <div class="slide-heading">
          <h2>Who <span class="highlight">Am I?</span></h2>
          <div class="heading-bar"></div>
        </div>

        <div class="about-split">
          <div class="about-text-col">
            <h3>Full-stack engineer building resilient web and mobile systems.</h3>
            <p>
              <strong>Engineering is more than writing code; it's about solving real architectural challenges.</strong>
              I design and deploy software solutions including an offline-first notes platform with a custom conflict-resolution sync engine,
              a multi-tenant GraphQL system on Hasura with PostgreSQL row-level security, and a Spring Boot 3 enterprise REST platform.
            </p>
            <p>
              Final-year Information Science & Engineering student at AIET, Moodbidri (CGPA: 7.5).
              Experienced across Next.js, React Native, Java/Spring Boot, Node.js, and containerized Docker environments.
            </p>
            <div class="about-actions">
              <a href="/ABHI_RESUME.pdf" download class="btn primary">&#8659; Download CV</a>
              <a href="#projects" class="btn outline">Explore Projects</a>
            </div>
          </div>

          <div class="about-cards-col">
            <div class="info-card">
              <div class="info-card-icon">${svg('<path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/>', 22)}</div>
              <div>
                <h4>System & API Architecture</h4>
                <p>Designing multi-tenant schemas, Hasura GraphQL engines, Spring Boot REST APIs, and OAuth 2.0 / JWT flows.</p>
              </div>
            </div>
            <div class="info-card">
              <div class="info-card-icon">${svg('<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/>', 22)}</div>
              <div>
                <h4>Offline-First Mobile Systems</h4>
                <p>Developing cross-platform React Native apps backed by SQLite and IndexedDB with custom sync queues.</p>
              </div>
            </div>
            <div class="info-card">
              <div class="info-card-icon">${svg('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>', 22)}</div>
              <div>
                <h4>Production Delivery</h4>
                <p>Track record of live deployments with automated CI/CD across Vercel, Netlify, Render, and Docker.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="slide">
      <div class="container">
        <div class="slide-heading">
          <h2>Engineering <span class="highlight">Experience</span></h2>
          <p class="slide-sub">End-to-end engineering lifecycle, systems architecture, and live software delivery.</p>
          <div class="heading-bar"></div>
        </div>

        <div class="timeline-container">
          ${experiences.map(exp => `
            <div class="timeline-node">
              <div class="timeline-badge">${exp.year}</div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <div>
                    <h4>${exp.role}</h4>
                    <p class="company-name">${exp.company}</p>
                  </div>
                  <span class="timeline-period">${exp.period}</span>
                </div>
                <ul class="timeline-bullets">
                  ${exp.points.map(pt => `<li>${pt}</li>`).join("")}
                </ul>
                <div class="timeline-tags">
                  ${exp.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="slide py-dense">
      <div class="container">
        <div class="stats-banner-grid">
          <div class="stats-box">
            <span class="stats-big">5</span>
            <span class="stats-name">Built Projects</span>
          </div>
          <div class="stats-box">
            <span class="stats-big">7.5</span>
            <span class="stats-name">Engineering CGPA</span>
          </div>
          <div class="stats-box">
            <span class="stats-big">20+</span>
            <span class="stats-name">Technologies Used</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="slide">
      <div class="container">
        <div class="slide-heading">
          <h2>Featured <span class="highlight">Projects</span></h2>
          <p class="slide-sub">A showcase of full-stack, GraphQL, mobile, and responsive applications.</p>
          <div class="heading-bar"></div>
        </div>

        <div class="project-grid">
          ${projects.map(p => `
            <article class="project-card">
              <div class="project-img-wrap">
                <img src="${p.img}" alt="${p.title}" />
                <span class="project-featured-badge">${p.badge}</span>
              </div>
              <div class="project-body">
                <div>
                  <h3>${p.title}</h3>
                  <p class="project-desc">${p.desc}</p>
                  <ul class="project-bullets">
                    ${p.bullets.map(b => `<li>${b}</li>`).join("")}
                  </ul>
                </div>
                <div>
                  <div class="project-tags">
                    ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}
                  </div>
                  <div class="project-actions">
                    <a href="${p.live}" target="_blank" rel="noreferrer" class="btn primary-sm">Live Demo &#8599;</a>
                    <a href="${p.github}" target="_blank" rel="noreferrer" class="btn icon-sm" title="View Source on GitHub">
                      ${svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>', 16)}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="slide">
      <div class="container">
        <div class="slide-heading">
          <h2>My <span class="highlight">Skills</span></h2>
          <p class="slide-sub">Here's a comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.</p>
          <div class="heading-bar"></div>
        </div>

        <div class="skills-3col-grid">
          <!-- Column 1: Frontend -->
          <div class="skill-category-box">
            <h3 class="category-heading">${skillsColumns.frontend.title}</h3>
            <div class="skill-items-stack">
              ${skillsColumns.frontend.items.map(s => `
                <div class="skill-item-row" data-p="${s.pct}">
                  <div class="skill-item-header">
                    <div class="skill-title-with-icon">
                      <span class="skill-brand-icon">${s.icon}</span>
                      <span class="skill-name">${s.name}</span>
                    </div>
                    <span class="skill-percentage">${s.pct}%</span>
                  </div>
                  <div class="skill-progress-track">
                    <div class="skill-progress-bar"></div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Column 2: Backend -->
          <div class="skill-category-box">
            <h3 class="category-heading">${skillsColumns.backend.title}</h3>
            <div class="skill-items-stack">
              ${skillsColumns.backend.items.map(s => `
                <div class="skill-item-row" data-p="${s.pct}">
                  <div class="skill-item-header">
                    <div class="skill-title-with-icon">
                      <span class="skill-brand-icon">${s.icon}</span>
                      <span class="skill-name">${s.name}</span>
                    </div>
                    <span class="skill-percentage">${s.pct}%</span>
                  </div>
                  <div class="skill-progress-track">
                    <div class="skill-progress-bar"></div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Column 3: Tools & Technologies -->
          <div class="skill-category-box">
            <h3 class="category-heading">${skillsColumns.tools.title}</h3>
            <div class="skill-items-stack">
              ${skillsColumns.tools.items.map(s => `
                <div class="skill-item-row" data-p="${s.pct}">
                  <div class="skill-item-header">
                    <div class="skill-title-with-icon">
                      <span class="skill-brand-icon">${s.icon}</span>
                      <span class="skill-name">${s.name}</span>
                    </div>
                    <span class="skill-percentage">${s.pct}%</span>
                  </div>
                  <div class="skill-progress-track">
                    <div class="skill-progress-bar"></div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Spoken Languages -->
        <div class="spoken-lang-card">
          <div class="spoken-header">
            <h3>Spoken Languages</h3>
            <span class="tag-pill">Multilingual Communication</span>
          </div>
          <div class="spoken-grid">
            ${spokenLanguages.map(l => `
              <div class="spoken-item">
                <div class="spoken-icon">${l.icon}</div>
                <div>
                  <h4 class="spoken-name">${l.name}</h4>
                  <p class="spoken-level">${l.level}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- CREDENTIALS -->
    <section id="credentials" class="slide">
      <div class="container">
        <div class="slide-heading">
          <h2>Education & <span class="highlight">Credentials</span></h2>
          <p class="slide-sub">Verified academic background, certifications, and technical proficiencies.</p>
          <div class="heading-bar"></div>
        </div>

        <div class="edu-grid">
          ${education.map(e => `
            <div class="edu-card">
              <div class="edu-badge">${e.score}</div>
              <h4>${e.degree}</h4>
              <p class="edu-school">${e.school}</p>
              <span class="edu-period">${e.period}</span>
            </div>
          `).join("")}
        </div>

        <div class="credentials-split-container">
          <div class="highlights-panel">
            <div class="panel-header">
              <span class="panel-icon">🏆</span>
              <h3>Experience Highlights</h3>
            </div>
            <div class="highlight-stat-row">
              <span>Years of Active Coding</span>
              <span class="highlight-accent">3+ Years</span>
            </div>
            <div class="highlight-stat-row">
              <span>Completed Projects</span>
              <span class="highlight-accent">5+</span>
            </div>
            <div class="highlight-stat-row">
              <span>Technologies Mastered</span>
              <span class="highlight-accent">20+</span>
            </div>
            <div class="highlight-stat-row">
              <span>Code & Architecture Quality</span>
              <span class="highlight-accent">100%</span>
            </div>
          </div>

          <div class="certs-panel">
            <div class="panel-header">
              <span class="panel-icon">📜</span>
              <h3>Certifications</h3>
            </div>
            <div class="cert-card-stack">
              ${certifications.map(c => `
                <div class="cert-card-item">
                  <div class="cert-card-top">
                    <h4>${c.title}</h4>
                    ${c.hasLiveLink 
                      ? `<a href="${c.link}" target="_blank" rel="noreferrer" class="cert-link-btn" title="View Verified Certificate">&#8599;</a>`
                      : `<span class="cert-status-badge">${c.statusText}</span>`
                    }
                  </div>
                  <p class="cert-card-issuer">${c.issuer}</p>
                  <div class="cert-card-tags">
                    ${c.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}
                  </div>
                  <span class="cert-card-id">ID: ${c.id}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="tech-cloud-box">
          <h3>Full Technical Stack</h3>
          <div class="tech-cloud-wrap">
            ${techCloud.map(tech => `<span class="cloud-pill">${tech}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="slide">
      <div class="container">
        <div class="slide-heading">
          <h2>Get In <span class="highlight">Touch</span></h2>
          <p class="slide-sub">Open for Software Engineering roles, Full-Stack opportunities, and internships.</p>
          <div class="heading-bar"></div>
        </div>

        <div class="contact-split">
          <div class="contact-left">
            <div class="contact-card-box">
              <h3>Let's Connect</h3>
              <p>Based in Moodbidri, Karnataka, India. Available for full-time roles, internships, and relocation.</p>
              <div class="status-pill status-contact">
                <span class="status-dot"></span> Available for Opportunities
              </div>

              <div class="contact-items">
                <a href="mailto:abhibc.work@gmail.com" class="contact-line">
                  ${svg('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>', 18)}
                  <span>abhibc.work@gmail.com</span>
                </a>
                <a href="tel:+918217025255" class="contact-line">
                  ${svg('<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.288 1.249 11.04 11.04 0 0 0 6.388 6.367Z"/>', 18)}
                  <span>+91-8217025255</span>
                </a>
                <a href="https://linkedin.com/in/abhibc2005" target="_blank" rel="noreferrer" class="contact-line">
                  ${svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>', 18)}
                  <span>linkedin.com/in/abhibc2005</span>
                </a>
                <a href="https://github.com/codewithabhi101" target="_blank" rel="noreferrer" class="contact-line">
                  ${svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>', 18)}
                  <span>github.com/codewithabhi101</span>
                </a>
                <a href="https://www.instagram.com/_ii_abh_ii_/" target="_blank" rel="noreferrer" class="contact-line">
                  ${svg('<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>', 18)}
                  <span>instagram.com/_ii_abh_ii_/</span>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-right">
            <div class="contact-form-box">
              <h3>Send Message</h3>
              <p class="form-desc">Fill out the form below and I will get back to you promptly.</p>
              <form action="https://formspree.io/f/mnjrlzjl" method="POST" class="contact-form">
                <div class="form-row">
                  <div class="form-field">
                    <label>Full Name *</label>
                    <input type="text" name="name" placeholder="Your full name" required />
                  </div>
                  <div class="form-field">
                    <label>Email Address *</label>
                    <input type="email" name="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div class="form-field">
                  <label>Subject *</label>
                  <input type="text" name="subject" placeholder="Opportunity / Project Inquiry" required />
                </div>
                <div class="form-field">
                  <label>Message *</label>
                  <textarea name="message" rows="4" placeholder="Tell me about your role or project..." required></textarea>
                </div>
                <button type="submit" class="btn primary full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-content">
      <p>&copy; 2026 Abhi B C. Built with clean component architecture & warm earthy neutral aesthetics.</p>
    </div>
  </footer>
`;

/* ══════════════════════════════════════════════
   3. ANIMATIONS & OBSERVERS
   ══════════════════════════════════════════════ */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let activeId = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 140) {
      activeId = sec.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${activeId}`);
  });
});

const skillRows = document.querySelectorAll(".skill-item-row");
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      skillRows.forEach((row) => {
        const fill = row.querySelector(".skill-progress-bar");
        if (fill) fill.style.width = row.dataset.p + "%";
      });
      observer.disconnect();
    }
  },
  { threshold: 0.2 }
);

const skillsEl = document.getElementById("skills");
if (skillsEl) observer.observe(skillsEl);