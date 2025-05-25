// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Domain from './components/Domain';
import Milestones from './components/Milestones';
import Documents from './components/Documents';
import Presentations from './components/Presentations';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResearchWebsite from './components/ResearchWebsite';
import './styles/globals.css';

import { ChevronRight, BookOpen, Search, Target, Settings, Code, Database, Brain, Globe } from 'lucide-react';
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Domain />
      <ResearchWebsite />
      <Milestones />
      <Documents />
      <Presentations />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
