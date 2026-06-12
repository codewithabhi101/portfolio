import "./style.css";

/* ── DATA ── */
const skills = [
  ["TypeScript", 90], ["Next.js", 88], ["React.js", 85],
  ["Node.js &amp; Express.js", 82], ["JavaScript (ES6+)", 80],
  ["HTML5 &amp; CSS3", 78], ["REST APIs &amp; JWT Auth", 72],
  ["MongoDB", 68], ["DSA (Improving)", 62],
];

const proSkills = [
  ["Problem Solving", 85], ["Consistency", 88],
  ["Learning Mindset", 82], ["Communication", 78],
];

const chips = ["Git / GitHub","Vercel","Netlify","VS Code","SSR / SSG",
  "File-Based Routing","Component Architecture","Responsive Design","OOP"];

const projects = [
  {
    badge: "&#9889; Flagship SaaS", featured: true, title: "SubTracker",
    desc: "Production-grade full-stack SaaS for subscription management. Built end-to-end with Next.js frontend and Node.js/Express REST API backed by MongoDB, deployed on Vercel.",
    bullets: [
      "JWT authentication &amp; protected middleware",
      "Category-wise spend analytics &amp; upcoming alerts",
      "AI-powered insights to detect duplicate/unused subscriptions",
      "Scalable MongoDB data models",
    ],
    stack: "Next.js &middot; TypeScript &middot; Node.js &middot; Express.js &middot; MongoDB &middot; JWT",
    links: [["https://subtracker-murex.vercel.app/", "&#128279; Live Demo", true], ["https://github.com/codewithabhi101", "GitHub", true]],
  },
  {
    badge: "Portfolio", title: "Next.js Portfolio",
    desc: "Personal developer portfolio with responsive UI, smooth animations, and a modern layout. Deployed on Netlify with optimized build performance and mobile-first design.",
    bullets: [
      "Reusable, type-safe Next.js components",
      "File-based routing &amp; fast page loads",
      "Mobile-first, clean cross-device experience",
    ],
    stack: "Next.js &middot; TypeScript &middot; Responsive &middot; UI",
    links: [["#home", "&#128279; You're Here", false], ["https://github.com/codewithabhi101", "GitHub", true]],
  },
  {
    badge: "Dashboard", title: "Task Manager Dashboard",
    desc: "Full-featured task management dashboard with CRUD operations, search/filter functionality, and reusable component architecture.",
    bullets: [
      "Create, read, update, delete tasks",
      "Search &amp; filter with API routes",
      "Reusable component system",
    ],
    stack: "Next.js &middot; TypeScript &middot; CRUD &middot; API Routes",
    links: [["https://task-manager-dashboard123.netlify.app/", "&#128279; Live", true], ["https://github.com/codewithabhi101", "GitHub", true]],
  },
  {
    badge: "Institutional", title: "Agriculture Dept Website",
    desc: "Fully responsive multi-page institutional website for a college Agriculture Department with structured sections for admissions, programs, facilities, and contact.",
    bullets: [
      "Scalable reusable component architecture",
      "File-based routing &amp; mobile-first layouts",
      "Deployed on Netlify",
    ],
    stack: "Next.js &middot; TypeScript &middot; Responsive UI &middot; Routing",
    links: [["https://agrdemo1.netlify.app/", "&#128279; Live", true], ["https://github.com/codewithabhi101", "GitHub", true]],
  },
];

const services = [
  { icon: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    title: "Next.js Applications",
    desc: "Scalable apps using Next.js App Router, SSR/SSG, API routes, and file-based routing with optimized build performance." },
  { icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    title: "TypeScript Development",
    desc: "Type-safe, maintainable code with strong component architecture, interfaces, and best practices that scale." },
  { icon: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
    title: "Modern UI / Responsive",
    desc: "Mobile-first responsive UI with reusable components, clean layouts, and great UX across all devices." },
  { icon: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    title: "REST API &amp; Backend",
    desc: "Node.js / Express REST API design with JWT authentication, protected middleware, and MongoDB integration." },
  { icon: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    title: "Deployment &amp; DevOps",
    desc: "End-to-end deployment on Vercel and Netlify with optimized builds, environment config, and CI/CD basics." },
  { icon: '<rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/>',
    title: "AI-Powered Features",
    desc: "Integration of AI insights into web apps &mdash; as demonstrated in SubTracker for duplicate/unused subscription detection." },
];

const certs = [
  ["Node.js &amp; MongoDB: Developing Back-end Database Applications", "IBM &nbsp;&middot;&nbsp; Coursera"],
  ["Programming with JavaScript", "Meta &nbsp;&middot;&nbsp; Coursera"],
];

