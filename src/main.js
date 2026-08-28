import "./style.css";

/* ══════════════════════════════════════════════
   1. BRAND ICONS & DATA (Accurate Devicon / Simple Icons CDN)
   ══════════════════════════════════════════════ */

const brandIcons = {
  js: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="22" height="22" alt="JavaScript" />`,
  react: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="22" height="22" alt="React" />`,
  ts: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="22" height="22" alt="TypeScript" />`,
  next: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width="22" height="22" alt="Next.js" />`,
  tailwind: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="22" height="22" alt="Tailwind CSS" />`,
  html: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="22" height="22" alt="HTML5" />`,
  java: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" width="22" height="22" alt="Java" />`,
  sql: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" width="22" height="22" alt="SQL" />`,
  node: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="22" height="22" alt="Node.js" />`,
  express: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="22" height="22" alt="Express.js" />`,
  mysql: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="22" height="22" alt="MySQL" />`,
  mongo: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="22" height="22" alt="MongoDB" />`,
  vscode: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" width="22" height="22" alt="VS Code" />`,
  git: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="22" height="22" alt="Git" />`,
  github: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="22" height="22" alt="GitHub" />`,
  docker: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" width="22" height="22" alt="Docker" />`,
  aws: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="22" height="22" alt="AWS" />`,
  jest: `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" width="22" height="22" alt="Jest" />`,
  whatsapp: `<img src="https://cdn.simpleicons.org/whatsapp/25D366" width="22" height="22" alt="WhatsApp" />`,
  gmail: `<img src="https://cdn.simpleicons.org/gmail/EA4335" width="22" height="22" alt="Gmail" />`
};

