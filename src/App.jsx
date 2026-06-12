import './App.css'
import BrentleyImage from "./assets/brentley.png"
import PythonLogo from "./assets/python.png"
import DiscordLogo from "./assets/discord.png"
import CLogo from "./assets/C.png"
import CwithClassesLogo from "./assets/c++.png"
import NumPyLogo from "./assets/numpy.png"
import JavaScriptLogo from "./assets/javascript.jpg"
import JavaLogo from "./assets/java.png"
import LinuxLogo from "./assets/linux.png"
import WindowsLogo from "./assets/windows.png"

function App() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="hero">
        <div className="title-container">
          <h1 className="title">Hi, I'm Brentley!</h1>
        </div>

        <div className="dev-type-container">
          <span className="dev-type-text">
            Backend Engineer, AI/ML Engineer, Systems Engineer
          </span>
        </div>

        <div className="introduction-text-container">
          <span className="introduction-text">
            I build backends, databases, AI
          </span>
        </div>

        <div className="title-container-buttons">
          <button
            className="about-me-button"
            onClick={() =>
              document.getElementById('about-me').scrollIntoView({
                behavior: 'smooth'
              })
            }
          >
            <span className="about-me-button-text">About</span>
          </button>

          <button
            className="projects-button"
            onClick={() =>
              document.getElementById('work-and-skills').scrollIntoView({
                behavior: 'smooth'
              })
            }
          >
            <span className="projects-button-text">Projects & Skills</span>
          </button>
        </div>
      </div>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about-me" className="about-me-section">
  <div className="about-me-title-container">
    <h1 className="about-me-title">About</h1>
  </div>

  <div className="about-me-content">
    {/* 👈 Renamed className here */}
    <p className="about-me-description">
      Hi, I'm Brentley, a 13 year old programmer interested in backend development, systems programming, and AI/ML. I first became curious about how computers worked when I was 9, but my old laptop would overheat whenever I tried to code. After getting my first PC, I began learning programming and have been building projects ever since.
    </p>

    <img
      className="about-me-photo"
      src={BrentleyImage}
      alt="Brentley"
    />
  </div>
</section>
      {/* --- SPLIT LAYOUT WORK AND SKILLS --- */}
      <section id="work-and-skills" className="split-section">
        <div className="section-content-wrapper">
          
          {/* CRITICAL: Moved out of columns to sit perfectly in the center of the page viewport */}
          <div className="projects-title-container">
            <h1 className="projects-title">Projects & Skills</h1>
          </div>

          <div className="split-container">
            
            {/* LEFT SIDE COLUMN: PROJECTS */}
            <div className="left-projects-column">
              <div className="projects-vertical-list">
                <div className="project-card">
                  <h3 className="project-card-title">
                    BrentleytheDev Discord Bot
                  </h3>
                  <p className="project-card-description">
                    A custom Discord bot for my Discord server that can log events and has fun commands like /cat that get a random cat image and put it into an embed.
                  </p>
                  <div className="project-tags-container">
                    <div className="project-tag">
                      Python
                      <img className="PythonLogo" src={PythonLogo} alt="Python" />
                    </div>
                    <div className="project-tag">
                      Discord.py
                      <img className="DiscordLogo" src={DiscordLogo} alt="Discord" />
                    </div>
                  </div>
                  <a
                    href="https://github.com/BrentleytheDev/BrentleytheDev-Discord-Bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                  >
                    View on GitHub
                  </a>
                </div>

                <div className="project-card">
                  <h3 className="project-card-title">
                    Simple-database
                  </h3>
                  <p className="project-card-description">
                    A simple database engine written in C while learning low-level systems programming. Built to understand storage, memory management, and database fundamentals.
                  </p>
                  <div className="project-tag">
                    C
                    <img className="CLogo" src={CLogo} alt="C" />
                  </div>
                  <a
                    href="https://github.com/BrentleytheDev/simple-database"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-btn"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE COLUMN: SKILLS */}
            <div className="right-skills-column">
              <div className="skills-vertical-list">
                
                <div className="skill-group">
                  <h2 className="skill-group-title">Languages</h2>
                  <div className="skill-grid">
                    <div className="skill-card">
                      <img className="skill-icon" src={PythonLogo} alt="Python" />
                      <span>Python</span>
                    </div>
                    <div className="skill-card">
                      <img className="skill-icon" src={CLogo} alt="C" />
                      <span>C</span>
                    </div>
                    <div className="skill-card">
                      <img className="skill-icon" src={CwithClassesLogo} alt="C++" />
                      <span>C++</span>
                    </div>
                    <div className="skill-card">
                      <img className="skill-icon" src={JavaScriptLogo} alt="JavaScript" />
                      <span>JavaScript</span>
                    </div>
                    <div className="skill-card">
                      <img className="skill-icon" src={JavaLogo} alt="Java" />
                      <span>Java</span>
                    </div>
                  </div>
                </div>

                <div className="skill-group">
                  <h2 className="skill-group-title">Frameworks</h2>
                  <div className="skill-grid">
                    <div className="skill-card">
                      <img className="skill-icon" src={DiscordLogo} alt="Discord.py" />
                      <span>Discord.py</span>
                    </div>
                    <div className="skill-card">
                      <img className="skill-icon" src={NumPyLogo} alt="NumPy" />
                      <span>NumPy</span>
                    </div>
                  </div>
                </div>

                <div className="skill-group">
                  <h2 className="skill-group-title">Operating Systems</h2>
                  <div className="skill-grid">
                    <div className="skill-card">
                      <img className="skill-icon" src={LinuxLogo} alt="Linux" />
                      <span>Linux</span>
                    </div>
                    <div className="skill-card">
                      <img className="skill-icon" src={WindowsLogo} alt="Windows" />
                      <span>Windows</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="console-footer">
        <div className="console-footer-container">
          <div className="console-copyright-group">
            <div className="console-mini-badge">BRENTLEY</div>
            <span className="console-copyright-text">
              © 2026. All rights reserved.
            </span>
          </div>
          
          <div className="console-footer-links">
            <a 
              href="#about-me" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
              }}
              className="console-link"
            >
              About Me
            </a>
            <span className="console-divider">|</span>
            <a 
              href="#work-and-skills" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work-and-skills').scrollIntoView({ behavior: 'smooth' });
              }}
              className="console-link"
            >
              Projects & Skills
            </a>
            <span className="console-divider">|</span>
            <a href="https://github.com/BrentleytheDev" target="_blank" rel="noopener noreferrer" className="console-link">GitHub</a>
            <span className="console-divider">|</span>
            <a href="mailto:brentleythegreat13@proton.me" className="console-link">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App