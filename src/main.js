import "./style.css";

document.querySelector("#app").innerHTML = `
  <header class="nav">
    <div class="brand">Portfolio<span class="dot">.</span></div>

    <nav class="links">
      <a class="navlink active" href="#home">Home</a>
      <a class="navlink" href="#about">About</a>
      <a class="navlink" href="#services">Services</a>
      <a class="navlink" href="#skills">Skills</a>
      <a class="navlink" href="#projects">Project</a>
      <a class="navlink" href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <!-- HOME -->
    <section id="home" class="section hero">
      <div class="hero-left">
        <p class="hello">Hi, I am</p>
        <h1 class="name">
          <span class="grad">ABHI B C</span>
        </h1>
        <p class="role">TypeScript Developer • Next.js • Modern Web Apps</p>

        <p class="desc">
          3rd Year BE (ISE) student focused on building scalable and modern web applications using
          TypeScript and Next.js. I enjoy creating clean, responsive, and high-performance user interfaces
          with a strong focus on user experience.
        </p>

        <div class="hero-actions">
          <a class="btn neon" href="/ABHI_BC_Resume.pdf" download>Download CV</a>
          <a class="btn ghost" href="#projects">View Projects</a>
        </div>
      </div>

      <div class="hero-right">
        <div class="avatar-ring">
          <img src="/profile.jpg" alt="ABHI B C" />
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section block">
      <h2 class="title">About</h2>
      <p class="text">
        I’m ABHI B C, a 3rd-year BE student in Information Science & Engineering.
        I focus on building modern, scalable web applications using TypeScript and Next.js.
        I enjoy crafting clean, responsive UI and improving performance and usability.
        <br /><br />
        Currently, I’m strengthening my TypeScript fundamentals, exploring Next.js App Router concepts
        (SSR/SSG, routing, API routes), and practicing problem-solving regularly.
        My goal is to become a full-stack developer and work on real-world, production-ready projects.
      </p>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section block">
      <h2 class="title">Services</h2>
      <div class="cards3">
        <div class="card">
          <h3>Next.js Applications</h3>
          <p>Building scalable apps using Next.js routing, SSR/SSG, and API routes.</p>
        </div>
        <div class="card">
          <h3>TypeScript Development</h3>
          <p>Type-safe, maintainable code with strong structure and best practices.</p>
        </div>
        <div class="card">
          <h3>Modern UI</h3>
          <p>Responsive UI with reusable components and clean layouts for great UX.</p>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section block">
      <h2 class="title">My Skills</h2>

      <div class="skills-wrap">
        <div class="skill-left">
          <h3 class="subhead">Technical Skills</h3>

          <div class="bar" data-p="90">
            <div class="bar-top"><span>TypeScript</span><span class="pct">90%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="85">
            <div class="bar-top"><span>Next.js</span><span class="pct">85%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="82">
            <div class="bar-top"><span>React</span><span class="pct">82%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="75">
            <div class="bar-top"><span>JavaScript</span><span class="pct">75%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="78">
            <div class="bar-top"><span>HTML & CSS</span><span class="pct">78%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="72">
            <div class="bar-top"><span>REST API</span><span class="pct">72%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="65">
            <div class="bar-top"><span>MongoDB (Basics)</span><span class="pct">65%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="60">
            <div class="bar-top"><span>DSA (Improving)</span><span class="pct">60%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>
        </div>

        <div class="skill-right">
          <h3 class="subhead">Professional Skills</h3>

          <div class="circles">
            <div class="circle" style="--p:82">
              <div class="circle-in"><div class="num">82%</div><div class="lab">Problem Solving</div></div>
            </div>
            <div class="circle" style="--p:86">
              <div class="circle-in"><div class="num">86%</div><div class="lab">Consistency</div></div>
            </div>
            <div class="circle" style="--p:80">
              <div class="circle-in"><div class="num">80%</div><div class="lab">Learning Mindset</div></div>
            </div>
            <div class="circle" style="--p:78">
              <div class="circle-in"><div class="num">78%</div><div class="lab">Communication</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
 <div class="project-grid">

  <!-- 1) Lorenta FIRST -->
  <article class="p-card">
    <h3>Lorenta Technologies Website</h3>
    <p>Business website with clean UI, responsive layout, and modern sections.</p>
    <div class="stack">Next.js • TypeScript • Responsive • UI</div>
    <div class="p-links">
      <a class="plink ghost" href="https://www.lorentatechnologies.com/" target="_blank" rel="noreferrer">Live</a>
      <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </article>

  <!-- 2) Next.js Portfolio -->
  <article class="p-card">
    <h3>Next.js Portfolio</h3>
    <p>Personal portfolio built with Next.js + TypeScript, responsive UI and optimized pages.</p>
    <div class="stack">Next.js • TypeScript • UI • Responsive</div>
    <div class="p-links">
      <a class="plink ghost" href="#" target="_blank" rel="noreferrer">Live</a>
      <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </article>

  <!-- 3) Task Manager -->
  <article class="p-card">
    <h3>Task Manager Dashboard</h3>
    <p>Task CRUD dashboard with search/filter and clean component structure.</p>
    <div class="stack">Next.js • TypeScript • CRUD • API Routes</div>
    <div class="p-links">
      <a class="plink ghost" href="#" target="_blank" rel="noreferrer">Live</a>
      <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </article>

  <!-- 4) Auth + Blog -->
  <article class="p-card">
    <h3>Auth + Blog App</h3>
    <p>Blog app with authentication, protected pages, and dynamic routing.</p>
    <div class="stack">Next.js • TypeScript • Auth • MongoDB</div>
    <div class="p-links">
      <a class="plink ghost" href="#" target="_blank" rel="noreferrer">Live</a>
      <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </article>

  <!-- 5) Agriculture Dept -->
  <article class="p-card">
    <h3>College Agriculture Dept Website (Demo)</h3>
    <p>Demo website for our college Agriculture Department with responsive layout and routing.</p>
    <div class="stack">Next.js • TypeScript • Responsive UI • Routing</div>
    <div class="p-links">
      <a class="plink ghost" href="http://localhost:3000" target="_blank" rel="noreferrer">Live</a>
      <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </article>

</div>

    <!-- CONTACT -->
    <section id="contact" class="section block contact">
      <div class="contact-left">
        <h2 class="title left">Contact Me</h2>
        <p class="text left">Let’s work together. Reach out for opportunities or collaboration.</p>
        <div class="contact-info">
          <div>📧 linkedin.com/in/abhibc2005/</div>
          <div>💻 github.com/codewithabhi101</div>
        </div>
      </div>

      <form class="contact-form" id="contactForm">
        <input type="text" placeholder="Enter Your Name" required />
        <input type="email" placeholder="Enter Your Email" required />
        <textarea rows="5" placeholder="Enter Your Message" required></textarea>
        <button class="btn neon full" type="submit">Submit</button>
      </form>
    </section>

    <footer class="footer">
      <p>© 2026 ABHI B C • Built with Vite</p>
    </footer>
  </main>
`;

/* JS */
const bars = document.querySelectorAll(".bar");
const navLinks = document.querySelectorAll(".navlink");

/* Skill bars fill when skills section enters view */
const io = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      bars.forEach((b) => {
        const fill = b.querySelector(".fill");
        if (fill) fill.style.width = b.dataset.p + "%";
      });
      io.disconnect();
    }
  },
  { threshold: 0.3 }
);

const skillsSec = document.getElementById("skills");
if (skillsSec) io.observe(skillsSec);

/* Active nav link on click (simple) */
navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    navLinks.forEach((x) => x.classList.remove("active"));
    a.classList.add("active");
  });
});