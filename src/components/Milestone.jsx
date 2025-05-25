// components/Milestone.jsx
import React from 'react';

const Milestone = ({ title, description, status,date, position }) => {
  return (
    <div className={`milestone ${position}`}>
      <h3 className="milestone-title">{title}</h3>
      <p className="milestone-desc">{description}</p>
      <h5 className="milestone-date">{date}</h5>
      <span className={`milestone-status ${status}`}>
        {status === "completed" ? "Completed" : "Pending"}
      </span>
      
    </div>
  );
};

export default Milestone;