import React, { useState, useMemo, useCallback } from 'react';
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

// Constants
const YOUTUBE_VIDEO_ID = 'zhDwjnYZiCo';
const SHIMMER_DURATION = 4000;
const VIDEO_QUALITY = 'hd1080';

// YouTube embed URL with optimized parameters
const getVideoUrl = (videoId, quality) => {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    controls: '0',
    loop: '1',
    playlist: videoId,
    modestbranding: '1',
    showinfo: '0',
    rel: '0',
    vq: quality,
    playsinline: '1'
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};

// Memoized background video component
const BackgroundVideo = React.memo(() => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showShimmer, setShowShimmer] = useState(true);

  const handleIframeLoad = useCallback(() => {
    setShowShimmer(true);
    const timer = setTimeout(() => {
      setVideoLoaded(true);
      setShowShimmer(false);
    }, SHIMMER_DURATION);
    
    return () => clearTimeout(timer);
  }, []);

  const videoUrl = useMemo(() => getVideoUrl(YOUTUBE_VIDEO_ID, VIDEO_QUALITY), []);

  const containerStyle = useMemo(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
  }), []);

  const shimmerStyle = useMemo(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(90deg, #e0e0e0 25%, #f8f8f8 50%, #e0e0e0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    zIndex: 2,
  }), []);

  const iframeStyle = useMemo(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100vw',
    height: '100vh',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    display: videoLoaded ? 'block' : 'none',
    imageRendering: '-webkit-optimize-contrast',
    willChange: 'transform',
  }), [videoLoaded]);

  return (
    <div style={containerStyle}>
      {showShimmer && (
        <div className="youtube-shimmer" style={shimmerStyle} />
      )}
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={iframeStyle}
        title="Home Background Video"
        onLoad={handleIframeLoad}
      />
    </div>
  );
});

BackgroundVideo.displayName = 'BackgroundVideo';

// Route configuration
const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/skills', element: <Skills /> },
  { path: '/projects', element: <Projects /> },
  { path: '/resume', element: <Resume /> },
  { path: '/leetcode', element: <LeetCodeGraph /> },
  { path: '/github', element: <GitHubGraph /> },
];

function App() {
  const [navState, setNavState] = useState('normal');

  const handleNavStateChange = useCallback((newState) => {
    setNavState(newState);
  }, []);

  return (
    <Router>
      <div className="App">
        <BackgroundVideo />
        <Header />
        <Navigation navState={navState} setNavState={handleNavStateChange} />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
