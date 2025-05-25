// components/TeamCard.jsx
import React from 'react';

const TeamCard = ({ name, id, role, image }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} className="team-img" />
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-id">{id}</p>
        <p className="team-role">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;