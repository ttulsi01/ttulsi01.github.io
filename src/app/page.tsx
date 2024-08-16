import React from 'react';
import About from '@/components/About';
import Projects from '@/components/Projects';
import WorkExperience from '@/components/WorkExperience';
import Contact from '@/components/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <section id="about-section">
        <About />
      </section>
      <section id="projects-section">
        <Projects />
      </section>
      <section id="work-experience-section">
        <WorkExperience />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
    </div>
    
  );
}

export default HomePage;
