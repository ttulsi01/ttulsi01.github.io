import React from 'react';
import About from '@/components/About';
import Projects from '@/components/Projects';
import WorkExperience from '@/components/WorkExperience';

const HomePage: React.FC = () => {
  return (
    <div>
      <About />
      <Projects />
      <WorkExperience />
    </div>
    
  );
}

export default HomePage;