const contactInfo = [
  { href: "mailto:abhibc.work@gmail.com", text: "abhibc.work@gmail.com",
    icon: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>' },
  { href: "tel:+918217025255", text: "+91-8217025255",
    icon: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.288 1.249 11.04 11.04 0 0 0 6.388 6.367Z"/>' },
  { href: "https://linkedin.com/in/abhibc2005/", text: "linkedin.com/in/abhibc2005/", external: true,
    icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>' },
  { href: "https://github.com/codewithabhi101", text: "github.com/codewithabhi101", external: true,
    icon: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>' },
  { href: "/ABHI_RESUME.pdf", text: "Download Resume", download: true,
    icon: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>' },
];

/* ── HTML BUILDERS ── */
const svg = (path, size = 28) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

const skillBars = skills.map(([name, pct]) => `
  <div class="bar" data-p="${pct}">
    <div class="bar-top"><span>${name}</span><span class="pct">${pct}%</span></div>
    <div class="track"><div class="fill"></div></div>
  </div>`).join("");

const proCards = proSkills.map(([label, pct]) => `
  <div class="pro-card">
    <div class="pro-ring" style="--p:${pct}"><div class="pro-inner">${pct}%</div></div>
    <div class="pro-label">${label}</div>
  </div>`).join("");

const chipEls = chips.map(c => `<span class="chip">${c}</span>`).join("");

const projectCards = projects.map(p => `
  <article class="p-card">
    <div class="p-badge ${p.featured ? "p-featured" : ""}">${p.badge}</div>
    <h3>${p.title}</h3>
    <p class="p-desc">${p.desc}</p>
    <ul class="p-bullets">${p.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
    <div class="p-stack">${p.stack}</div>
    <div class="p-links">
      ${p.links.map(([href, label, ext]) =>
        `<a class="plink ${label === "GitHub" ? "neon" : "ghost"}" href="${href}"${ext ? ' target="_blank" rel="noreferrer"' : ""}>${label}</a>`
      ).join("")}
    </div>
  </article>`).join("");

const serviceCards = services.map(s => `
  <div class="srv-card">
    <span class="srv-icon">${svg(s.icon)}</span>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
  </div>`).join("");

const certCards = certs.map(([title, sub]) => `
  <div class="cert-card">
    <div class="cert-icon">&#127891;</div>
    <div class="cert-body"><h4>${title}</h4><p>${sub}</p></div>
  </div>`).join("");

const contactItems = contactInfo.map(c => `
  <a class="cinfo-item" href="${c.href}"${c.external ? ' target="_blank" rel="noreferrer"' : ""}${c.download ? " download" : ""}>
    <span class="cinfo-icon">${svg(c.icon, 22)}</span>${c.text}
  </a>`).join("");

/* ── PAGE ── */
document.querySelector("#app").innerHTML = `
  <header class="nav">
    <div class="brand">abhi<span class="dot">.</span>dev</div>
    <nav class="links" id="navLinks">
      <a class="navlink active" href="#home">Home</a>
      <a class="navlink" href="#about">About</a>
      <a class="navlink" href="#skills">Skills</a>
      <a class="navlink" href="#projects">Projects</a>
      <a class="navlink" href="#services">Services</a>
      <a class="navlink" href="#contact">Contact</a>
    </nav>
  </header>

  <div class="aurora">
    <div class="aurora-blob"></div>
    <div class="aurora-blob"></div>
    <div class="aurora-blob"></div>
  </div>
  <div class="cursor-glow" id="cursorGlow"></div>

  <main>
    <section id="home" class="section">
      <div class="hero">
        <div class="hero-left">
          <div class="hero-badge"><div class="pulse"></div>Open to Internships &amp; Opportunities</div>
          <h1 class="hero-name"><span class="grad">Abhi B C</span></h1>
          <p class="hero-role" id="typedRole">Frontend Developer &middot; Next.js &middot; TypeScript &middot; Full-Stack</p>
          <p class="hero-desc">
            Frontend-focused developer with full-stack experience. Built and shipped
            <strong>SubTracker</strong> &mdash; a production-grade SaaS &mdash; using Next.js, Node.js,
            Express.js, and MongoDB. Strong in component architecture, REST APIs, and JWT auth.
          </p>
          <div class="hero-actions">
            <a class="btn neon" href="/ABHI_RESUME.pdf" download>&#8659; Download CV</a>
            <a class="btn ghost" href="#projects">View Projects &rarr;</a>
            <a class="btn ghost" href="#contact">Hire Me</a>
          </div>
        </div>
        <div class="hero-right">
          <div class="avatar-wrap">
            <div class="avatar-glow"></div>
            <div class="avatar-ring"><img src="/profile.jpg" alt="Abhi B C" /></div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="block">
        <div class="reveal">
          <div class="sec-tag">// about me</div>
          <h2 class="sec-title">Who I <span class="grad-word">Am</span></h2>
        </div>
        <div class="about-grid">
          <div class="about-text reveal-left">
            <p>
              I'm Abhi, a Frontend Developer specializing in <strong>Next.js</strong> and
              <strong>TypeScript</strong>, currently in my final year of Information Science
              Engineering at AIET, Moodbidri (CGPA: 7.5).
            </p>
            <p>
              I've independently designed, built, and deployed multiple real-world projects &mdash;
              all live and publicly accessible. My flagship project <strong>SubTracker</strong>
              is a full-stack SaaS with JWT auth, AI-powered insights, and live Vercel deployment.
            </p>
            <p>
              Actively strengthening full-stack skills with Next.js App Router (SSR/SSG, API routes)
              and practicing DSA regularly. Seeking a frontend or full-stack internship to contribute
              real code from day one.
            </p>
            <div class="about-stats stagger">
              <div class="stat-box"><div class="stat-num">4+</div><div class="stat-label">Projects Shipped</div></div>
              <div class="stat-box"><div class="stat-num">2</div><div class="stat-label">Certifications</div></div>
              <div class="stat-box"><div class="stat-num">7.5</div><div class="stat-label">CGPA</div></div>
              <div class="stat-box"><div class="stat-num">100%</div><div class="stat-label">Self-Taught</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="section">
      <div class="block">
        <div class="reveal">
          <div class="sec-tag">// my toolkit</div>
          <h2 class="sec-title">Skills &amp; <span class="grad-word">Expertise</span></h2>
        </div>
        <div class="skills-layout">
          <div class="reveal-left">
            <div class="sec-tag" style="margin-top:28px;">Technical Skills</div>
            ${skillBars}
            <div class="tech-chips stagger" style="margin-top:24px;">${chipEls}</div>
          </div>
          <div class="reveal-right">
            <div class="sec-tag" style="margin-top:28px;">Professional Skills</div>
            <div class="pro-skills stagger" style="margin-top:16px;">${proCards}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="block">
        <div class="reveal">
          <div class="sec-tag">// what i built</div>
          <h2 class="sec-title">Featured <span class="grad-word">Projects</span></h2>
          <p class="sec-sub">All projects are live, deployed, and publicly accessible.</p>
        </div>
        <div class="project-grid stagger">${projectCards}</div>
      </div>
    </section>

    <section id="services" class="section">
      <div class="block">
        <div class="reveal">
          <div class="sec-tag">// what i offer</div>
          <h2 class="sec-title">My <span class="grad-word">Services</span></h2>
        </div>
        <div class="services-grid stagger">${serviceCards}</div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="block">
        <div class="reveal">
          <div class="sec-tag">// credentials</div>
          <h2 class="sec-title">Certifi<span class="grad-word">cations</span></h2>
        </div>
        <div class="cert-grid stagger">${certCards}</div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="block">
        <div class="reveal">
          <div class="sec-tag">// let's connect</div>
          <h2 class="sec-title">Get In <span class="grad-word">Touch</span></h2>
          <p class="sec-sub">Open to frontend / full-stack internship opportunities. Let's build something great.</p>
        </div>
        <div class="contact-grid">
          <div class="reveal-left"><div class="contact-info">${contactItems}</div></div>
          <div class="reveal-right">
            <form class="contact-form" id="contactForm" action="https://formspree.io/f/mnjrlzjl" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button class="btn neon full" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2026 <span class="dot-text">Abhi B C</span> &nbsp;&middot;&nbsp; Built with Vite &nbsp;&middot;&nbsp; Deployed on Netlify</p>
    </footer>
  </main>
`;

/* ── CURSOR GLOW ── */
const glow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* ── ACTIVE NAV ON CLICK ── */
const navLinks = document.querySelectorAll(".navlink");
navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.forEach((x) => x.classList.remove("active"));
    a.classList.add("active");
  });
});

/* ── ACTIVE NAV ON SCROLL ── */
const sections = document.querySelectorAll("section[id]");
const navIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach((s) => navIO.observe(s));

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .stagger");
const revealIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealIO.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealIO.observe(el));

