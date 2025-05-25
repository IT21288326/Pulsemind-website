import React, { useState } from 'react';

const DocumentItem = ({ title, icon, downloadUrl, onDownload, isExpandable = false, isExpanded = false, onToggle }) => {
  return (
    <div className="document-item">
      <div className="document-icon">{icon}</div>
      <div className="document-title">{title}</div>
      <div className="document-actions">
        <button 
          onClick={() => onDownload(downloadUrl, title)}
          className="download-btn"
          title="Download"
        >
          Download Document
        </button>
        
        {isExpandable && (
          <button 
            onClick={onToggle}
            className="expand-btn"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? '▼' : '▶'}
          </button>
        )}
      </div>
    </div>
  );
};

const ExpandableSection = ({ title, icon, documents, isExpanded, onToggle, onDownload, onDownloadAll }) => {
  return (
    <div className="expandable-section">
      <div className="document-item">
        <div className="document-icon">{icon}</div>
        <div className="document-title">{title}</div>
        <div className="document-actions">
          <button 
            onClick={onToggle}
            className="expand-btn"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? '▼' : '▶'}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="sub-documents">
          <div className="download-all-section">
            <button 
              onClick={() => onDownloadAll(documents, title)}
              className="download-all-btn"
              title="Download All"
            >
              📥 Download All {title}
            </button>
          </div>
          {documents.map((doc, index) => (
            <div key={index} className="sub-document-item">
              <div className="sub-document-icon">📋</div>
              <div className="sub-document-title">{doc.title}</div>
              <button 
                onClick={() => onDownload(doc.downloadUrl, doc.title)}
                className="download-btn"
                title="Download"
              >
                Download Document
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Documents = () => {
  const [expandedSections, setExpandedSections] = useState({
    proposal: false,
    finalReport: false
  });

  // Documents with their download URLs
  const proposalDocuments = [
    { 
      title: "Proposal Document - IT21288326",
      downloadUrl: "/documents/24-25J-261-IT21288326.pdf"
    },
    { 
      title: "Proposal Document - IT21290992",
      downloadUrl: "/documents/24-25J-261-IT21290992.pdf"
    },
    { 
      title: "Proposal Document - IT21379574",
      downloadUrl: "/documents/24-25J-261-IT21379574.pdf"
    },
    { 
      title: "Proposal Document - IT21380532",
      downloadUrl: "/documents/24-25J-261-IT21380532.pdf"
    }
  ];

  const finalReportDocuments = [
    { 
      title: "Final Report - IT21288326",
      downloadUrl: "/documents/24-25J-261-IT21288326- Individual report.pdf"
    },
    { 
      title: "Final Report - IT21290992",
      downloadUrl: "/documents/24-25J-261-IT21290992- Individual report.pdf"
    },
    { 
      title: "Final Report - IT21379574",
      downloadUrl: "/documents/24-25J-261-IT21379574- Individual report.pdf"
    },
    { 
      title: "Final Report - IT21380532",
      downloadUrl: "/documents/24-25J-261-IT21380532- Individual report.pdf"
    },
    { 
      title: "Final Report - Group",
      downloadUrl: "/documents/24-25J-261- Group Report.pdf"
    }
  ];

  const singleDocuments = [
    {
      title: "TAF",
      icon: "📄",
      downloadUrl: "/documents/RETAF_24-25J-261.pdf"
    },
    {
      title: "Status Document - 1",
      icon: "📄",
      downloadUrl: "/documents/README.md"
    },
    {
      title: "Status Document - 2",
      icon: "📄",
      downloadUrl: "/documents/PulseMind.xlsx"
    }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleDownload = (downloadUrl, documentTitle) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = documentTitle;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Downloading: ${documentTitle} from ${downloadUrl}`);
  };

  const handleDownloadAll = (documents, sectionTitle) => {
    // Download all documents in the section
    documents.forEach((doc, index) => {
      setTimeout(() => {
        handleDownload(doc.downloadUrl, doc.title);
      }, index * 500); // Stagger downloads by 500ms
    });
    
    console.log(`Downloading all documents from: ${sectionTitle}`);
  };

  return (
    <div>
      <section id="documents">
        <div className="container">
          <h2 className="section-title">Project Documents</h2>
          <p className="section-subtitle">Access all the documentation related to the PulseMind project.</p>
          
          <div className="documents-list">
            {/* Single Documents */}
            {singleDocuments.map((document, index) => (
              <DocumentItem
                key={index}
                title={document.title}
                icon={document.icon}
                downloadUrl={document.downloadUrl}
                onDownload={handleDownload}
              />
            ))}

            {/* Expandable Proposal Documents */}
            <ExpandableSection
              title="Proposal Documents"
              icon="📁"
              documents={proposalDocuments}
              isExpanded={expandedSections.proposal}
              onToggle={() => toggleSection('proposal')}
              onDownload={handleDownload}
              onDownloadAll={handleDownloadAll}
            />

            {/* Expandable Final Reports */}
            <ExpandableSection
              title="Final Reports"
              icon="📁"
              documents={finalReportDocuments}
              isExpanded={expandedSections.finalReport}
              onToggle={() => toggleSection('finalReport')}
              onDownload={handleDownload}
              onDownloadAll={handleDownloadAll}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Documents Section */
        #documents {
          padding: 30px 0;
           background-image: url('/img/dot2.png');
    background-size: cover;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 10px;
        }

        .section-subtitle {
          text-align: center;
          color: #6b7280;
          font-size: 1.1rem;
          margin-bottom: 40px;
        }

        .documents-list {
          max-width: 700px;
          margin: 0 auto;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          padding: 30px;
        }

        .document-item {
          display: flex;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #E5E7EB;
        }

        .document-item:last-child {
          border-bottom: none;
        }

        .expandable-section:last-child .document-item {
          border-bottom: none;
        }

        .document-icon {
          margin-right: 15px;
          color: #5c97f6;
          font-size: 24px;
          min-width: 30px;
        }

        .document-title {
          font-weight: 500;
          color: #4B5563;
          flex-grow: 1;
        }

        .document-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .download-btn {
          background: linear-gradient(135deg, #5c97f6, #4f87e6);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .download-btn:hover {
          background: linear-gradient(135deg, #4f87e6, #3b73d1);
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(92, 151, 246, 0.3);
        }

        .expand-btn {
          background: none;
          border: none;
          font-size: 14px;
          cursor: pointer;
          padding: 5px;
          border-radius: 4px;
          color: #5c97f6;
          transition: background-color 0.3s;
        }

        .expand-btn:hover {
          background-color: #f3f4f6;
        }

        .sub-documents {
          margin-left: 45px;
          border-left: 2px solid #e5e7eb;
          padding-left: 20px;
        }

        .sub-document-item {
          display: flex;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f3f4f6;
        }

        .sub-document-item:last-child {
          border-bottom: none;
        }

        .sub-document-icon {
          margin-right: 12px;
          font-size: 18px;
          min-width: 25px;
        }

        .sub-document-title {
          font-weight: 400;
          color: #6b7280;
          flex-grow: 1;
          font-size: 0.95rem;
        }

        .download-all-section {
          padding: 10px 0 15px 0;
          border-bottom: 1px solid #f3f4f6;
          margin-bottom: 5px;
        }

        .download-all-btn {
          background: linear-gradient(135deg, #5c97f6, #4f87e6);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .download-all-btn:hover {
          background: linear-gradient(135deg, #4f87e6, #3b73d1);
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(92, 151, 246, 0.3);
        }

        .expandable-section {
          margin-bottom: 0;
        }

        .expandable-section .document-item {
          border-bottom: 1px solid #E5E7EB;
        }

        .expandable-section:not(:last-child) {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default Documents;