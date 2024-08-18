"use client";

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100; // Adjust this for header height

    let foundActive = false;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (!foundActive && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const sectionId = section.getAttribute("id");
        setActiveSection(sectionId);
        foundActive = true;
      }
    });

    if (!foundActive) {
      setActiveSection(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#">Tulsi Tailor</a>
        </div>
        <ul className={`nav-menu ${isOpen ? "nav-menu-active" : ""}`}>
          <li
            className={`nav-item ${
              activeSection === "about-section" ? "active" : ""
            }`}
          >
            <a href="#about-section" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "projects-section" ? "active" : ""
            }`}
          >
            <a href="#projects-section" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "work-experience-section" ? "active" : ""
            }`}
          >
            <a href="#work-experience-section" onClick={() => setIsOpen(false)}>
              Work Experience
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "contact-section" ? "active" : ""
            }`}
          >
            <a href="#contact-section" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-icon" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
