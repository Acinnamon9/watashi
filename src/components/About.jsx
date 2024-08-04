// src/components/About.js
import React from 'react';
import './About.css';  // Import the CSS file for About component

function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>Abhijeet Singh Sandal</h1>
        <p>Developer and AI/ML Engineer</p>
      </div>
      <div className="about-image">
        <img src="\src\images\AbhijeetProfile.jpg" alt="Abhijeet Singh Sandal" />
      </div>
    </div>
  );
}

export default About;
