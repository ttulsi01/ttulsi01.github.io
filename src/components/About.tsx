'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <>
      <section className="about-container" id="about-section" aria-labelledby="about-heading">
        <header>
          <h1 id="about-heading" className="name">TULSI TAILOR</h1>
        </header>
        <div className="about-content">
          <h2 className="title">SOFTWARE ENGINEER & FULL-STACK DEVELOPER</h2>
          <p className="introduction">
            Passionate about building scalable web applications and always eager to learn new technologies.
          </p>

          <div className="social-media-icons">
            <a href="mailto:tulsitailor01@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/tulsi-tailor" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ttulsi01" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/tulsitailor_" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1tfjDRzBr8Cj6jNZgcK4IBw5OTEDXHXcz/view?usp=sharing"
            download
            className="resume-button"
            aria-label="Download Tulsi Tailor's Resume"
          >
            Download my Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
