"use client";

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Adjust for header height

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        const sectionId = section.getAttribute('id');
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Tulsi Tailor</div>
        <ul className={`nav-menu ${isOpen ? 'nav-menu-active' : ''}`}>
          <li className={`nav-item ${activeSection === 'about-section' ? 'active' : ''}`}>
            <a href="#about-section" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'projects-section' ? 'active' : ''}`}>
            <a href="#projects-section" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'work-experience-section' ? 'active' : ''}`}>
            <a href="#work-experience-section" onClick={() => setIsOpen(false)}>
              Work Experience
            </a>
          </li>
          <li className={`nav-item ${activeSection === 'contact-section' ? 'active' : ''}`}>
            <a href="#contact-section" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-icon" onClick={toggleMenu}>
          <span className={isOpen ? 'icon-open' : 'icon-close'}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
