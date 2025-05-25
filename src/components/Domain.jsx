// components/Domain.jsx
import React from 'react';
import DomainCard from './DomainCard';

const Domain = () => {
  const domainData = [
  {
    title: "Gamified ADHD Symptom Assessment",
    description: "A game called 'Falling Star' tracks reaction time, attention, and impulsivity in children. Parents complete an adaptive questionnaire. Both inputs are used to classify ADHD subtype."
  },
  {
    title: "Tools for Inattentive ADHD",
    description: "Children play emotion-aware games that adjust difficulty based on their facial expressions and performance. Helps improve focus and memory."
  },
  {
    title: "Tools for Hyperactive-Impulsive ADHD",
    description: "Children follow personalized daily routines with mindfulness, breathing, and creative activities to support impulse control."
  },
  {
    title: "Adaptive Learning & Predictive Intervention",
    description: "System monitors behavioral data to predict future academic or social challenges and recommends personalized interventions."
  }
];


  return (
    <section id="domain">
      <div className="container-domain">
        <h2 className="section-title">Our Domain</h2>
        <p className="section-subtitle">PulseMind aims to be a low-cost, culturally adaptive solution for ADHD assessment and treatment, especially for low-resource regions like Sri Lanka.</p>
        
        <div className="domain-container">
          {domainData.map((domain, index) => (
            <DomainCard 
              key={index} 
              title={domain.title} 
              description={domain.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domain;
