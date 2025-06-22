import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>John Joseph</h1>
        <p>CSE @ IIT Bombay | Aspiring Software Engineer</p>
        <a href="https://your-resume-link.pdf" target="_blank">📄 View Resume</a>
      </header>

      <section>
        <h2>Experience</h2>
        <div className="card">
          <h3>Software Intern – XYZ Company</h3>
          <p>May 2024 – July 2024</p>
          <ul>
            <li>Built full-stack features using React and Node.js</li>
            <li>Improved response time by 20% through API optimization</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="card">
          <h3>OLX Clone</h3>
          <p>React, Node.js, PostgreSQL</p>
          <p>A full-stack marketplace platform for buying and selling products.</p>
          <a href="https://github.com/johnjoseph/olx-clone" target="_blank">GitHub</a>
        </div>

        <div className="card">
          <h3>Topic Segmentation</h3>
          <p>Python, PyTorch</p>
          <p>Improved topic segmentation accuracy using Temporal Regression Loss.</p>
          <a href="https://github.com/johnjoseph/topic-segmentation" target="_blank">GitHub</a>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <p><strong>Languages:</strong> C++, Python, JavaScript</p>
        <p><strong>Frameworks:</strong> React, Node.js, Express</p>
        <p><strong>Tools:</strong> Git, Firebase, Docker</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: john@iitb.ac.in</p>
        <p>GitHub: <a href="https://github.com/johnjoseph" target="_blank">github.com/johnjoseph</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/johnjoseph" target="_blank">linkedin.com/in/johnjoseph</a></p>
      </section>
    </div>
  );
}

export default App;
