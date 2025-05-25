// components/Presentations.jsx
import React from 'react';
import DocumentItem from './DocumentItem';

const Presentations = () => {
  const presentationData = [
    {
      title: "Proposal Presentation",
      icon: "🖥️",
      fileName: "proposal-presentation.pdf",
      filePath: "/presentations/proposalPresentation-24-25J-261.pdf" // Adjust path as needed
    },
    {
      title: "Progress Presentation 1",
      icon: "🖥️",
      fileName: "progress-presentation-1.pdf",
      filePath: "/presentations/ProgressPresentation1-24-25J-261.pdf"
    },
    {
      title: "Progress Presentation 2",
      icon: "🖥️",
      fileName: "progress-presentation-2.pdf",
      filePath: "/presentations/ProgressPresentation2-24-25J-261.pdf"
    },
    {
      title: "Final Presentation",
      icon: "🖥️",
      fileName: "final-presentation.pdf",
      filePath: "/presentations/final-presentation.pdf"
    }
  ];

  const handleDownload = (filePath, fileName) => {
    // Method 1: Direct download link (for files in public folder)
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Alternative method for fetching files from server/API
  const handleDownloadFromServer = async (filePath, fileName) => {
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download file. Please try again.');
    }
  };

  return (
    <section id="presentations">
      <div className="container-presentations">
        <h2 className="section-title">Presentations</h2>
        <p className="section-subtitle">View our project presentations throughout the development lifecycle.</p>
        
        <div className="documents-list">
          {presentationData.map((presentation, index) => (
            <DocumentItem
              key={index}
              title={presentation.title}
              icon={presentation.icon}
              onDownload={() => handleDownload(presentation.filePath, presentation.fileName)}
              // Alternative: onDownload={() => handleDownloadFromServer(presentation.filePath, presentation.fileName)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;