import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaPython, FaJava, FaAws } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostgresql, SiJenkins, SiRedux, SiTypescript, SiTailwindcss, SiKubernetes } from 'react-icons/si';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#techstack">Tech Stack</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="header">
        <h1>Surya Chandra Prakash Ravi</h1>
        <p>Data Scientist & Cybersecurity Enthusiast</p>
      </header>

      <main className="main-content">
        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            I am passionate about data science and cybersecurity. I love working on projects that involve data analysis, machine learning, and ensuring the security of information systems.
          </p>
        </section>

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <p>Here are some of the projects I've worked on:</p>
          <ul>
            <li><a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">Project 1</a></li>
            <li><a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">Project 2</a></li>
            <li><a href="https://example.com/project3" target="_blank" rel="noopener noreferrer">Project 3</a></li>
          </ul>
        </section>

        {/* Tech Stack Section */}
        <section id="techstack" className="techstack">
          <h2>Tech Stack</h2>
          <p>Here are some of the technologies and tools I work with:</p>
          <div className="tech-icons">
            <div className="icon"><FaHtml5 /> <span>HTML5</span></div>
            <div className="icon"><FaCss3Alt /> <span>CSS3</span></div>
            <div className="icon"><FaJsSquare /> <span>JavaScript</span></div>
            <div className="icon"><FaReact /> <span>React</span></div>
            <div className="icon"><FaNodeJs /> <span>Node.js</span></div>
            <div className="icon"><FaPython /> <span>Python</span></div>
            <div className="icon"><FaJava /> <span>Java</span></div>
            <div className="icon"><FaAws /> <span>AWS</span></div>
            <div className="icon"><SiMysql /> <span>MySQL</span></div>
            <div className="icon"><SiMongodb /> <span>MongoDB</span></div>
            <div className="icon"><SiPostgresql /> <span>PostgreSQL</span></div>
            <div className="icon"><FaDocker /> <span>Docker</span></div>
            <div className="icon"><SiKubernetes /> <span>Kubernetes</span></div>
            <div className="icon"><FaGitAlt /> <span>Git</span></div>
            <div className="icon"><SiJenkins /> <span>Jenkins</span></div>
            <div className="icon"><SiRedux /> <span>Redux</span></div>
            <div className="icon"><SiTypescript /> <span>TypeScript</span></div>
            <div className="icon"><SiTailwindcss /> <span>Tailwind CSS</span></div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <p>You can find my work and connect with me through the following platforms:</p>
          <ul>
            <li><a href="https://github.com/33Surya66" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Surya Chandra Prakash Ravi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
