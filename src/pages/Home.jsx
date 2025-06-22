import React from 'react';
import './Home.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <div className="home">
      <div className="left">
        <img src={profile} alt="John Joseph" className="home-pic" />
      </div>
      <div className="right">
        <h1>Hi, I'm John Joseph</h1>
        <p>CSE Undergrad @ IIT Bombay</p>
        <p>Full-stack developer | Interested in impactful software & ML projects</p>
        <div className="icons">
          <a href="https://github.com/Johnjoseph073" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
          <a href="mailto:john@iitb.ac.in"><FaEnvelope size={24} /></a>
        </div>
      </div>
    </div>
  );
}
