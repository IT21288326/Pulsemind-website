import React, { useState } from 'react';
import { ChevronRight, BookOpen, Search, Target, Settings, Code, Database, Brain, Globe } from 'lucide-react';
import { Gamepad2, Server, Layers3, Camera, Cloud, PackageSearch, Lock } from 'lucide-react';

import './ResearchWebsite.css';

const ResearchWebsite = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Introduction', icon: BookOpen },
    { id: 'literature', title: 'Literature Review', icon: Search },
    { id: 'gap', title: 'Research Gap', icon: Target },
    { id: 'methodology', title: 'Methodology', icon: Settings },
    { id: 'technologies', title: 'Technologies', icon: Code },
  ];

 const technologies = [
  { name: 'React.js', description: 'Frontend framework for building interactive, responsive user interfaces', icon: Code },
  { name: 'Phaser 3', description: 'Game development framework for creating gamified behavioral tasks', icon: Gamepad2 },
  { name: 'Node.js & Express.js', description: 'Backend runtime environment for managing server-side operations', icon: Server },
   { name: 'MongoDB', description: 'Flexible NoSQL database for storing user data and assessment results', icon: Database },
  { name: 'TensorFlow & Keras', description: 'Machine learning frameworks for ADHD classification and emotion detection', icon: Brain },
  { name: 'OpenCV', description: 'Computer vision library for real-time facial emotion recognition', icon: Camera },
  { name: 'FastAPI', description: 'Lightweight Python-based API framework for AI model integration', icon: Cloud },
  { name: 'Docker & Kubernetes', description: 'Containerization and orchestration tools for scalable, reliable deployment', icon: PackageSearch },
  { name: 'JWT (JSON Web Token)', description: 'Secure authentication system for user role management and data protection', icon: Lock },
];


  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <div className="content-section">
            <div className="intro-banner">
              <h3>Research Overview</h3>
              <p>
                PulseMind is an AI-driven, gamified behavioral assessment and intervention system designed to enhance the early identification and personalized management of Attention-Deficit/Hyperactivity Disorder (ADHD) in children aged 5 to 10. It combines interactive games, adaptive questionnaires, machine learning, and emotion-aware interventions to deliver accurate, engaging, and culturally relevant ADHD care for Sri Lanka and similar regions.
                </p>
            </div>
            
            <div className="two-column-grid">
              <div className="info-card">
                <h4>Research Objectives</h4>
                <ul className="objective-list">
                  <li>
                    <ChevronRight className="icon-small" />
                    Develop an AI-based, gamified ADHD assessment tool
                  </li>
                  <li>
                    <ChevronRight className="icon-small" />
                    Classify ADHD subtypes using machine learning
                  </li>
                  <li>
                    <ChevronRight className="icon-small" />
                    VIntegrate emotion detection for personalized interventions
                  </li>
                  <li>
                    <ChevronRight className="icon-small" />
                    Provide predictive insights for future behavioral challenges
                  </li>
                  <li>
                    <ChevronRight className="icon-small" />
                    Deliver real-time feedback and reports for parents and teachers
                  </li>
                </ul>
              </div>
              
              <div className="info-card">
                <h4>Expected Impact</h4>
                <p>
                  PulseMind aims to improve early ADHD detection, reduce assessment time, and offer engaging, personalized interventions. It empowers parents, teachers, and clinicians with real-time insights, promoting better learning, emotional control, and overall wellbeing in children with ADHD.</p>
              </div>
            </div>
          </div>
        );
      
      case 'literature':
        return (
          <div className="content-section">
            <div className="literature-banner">
              <h3>Literature Analysis</h3>
              <p>
                Research highlights that traditional ADHD assessments rely heavily on subjective reports and static tools, often lacking adaptability and real-time feedback. Recent studies show that integrating AI, gamification, and emotion recognition can enhance engagement, accuracy, and personalization in ADHD care. Combining behavioral data with adaptive questionnaires and predictive analytics offers a more effective, child-friendly approach for early detection and intervention.
                </p>
            </div>
            
            <div className="three-column-grid">
              <div className="info-card">
                <h4>Theoretical Foundations</h4>
                <p className="small-text">
                  ADHD is a neurodevelopmental disorder marked by persistent patterns of inattention, hyperactivity, and impulsivity that affect daily functioning.
                </p>
              </div>
              
              <div className="info-card">
                <h4>Current Methodologies</h4>
                <p className="small-text">
                  Traditional ADHD assessments rely on subjective rating scales, clinical interviews, and observational methods, often lacking objectivity and adaptability.
                </p>
              </div>
              
              <div className="info-card">
                <h4>Emerging Trends</h4>
                <p className="small-text">
                  AI, gamification, and emotion-aware technologies are being explored to create real-time, adaptive, and engaging ADHD assessment and intervention tools.
                </p>
              </div>
            </div>
            
            <div className="info-card">
              <h4>Key Findings from Literature</h4>
              <div className="two-column-grid">
                <div className="findings-list">
                  <div className="finding-item">
                    <div className="dot blue-dot"></div>
                    Gamified tasks improve engagement in ADHD assessment
                  </div>
                  <div className="finding-item">
                    <div className="dot blue-dot"></div>
                    Adaptive questionnaires increase accuracy by adjusting based on user responses
                  </div>
                </div>
                <div className="findings-list">
                  <div className="finding-item">
                    <div className="dot green-dot"></div>
                    Emotion detection keeps interventions personalized and responsive to the child’s mood
                  </div>
                  <div className="finding-item">
                    <div className="dot green-dot"></div>
                    Predictive analytics help plan proactive, future-focused interventions
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'gap':
        return (
          <div className="content-section">
            <div className="gap-banner">
              <h3>Identified Research Gaps</h3>
              <p>
                Through careful analysis, we’ve identified key limitations in current ADHD assessment and intervention systems and areas where our solution delivers meaningful improvements </p>
            </div>
            
            <div className="gap-items">
              <div className="gap-item">
                <div className="gap-icon red-bg">
                  <Target className="icon-medium" />
                </div>
                <div className="gap-content">
                  <h4>Gap 1: Lack of Objective, Real-Time Assessment</h4>
                  <p className="gap-description">
                    Most ADHD tools rely on subjective reports and static evaluations, missing real-time behavioral indicators.
                  </p>
                  <div className="solution-box blue-solution">
                    <strong>Our Approach:</strong> Gamified, AI-powered behavioral tasks capturing attention, impulsivity, and reaction times in real time
                  </div>
                </div>
              </div>
              
              <div className="gap-item">
                <div className="gap-icon orange-bg">
                  <Search className="icon-medium" />
                </div>
                <div className="gap-content">
                  <h4>Gap 2: Static and Non-Adaptive Interventions</h4>
                  <p className="gap-description">
                    Existing systems offer one-size-fits-all treatments, lacking personalization based on a child’s performance or mood.
                  </p>
                  <div className="solution-box green-solution">
                    <strong>Our Solution:</strong> Emotion-aware, adaptive learning modules that dynamically adjust difficulty and feedback.
                  </div>
                </div>
              </div>
              
              <div className="gap-item">
                <div className="gap-icon purple-bg">
                  <Brain className="icon-medium" />
                </div>
                <div className="gap-content">
                  <h4>Gap 3: Underuse of Emotion Recognition in ADHD Care</h4>
                  <p className="gap-description">
                   Few digital systems incorporate real-time emotion detection to inform and adjust interventions.</p>
                  <div className="solution-box purple-solution">
                    <strong>Our Contribution:</strong> AI-based facial emotion recognition integrated with adaptive games and learning tasks.
                  </div>
                </div>
              </div>

              <div className="gap-item">
                <div className="gap-icon purple-bg">
                  <Brain className="icon-medium" />
                </div>
                <div className="gap-content">
                  <h4>Gap 4: Limited Comprehensive ADHD Platforms</h4>
                  <p className="gap-description">
                   Most solutions focus only on assessment or intervention — rarely offering an end-to-end management system.</p>
                  <div className="solution-box purple-solution">
                    <strong>Our Innovation:</strong>  A unified platform combining assessment, intervention, monitoring, predictive analytics, and caregiver feedback
                  </div>
                </div>
              </div>

            </div>
          </div>
        );
      
      case 'methodology':
        return (
          <div className="content-section">
            <div className="methodology-banner">
              <h3>Research Methodology</h3>
              <p>
                Our research employs a mixed-methods approach, combining quantitative analysis with 
                qualitative insights to ensure comprehensive and reliable results.
              </p>
            </div>
            
            <div className="two-column-grid">
              <div className="methodology-column">
                <div className="phase-card">
                  <h4 className="phase-title">
                    <div className="phase-icon blue-bg">
                      <Settings className="icon-small" />
                    </div>
                    Phase 1: Data Collection
                  </h4>
                  <ul className="phase-list">
                    <li>• Primary data through surveys and interviews</li>
                    <li>• Secondary data from existing databases</li>
                    <li>• Real-time system performance metrics</li>
                  </ul>
                </div>
                
                <div className="phase-card">
                  <h4 className="phase-title">
                    <div className="phase-icon green-bg">
                      <Database className="icon-small" />
                    </div>
                    Phase 2: Analysis
                  </h4>
                  <ul className="phase-list">
                    <li>• Statistical analysis using advanced models</li>
                    <li>• Machine learning algorithms for pattern recognition</li>
                    <li>• Comparative analysis with existing solutions</li>
                  </ul>
                </div>
              </div>
              
              <div className="methodology-column">
                <div className="phase-card">
                  <h4 className="phase-title">
                    <div className="phase-icon orange-bg">
                      <Target className="icon-small" />
                    </div>
                    Phase 3: Implementation
                  </h4>
                  <ul className="phase-list">
                    <li>• Prototype development and testing</li>
                    <li>• Iterative refinement based on feedback</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                
                <div className="phase-card">
                  <h4 className="phase-title">
                    <div className="phase-icon purple-bg">
                      <Search className="icon-small" />
                    </div>
                    Phase 4: Validation
                  </h4>
                  <ul className="phase-list">
                    <li>• Cross-validation with multiple datasets</li>
                    <li>• Peer review and expert evaluation</li>
                    <li>• Real-world deployment testing</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="quality-assurance">
              <h4>Quality Assurance</h4>
              <div className="qa-grid">
                <div className="qa-item">
                  <div className="qa-number blue-bg">1</div>
                  <div className="qa-title">Reproducibility</div>
                  <div className="qa-description">All experiments documented and repeatable</div>
                </div>
                <div className="qa-item">
                  <div className="qa-number green-bg">2</div>
                  <div className="qa-title">Reliability</div>
                  <div className="qa-description">Multiple validation approaches employed</div>
                </div>
                <div className="qa-item">
                  <div className="qa-number purple-bg">3</div>
                  <div className="qa-title">Validity</div>
                  <div className="qa-description">Results verified through independent testing</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'technologies':
        return (
          <div className="content-section">
            <div className="tech-banner">
              <h3>Technology Stack</h3>
              <p>
                Our research leverages modern, scalable, and efficient technologies to deliver a high-performance, AI-powered ADHD assessment and intervention platform.
              </p>
            </div>
            
            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-header">
                    <div className="tech-icon">
                      <tech.icon className="icon-medium" />
                    </div>
                    <h4>{tech.name}</h4>
                  </div>
                  <p className="small-text">{tech.description}</p>
                </div>
              ))}
            </div>
       
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
     

      <div className="main-layout">
        <div className="layout-container">
          <div className="sidebar">
            <nav className="nav-container1">
              <h3 className="nav-title1">Sections</h3>
              <ul className="nav-list1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`nav-button ${
                          activeSection === section.id ? 'nav-button-active' : ''
                        }`}
                      >
                        <Icon className="nav-icon" />
                        <span className="nav-text">{section.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="main-content">
            <div className="content-container">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ResearchWebsite;