import React from 'react';
import './App.css';
import profilePic from './assets/profile.jpg';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="main-container">
      {/* NAVBAR */}
      <header className="topnav">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="https://your-resume-link.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </header>

      {/* LANDING SECTION */}
      <div className="landing" id="home">
        <div className="left">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="right">
          <h1>Hi, I'm John Joseph</h1>
          <p>CSE Undergrad @ IIT Bombay</p>
          <p>Aspiring Software Developer | Passionate about full-stack apps & real-world impact.</p>
        </div>
        <div className="social-icons">
          <a href="https://github.com/Johnjoseph073" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="mailto:john@iitb.ac.in">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a third-year student at IIT Bombay, interested in software development, machine learning, and building real-world products. I've done multiple course and personal projects in these domains.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li>OLX Clone – full-stack app with user auth, product listings, and messaging</li>
          <li>Drone Stabilization Simulator – modeling PID control in SC639 course</li>
        </ul>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section">
        <h2>Work Experience</h2>
        <p>Intern @ XYZ Startup – built scalable APIs and improved backend reliability</p>
      </section>
    </div>
  );
}

export default App;