/* ── SKILL BARS ANIMATION ── */
const bars = document.querySelectorAll(".bar");
const barIO = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      bars.forEach((b) => {
        const fill = b.querySelector(".fill");
        if (fill) fill.style.width = b.dataset.p + "%";
      });
      barIO.disconnect();
    }
  },
  { threshold: 0.3 }
);
const skillsSec = document.getElementById("skills");
if (skillsSec) barIO.observe(skillsSec);

/* ── TYPEWRITER ── */
const roleEl = document.getElementById("typedRole");
if (roleEl) {
  const roles = [
    "Frontend Developer · Next.js · TypeScript · Full-Stack",
    "Building SaaS Apps · REST APIs · JWT Auth",
    "Open to Frontend / Full-Stack Internships",
  ];
  let ri = 0, ci = 0, deleting = false;
  function type() {
    const current = roles[ri];
    if (!deleting) {
      roleEl.textContent = current.substring(0, ci + 1);
      ci++;
      if (ci === current.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
      }
    } else {
      roleEl.textContent = current.substring(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 28 : 55);
  }
  setTimeout(type, 1200);
}

/* ── FIX CARD LINKS ── */
document.querySelectorAll(".p-card a").forEach((a) => {
  a.addEventListener("click", (e) => e.stopPropagation());
});