/* ── 6 ITEMS PER COLUMN (EQUAL LENGTH) ── */
const skillsColumns = {
  frontend: {
    title: "Frontend Development",
    items: [
      { name: "JavaScript", icon: brandIcons.js },
      { name: "React.js", icon: brandIcons.react },
      { name: "TypeScript", icon: brandIcons.ts },
      { name: "Next.js", icon: brandIcons.next },
      { name: "Tailwind CSS", icon: brandIcons.tailwind },
      { name: "HTML5 / CSS3", icon: brandIcons.html }
    ]
  },
  backend: {
    title: "Backend Development",
    items: [
      { name: "Java", icon: brandIcons.java },
      { name: "SQL", icon: brandIcons.sql },
      { name: "Node.js", icon: brandIcons.node },
      { name: "Express.js", icon: brandIcons.express },
      { name: "MySQL", icon: brandIcons.mysql },
      { name: "MongoDB", icon: brandIcons.mongo }
    ]
  },
  tools: {
    title: "Tools & Technologies",
    items: [
      { name: "VS Code", icon: brandIcons.vscode },
      { name: "Git", icon: brandIcons.git },
      { name: "GitHub", icon: brandIcons.github },
      { name: "Docker", icon: brandIcons.docker },
      { name: "AWS", icon: brandIcons.aws },
      { name: "Jest / Testing", icon: brandIcons.jest }
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
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
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

// Full Tech Stack with Official & Accurate Logos
const techStackGrid = [
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Java", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "SQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "React Native", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Spring Boot", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "SQLite", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
  { name: "IndexedDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "GraphQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Hasura", iconUrl: "https://cdn.simpleicons.org/hasura/3970FD" },
  { name: "Spring Security", iconUrl: "https://cdn.simpleicons.org/springsecurity/6DB33F" },
  { name: "JWT Auth", iconUrl: "https://cdn.simpleicons.org/jsonwebtokens/D63AFF" },
  { name: "OAuth 2.0", iconUrl: "https://cdn.simpleicons.org/auth0/EB5424" },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Vercel", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Netlify", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
  { name: "Render", iconUrl: "https://cdn.simpleicons.org/render/46E3B7" }
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
            <span class="status-dot"></span> Available for Frontend & Full-Stack Roles
          </div>
          <h1 class="hero-title">
            I'm <span class="highlight">Abhi B C</span><br />
            Frontend-Focused Full-Stack Engineer
          </h1>
          <p class="hero-desc">
            Building fast, responsive interfaces with React, Next.js, and React Native — backed by full-stack experience across Spring Boot, Node.js, and GraphQL. I care about clean component architecture, smooth UX, and shipping products end-to-end.
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
              Engineering is more than writing code; it's about solving real architectural challenges. I design and deploy software solutions including an offline-first notes platform with a custom conflict-resolution sync engine, a multi-tenant GraphQL system on Hasura with PostgreSQL row-level security, and a Spring Boot 3 enterprise REST platform.
            </p>
            <p>
              Final-year Information Science & Engineering student at AIET, Moodbidri (CGPA: 7.5). Experienced across Next.js, React Native, Java/Spring Boot, Node.js, and containerized Docker environments.
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
                <div class="skill-item-card">
                  <span class="skill-brand-icon">${s.icon}</span>
                  <span class="skill-name">${s.name}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Column 2: Backend -->
          <div class="skill-category-box">
            <h3 class="category-heading">${skillsColumns.backend.title}</h3>
            <div class="skill-items-stack">
              ${skillsColumns.backend.items.map(s => `
                <div class="skill-item-card">
                  <span class="skill-brand-icon">${s.icon}</span>
                  <span class="skill-name">${s.name}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Column 3: Tools & Technologies -->
          <div class="skill-category-box">
            <h3 class="category-heading">${skillsColumns.tools.title}</h3>
            <div class="skill-items-stack">
              ${skillsColumns.tools.items.map(s => `
                <div class="skill-item-card">
                  <span class="skill-brand-icon">${s.icon}</span>
                  <span class="skill-name">${s.name}</span>
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

        <!-- FULL TECH STACK GRID -->
        <div class="tech-cloud-box">
          <h3>Full Technical Stack</h3>
          <p class="slide-sub" style="margin-bottom: 24px;">Core technologies, tools, databases, and platforms I work with.</p>
          <div class="tech-stack-logo-grid">
            ${techStackGrid.map(t => `
              <div class="tech-stack-card">
                <div class="tech-stack-icon">
                  <img src="${t.iconUrl}" alt="${t.name}" loading="lazy" />
                </div>
                <span class="tech-stack-label">${t.name}</span>
              </div>
            `).join("")}
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
                <a href="https://wa.me/918217025255?text=Hi%20Abhi,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!" target="_blank" rel="noreferrer" class="contact-line">
                  ${brandIcons.whatsapp}
                  <span>Chat on WhatsApp (+91-8217025255)</span>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abhibc.work@gmail.com" target="_blank" rel="noreferrer" class="contact-line">
                  ${brandIcons.gmail}
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
                  ${brandIcons.github}
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
              <h3 id="formHeading">Send Message via WhatsApp</h3>
              <p class="form-desc" id="formDesc">Fill out the form below to send me a direct message on WhatsApp instantly.</p>

              <div class="channel-selector-tabs">
                <button type="button" class="channel-tab-btn active" data-channel="whatsapp">
                  ${brandIcons.whatsapp}
                  <span>WhatsApp</span>
                </button>
                <button type="button" class="channel-tab-btn" data-channel="email">
                  ${brandIcons.gmail}
                  <span>Email / Gmail</span>
                </button>
              </div>

              <form id="contactForm" class="contact-form">
                <div class="form-row">
                  <div class="form-field">
                    <label>Full Name *</label>
                    <input type="text" id="contactName" name="name" placeholder="Your full name" required />
                  </div>
                  <div class="form-field">
                    <label>Email Address *</label>
                    <input type="email" id="contactEmail" name="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div class="form-field">
                  <label>Subject *</label>
                  <input type="text" id="contactSubject" name="subject" placeholder="Opportunity / Project Inquiry" required />
                </div>
                <div class="form-field">
                  <label>Message *</label>
                  <textarea id="contactMessage" name="message" rows="4" placeholder="Tell me about your role or project..." required></textarea>
                </div>
                <button type="submit" id="submitBtn" class="btn primary full" style="display:flex;align-items:center;justify-content:center;gap:10px;">
                  <span id="btnIcon">${brandIcons.whatsapp}</span>
                  <span id="btnText">Send via WhatsApp</span>
                </button>
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
   3. CHANNEL SWITCHER & FORM SUBMIT HANDLER
   ══════════════════════════════════════════════ */

let activeChannel = "whatsapp";

const tabButtons = document.querySelectorAll(".channel-tab-btn");
const formHeading = document.getElementById("formHeading");
const formDesc = document.getElementById("formDesc");
const btnIcon = document.getElementById("btnIcon");
const btnText = document.getElementById("btnText");
const contactForm = document.getElementById("contactForm");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeChannel = btn.dataset.channel;

    if (activeChannel === "whatsapp") {
      formHeading.textContent = "Send Message via WhatsApp";
      formDesc.textContent = "Fill out the form below to send me a direct message on WhatsApp instantly.";
      btnIcon.innerHTML = brandIcons.whatsapp;
      btnText.textContent = "Send via WhatsApp";
    } else {
      formHeading.textContent = "Send Message via Gmail";
      formDesc.textContent = "Fill out the form below to open and compose an email directly in Gmail.";
      btnIcon.innerHTML = brandIcons.gmail;
      btnText.textContent = "Send via Gmail";
    }
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (activeChannel === "whatsapp") {
      const formattedMessage = `Hi Abhi, I'm reaching out from your portfolio website!\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
      const encodedText = encodeURIComponent(formattedMessage);
      const whatsappUrl = `https://wa.me/918217025255?text=${encodedText}`;
      window.open(whatsappUrl, "_blank");
    } else {
      const emailBody = `Hi Abhi,\n\nName: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=abhibc.work@gmail.com&su=${encodeURIComponent(
        subject + " - " + name
      )}&body=${encodeURIComponent(emailBody)}`;
      window.open(gmailUrl, "_blank");
    }
  });
}

/* ══════════════════════════════════════════════
   4. SCROLL OBSERVERS
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