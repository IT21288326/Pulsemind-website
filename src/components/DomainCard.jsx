// components/DomainCard.jsx
import React from 'react';

const DomainCard = ({ title, description }) => {
  return (
    <div className="domain-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DomainCard;
