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
          3rd Year BE (ISE) student focused on Frontend Development (HTML, CSS, JavaScript, React.js).
          Currently learning Backend Development, MongoDB, and improving DSA through regular practice.
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
        I enjoy building clean, responsive, and modern web interfaces using HTML, CSS, JavaScript, and React.js.
        I like working on UI and making websites user-friendly.
        <br /><br />
        Currently, I’m learning backend development and MongoDB, and strengthening my DSA fundamentals
        such as arrays, strings, and problem-solving. My goal is to become a full-stack developer
        and work on real-world projects.
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
          <p>Single-page apps, reusable components, and clean project structure.</p>
        </div>
        <div class="card">
          <h3>Backend (Learning)</h3>
          <p>Learning backend concepts, APIs, MongoDB, and server-side logic.</p>
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
            <div class="bar-top"><span>HTML</span><span class="pct">90%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="85">
            <div class="bar-top"><span>CSS</span><span class="pct">85%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="80">
            <div class="bar-top"><span>JavaScript</span><span class="pct">80%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="75">
            <div class="bar-top"><span>React.js</span><span class="pct">75%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="60">
            <div class="bar-top"><span>MongoDB</span><span class="pct">60%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="40">
            <div class="bar-top"><span>Java (Beginner)</span><span class="pct">40%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>

          <div class="bar" data-p="35">
            <div class="bar-top"><span>DSA (Beginner)</span><span class="pct">35%</span></div>
            <div class="track"><div class="fill"></div></div>
          </div>
        </div>

        <div class="skill-right">
          <h3 class="subhead">Professional Skills</h3>

          <div class="circles">
            <div class="circle" style="--p:80">
              <div class="circle-in"><div class="num">80%</div><div class="lab">Problem Solving</div></div>
            </div>
            <div class="circle" style="--p:85">
              <div class="circle-in"><div class="num">85%</div><div class="lab">Consistency</div></div>
            </div>
            <div class="circle" style="--p:78">
              <div class="circle-in"><div class="num">78%</div><div class="lab">Learning Mindset</div></div>
            </div>
            <div class="circle" style="--p:80">
              <div class="circle-in"><div class="num">80%</div><div class="lab">Communication</div></div>
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
            <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank">GitHub</a>
          </div>
        </article>

        <article class="p-card">
          <h3>Portfolio Website</h3>
          <p>Neon themed portfolio built with Vite + Vanilla JavaScript.</p>
          <div class="stack">Vite • HTML • CSS • JavaScript</div>
          <div class="p-links">
            <a class="plink ghost" href="#">Live</a>
            <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank">GitHub</a>
          </div>
        </article>

        <article class="p-card">
          <h3>Backend & DSA Learning Project</h3>
          <p>Beginner-level learning project focused on backend concepts and DSA practice.</p>
          <div class="stack">Java • DSA • MongoDB • Backend</div>
          <div class="p-links">
            <a class="plink neon" href="https://github.com/codewithabhi101" target="_blank">GitHub</a>
          </div>
        </article>
      </div>
    </section>

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

const io = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    bars.forEach(b => b.querySelector(".fill").style.width = b.dataset.p + "%");
    io.disconnect();
  }
}, { threshold: 0.3 });

const skillsSec = document.getElementById("skills");
if (skillsSec) io.observe(skillsSec);
