// components/DocumentItem.jsx
import React from 'react';

const DocumentItem = ({ title, icon, onDownload }) => {
  return (
    <div className="document-item">
      <div className="document-info">
        <span className="document-icon">{icon}</span>
        <span className="document-title">{title}</span>
      </div>
      <button 
        className="download-btn"
        onClick={onDownload}
        title={`Download ${title}`}
      >
        Download Document
      </button>
    </div>
  );
};

export default DocumentItem;