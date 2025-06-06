// components/AboutUs.jsx
import React from 'react';
import TeamCard from './TeamCard';

const AboutUs = () => {
  const teamData = [
    {
      name: "Dharmasena U.D.S.V.",
      id: "IT21288326",
      role: "Component 1 - Gamified ADHD Symptom Assessment",
      image: `${process.env.PUBLIC_URL}/img/members/dharmasena.jpg`
    },
    {
      name: "Manamperi R.S.",
      id: "IT21290992",
      role: "Component 2 - Tools for Inattentive ADHD",
      image: `${process.env.PUBLIC_URL}/img/members/manamperi.jpg`
    },
    {
      name: "Dilshani H.T.D.P.",
      id: "IT21379574",
      role: "Component 3 - Impulse Control via Timetables",
      image: `${process.env.PUBLIC_URL}/img/members/dilshani.jfif`
    },
    {
      name: "Halliyadda H.U.M.S.",
      id: "IT21380532",
      role: "Component 4 - Adaptive Learning and Predictions",
      image: `${process.env.PUBLIC_URL}/img/members/halliyadda.jfif`
    }
  ];

  const supervisorData = [
    {
      name: "Dr. Sanvitha Kasthuriarachchi",
      id: "", // Leave empty for supervisors or add department/designation
      role: "Project Supervisor",
      image: `${process.env.PUBLIC_URL}/img/members/supervisor.jpg` // Placeholder image, replace with actual image path
    },
    {
      name: "Ms. Mihiri Samaraweera",
      id: "",
      role: "Project Co-Supervisor",
      image: `${process.env.PUBLIC_URL}/img/members/co-supervisor.jpg` // Placeholder image, replace with actual image path
    },
    {
      name: "Dr. Kamalani Wanigasinghe",
      id: "",
      role: "External Supervisor",
      image: `${process.env.PUBLIC_URL}/img/members/external-supervisor.jpg` // Placeholder image, replace with actual image path
    }
  ];

  return (
    <section id="about">
      <div className="container-aboutus">
        <h2 className="section-title-mil">About Us</h2>
        <p className="section-subtitle-mil">Meet the team behind the PulseMind project.</p>
        
        {/* Project Supervisors Section */}
        <div className="supervisors-section">
          <h3 className="subsection-title-ab">Project Supervisors</h3>
          <div className="team-container supervisors-grid">
            {supervisorData.map((supervisor, index) => (
              <TeamCard
                key={`supervisor-${index}`}
                name={supervisor.name}
                id={supervisor.id}
                role={supervisor.role}
                image={supervisor.image}
                isSupervisor={true}
              />
            ))}
          </div>
        </div>

        {/* Development Team Section */}
        <div className="team-section">
          <h3 className="subsection-title-ab">Development Team</h3>
          <div className="team-container">
            {teamData.map((member, index) => (
              <TeamCard
                key={`team-${index}`}
                name={member.name}
                id={member.id}
                role={member.role}
                image={member.image}
                isSupervisor={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
