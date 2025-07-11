import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Skills.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Resume from './components/Resume';
import LeetCodeGraph from './components/LeetCodeGraph';
import GitHubGraph from './components/GitHubGraph';

function App() {
  return (
    <Router>
      <div className={`App`}>
        <Header />
        {/* Floating profile avatar, outside nav bar */}
        <div
          className="floating-profile-avatar"
          onClick={() => window.location.pathname = '/resume'}
          title="View Resume"
          tabIndex={0}
          role="button"
          aria-label="View Resume"
        >
          <span>AC</span>
        </div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/leetcode" element={<LeetCodeGraph />} />
          <Route path="/github" element={<GitHubGraph />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
