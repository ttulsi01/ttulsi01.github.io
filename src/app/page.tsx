import React from 'react';
import About from '@/components/About';
import Projects from '@/components/Projects';
import WorkExperience from '@/components/WorkExperience';
import Contact from '@/components/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
    </div>
    
  );
}

export default HomePage;
