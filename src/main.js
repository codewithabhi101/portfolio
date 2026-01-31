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
        <p class="role">Frontend Developer • JavaScript • React</p>

        <p class="desc">
          3rd Year BE (ISE) student focused on Frontend (HTML, CSS, JavaScript, React)
          and learning Backend (Java, SQL). Currently learning DSA and practicing problem-solving on LeetCode.
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
        I enjoy building clean, responsive web interfaces using HTML, CSS, JavaScript and React.
        I’m also learning backend development using Java and SQL through project-based learning.
      </p>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section block">
      <h2 class="title">Services</h2>
      <div class="cards3">
        <div class="card">
          <h3>Frontend UI</h3>
          <p>Responsive websites using HTML, CSS, JavaScript and modern UI design.</p>
        </div>
        <div class="card">
          <h3>React Apps</h3>
          <p>Single-page apps, components, clean structure, and good performance.</p>
        </div>
        <div class="card">
          <h3>Backend (Learning)</h3>
          <p>Java + SQL basics for CRUD, DB connectivity and project-based learning.</p>
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
            <div class="bar-top">
              <span>HTML</span><span class="pct">90%</span>
            </div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="85">
            <div class="bar-top">
              <span>CSS</span><span class="pct">85%</span>
            </div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="80">
            <div class="bar-top">
              <span>JavaScript</span><span class="pct">80%</span>
            </div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="70">
            <div class="bar-top">
              <span>React</span><span class="pct">70%</span>
            </div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="65">
            <div class="bar-top">
              <span>Java + SQL</span><span class="pct">65%</span>
            </div>
            <div class="track"><div class="fill"></div></div>
          </div>
        </div>

        <div class="skill-right">
          <h3 class="subhead">Professional Skills</h3>

          <div class="circles">
            <div class="circle" style="--p:85">
              <div class="circle-in">
                <div class="num">85%</div>
                <div class="lab">Creativity</div>
              </div>
            </div>

            <div class="circle" style="--p:80">
              <div class="circle-in">
                <div class="num">80%</div>
                <div class="lab">Communication</div>
              </div>
            </div>

            <div class="circle" style="--p:75">
              <div class="circle-in">
                <div class="num">75%</div>
                <div class="lab">Problem Solving</div>
              </div>
            </div>

            <div class="circle" style="--p:80">
              <div class="circle-in">
                <div class="num">80%</div>
                <div class="lab">Teamwork</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section block">
      <h2 class="title">Projects</h2>
      <p class="text small-center">A showcase of projects I built while learning frontend and backend development.</p>

      <div class="project-grid">
        <article class="p-card">
          <h3>Smart Employee Dashboard</h3>
          <p>Add/Delete, search, and LocalStorage persistence for employee records.</p>
          <div class="stack">HTML • CSS • JavaScript</div>
          <div class="p-links">
            <a class="plink ghost" href="#">Live</a>
            <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>

        <article class="p-card">
          <h3>Portfolio Website</h3>
          <p>Neon themed portfolio built with Vite + Vanilla JS.</p>
          <div class="stack">Vite • HTML • CSS • JavaScript</div>
          <div class="p-links">
            <a class="plink ghost" href="#">Live</a>
            <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>

        <article class="p-card">
          <h3>Java + SQL CRUD App</h3>
          <p>Learning project for CRUD operations and database connectivity.</p>
          <div class="stack">Java • SQL</div>
          <div class="p-links">
            <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </article>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section block contact">
      <div class="contact-left">
        <h2 class="title left">Contact Me</h2>
        <p class="text left">
          Let’s work together. Reach out for opportunities or collaboration.
        </p>

        <div class="contact-info">
          <div>📧 linkedin.com/in/abhibc2005/</div>
          <div>💻 github.com/codewithabhi101</div>
        </div>
      </div>

      <form class="contact-form" id="contactForm">
        <input type="text" placeholder="Enter Your Name" required />
        <input type="email" placeholder="Enter Your Email" required />
        <input type="text" placeholder="Enter Your Subject" />
        <textarea rows="5" placeholder="Enter Your Message" required></textarea>
        <button class="btn neon full" type="submit">Submit</button>
      </form>
    </section>

    <footer class="footer">
      <p>© 2026 ABHI B C • Built with Vite</p>
    </footer>
  </main>
`;

/* ---- JS: Skill bar animation + active nav ---- */
const bars = document.querySelectorAll(".bar");
const navLinks = document.querySelectorAll(".navlink");

const setActiveLink = () => {
  const sections = ["home","about","services","skills","projects","contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  let current = "home";
  for (const sec of sections) {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 140) current = sec.id;
  }

  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
};

window.addEventListener("scroll", setActiveLink);
setActiveLink();

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      bars.forEach(b => {
        const p = b.getAttribute("data-p");
        b.querySelector(".fill").style.width = p + "%";
      });
      io.disconnect();
    }
  }
}, { threshold: 0.25 });

const skillsSec = document.getElementById("skills");
if (skillsSec) io.observe(skillsSec);

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message saved (demo). To send real email we can connect EmailJS.");
  e.target.reset();
});
