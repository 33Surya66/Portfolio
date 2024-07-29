import React from 'react';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Surya Chandra Prakash Ravi</h1>
        <p>Data Scientist & Cybersecurity Enthusiast</p>
      </header>
      <main className="main-content">
        <section className="about">
          <h2>About Me</h2>
          <p>
            I am passionate about data science and cybersecurity. I love working on projects that involve data analysis, machine learning, and ensuring the security of information systems.
          </p>
        </section>
        <section className="links">
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
