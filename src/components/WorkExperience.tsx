"use client";

import React, { useState } from 'react';

interface Job {
  position: string;
  company: string;
  duration: string;
  location: string;
  companyLink: string;
  description: string;
  tools: string[];
}

const jobData: Job[] = [
  {
    position: 'Full-Stack Developer',
    company: 'Department of Technology Solution – University of Tennessee, Knoxville',
    duration: 'Sep 2023 – Present',
    location: 'Knoxville, TN',
    companyLink: 'https://www.utk.edu/',
    description: 'Developed and maintained web applications using .NET and React Native. Collaborated on UI/UX design and optimized application performance.',
    tools: ['.NET', 'React Native', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    position: 'Cybersecurity Engineering Intern',
    company: 'Bechtel Corporation',
    duration: 'May 2023 – Aug 2023',
    location: 'Reston, VA',
    companyLink: 'https://www.bechtel.com/',
    description: 'Engineered an HMI control hub for rail systems and authored a technical paper on cybersecurity in rail systems. Improved operator efficiency by 12%.',
    tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'mySCADA'],
  },
  {
    position: 'Software Engineer Intern',
    company: 'Trinh Research Lab - University of Tennessee, Knoxville',
    duration: 'May 2021 – May 2024',
    location: 'Knoxville, TN',
    companyLink: 'https://www.utk.edu/',
    description: 'Developed web applications with Python and JS. Improved experiment throughput with CRISPR module and enhanced responsiveness with Bootstrap.',
    tools: ['Python', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'AWS', 'Docker'],
  },
  {
    position: 'Data Analyst Intern',
    company: 'Commercial Vehicle Group',
    duration: 'May 2022 – Aug 2022',
    location: 'Vonore, TN',
    companyLink: 'https://cvgrp.com/',
    description: 'Maintained a SQL database and analyzed customer data to suggest improvements. Worked in an agile environment with team members.',
    tools: ['SQL', 'PostgreSQL', 'MAPICS', 'CATIA', 'Agile'],
  },
];

const WorkExperience: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="work-experience-container">
      <h2 className="work-section-title">Work Experience</h2>
      <div className="accordion-container">
        {jobData.map((job, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <h3 className="accordion-title">
                {job.position} @ <a href={job.companyLink} className="company-link" target="_blank" rel="noopener noreferrer">{job.company}</a>
              </h3>
              <span className={`accordion-arrow ${openIndex === index ? 'open' : ''}`}>
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className={`accordion-content ${openIndex === index ? 'visible' : 'hidden'}`}>
              <p className="job-duration-location">📅 {job.duration} | 📍 {job.location}</p>
              <p className="job-description">{job.description}</p>
              <div className="job-tools">
                {job.tools.map((tool, idx) => (
                  <span key={idx} className="tool">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
