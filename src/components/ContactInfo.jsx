// components/ContactInfo.jsx
import React from 'react';

const ContactInfo = ({ title, content }) => {
  return (
    <div className="contact-item">
      <h3>{title}</h3>
      {content}
    </div>
  );
};

export default ContactInfo;