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
import TwitterLogo from "./assets/twitter.png"
import GithubLogo from "./assets/github.png"

function App() {
  return (
    <>
      <div className="hero">
        <div className="title-container">
          <h1 className="title">Hi, I'm Brentley!</h1>
        </div>

        <div className="dev-type-container">
          <span className="dev-type-text">
            Backend Enginner, AI/ML Enginner, Systems Enginner
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
              document.getElementById('projects').scrollIntoView({
                behavior: 'smooth'
              })
            }
          >
            <span className="projects-button-text">Projects</span>
          </button>
        </div>
      </div>

      <section id="about-me" className="about-me-section">
        <div className="about-me-title-container">
          <h1 className="about-me-title">About</h1>
        </div>

        <div className="about-me-content">
          <p className="about-me-sentence">
            Hi, I'm Brentley, a 13 year old programmer interested in backend development, systems programming, and AI/ML. I first became curious about how computers worked when I was 9, but my old laptop would overheat whenever I tried to code. After getting my first PC, I began learning programming and have been building projects ever since.
          </p>

          <img
            className="about-me-photo"
            src={BrentleyImage}
            alt="Brentley"
          />
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-title-container">
          <h1 className="projects-title">Projects</h1>
        </div>

        <div className="projects-content">
          <div className="project-card">
            <h3 className="project-card-title">
              BrentleytheDev Discord Bot
            </h3>

            <p className="project-card-description">
              A custom Discord bot for my Discord server that can log events and has fun commands like /cat that get a random cat image and put it into an embed.
            </p>

            <div className="project-tag">
              Python
              <img className="PythonLogo" src={PythonLogo} alt="Python" />
            </div>

            <div className="project-tag">
              Discord.py
              <img className="DiscordLogo" src={DiscordLogo} alt="Discord" />
            </div>

            <a
              href="https://github.com/BrentleytheDev/BrentleytheDev-Discord-Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-btn"
            >
              View on GitHub
              <img src={GithubLogo} className="githublogo"
              />
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
              <img className="githublogo" src={GithubLogo}/>
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="languages-title-container">
          <h1 className="languages-title">Skills</h1>
        </div>

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
      </section>
      <section className="contact-section">
  <div className="contact-title-container">
    <h1 className="contact-title">Contact</h1>
  </div>

  <div className="contact-content">
    <a
      href="https://discord.gg/vFD9TJby4K"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div className="contact-card-header">
  <img
    className="contact-card-icon"
    src={DiscordLogo}
    alt="Discord"
  />

  <h2 className="contact-card-title">
    Discord Server
  </h2>
</div>

      <p className="contact-card-description">
        Join my Discord community to see my projects, development updates, and chat with me.
      </p>
    </a>

    <a
      href="https://x.com/BrentleytheDev"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div className="contact-card-header">
        <img
          className="contact-card-icon"
          src={TwitterLogo}
        />
      </div>
      <h2 className="contact-card-title">X / Twitter</h2>

      <p className="contact-card-description">
        Follow me for programming updates, project progress, and things I'm learning.
      </p>
    </a>
    <a className="contact-card">
  <h2 className="contact-card-title">
    🌎 My Time Zone
  </h2>

  <p className="contact-card-description">
    Central Time (CT)
    <br />
    Usually available:
    <br />
    Weekdays: 11 AM - 1PM 
    <br />
    Weekends: 11 AM - 1PM
  </p>
</a>
  </div>
</section>
    </>
  )
}

export default App