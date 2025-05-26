// components/Milestones.jsx
import React from 'react';
import Milestone from './Milestone';

const Milestones = () => {
  const milestoneData = [
    {
      title: "Project Proposal",
      description: "Research design and initial planning phase.",
      status: "completed",
      position: "left",

      date:'August 16th 2024'
    },
    {
      title: "Progress Presentation 1",
      description: "Basic prototype demonstration and feedback collection.",
      status: "completed",
      position: "right",
      date:'December 06th 2024'
    },
    {
      title: "Progress Presentation 2",
      description: "Feature development and implementation review.",
      status: "completed",
      date: "March 20th 2025",
      position: "left"
    },
    {
    
      date: "March 20th 2025",
      title: "Research Paper",
      description: "Evaluation of 90% completion of the proposed solution by a panel of judges.",
      status: "completed",
      position: "right"
    },
    {
      title: "Final Assessment & Viva",
      description: "Full system tested with comprehensive evaluation.",
      status: "pending",
      date: "May 26th 2025",
      position:  "left"
    },
  
  {
      date: "May 26th 2025",
      title: "Website Assessment",
      description: "Final evaluation of the website implementation and functionality.",
      status: "pending",
      position: "right"
    },

  ];

  return (
    <section id="milestones" className="milestones">
      <div className="container-milestones">
        <h2 className=" section-title-mil ">Project Milestones</h2>
        <p className="section-subtitle-mil">Track our progress through the development lifecycle of the PulseMind project.</p>
        
        <div className="timeline">
          {milestoneData.map((milestone, index) => (
            <Milestone
              key={index}
              title={milestone.title}
              description={milestone.description}
              status={milestone.status}
              date={milestone.date}
              position={milestone.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
