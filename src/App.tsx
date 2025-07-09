import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ArtWall from './components/ArtWall';
import Events from './components/Events';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reserve from './components/Reserve';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleSystem from './components/ParticleSystem';
import LoadingScreen from './components/LoadingScreen';
import GetTicket from './components/GetTicket';
import OrderNow from './components/OrderNow';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('hero');
  const [language, setLanguage] = useState<'en' | 'am'>('en');

  const pages = [
    'hero',
    'art-wall',
    'events',
    'menu',
    'gallery',
    'reserve',
    'contact',
    'get-ticket',
    'order-now'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const pageVariants = {
    initial: { 
      opacity: 0,
      scale: 0.8,
      rotateY: -90,
      z: -1000
    },
    in: { 
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0
    },
    out: { 
      opacity: 0,
      scale: 1.2,
      rotateY: 90,
      z: 1000
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'hero':
        return <Hero language={language} setCurrentPage={setCurrentPage} />;
      case 'art-wall':
        return <ArtWall language={language} />;
      case 'events':
        return <Events language={language} setCurrentPage={setCurrentPage} />;
      case 'menu':
        return <Menu language={language} setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <Gallery language={language} />;
      case 'reserve':
        return <Reserve language={language} />;
      case 'contact':
        return <Contact language={language} />;
      case 'get-ticket':
        return <GetTicket language={language} />;
      case 'order-now':
        return <OrderNow language={language} />;
      default:
        return <Hero language={language} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-graphite text-white overflow-hidden">
      <CustomCursor />
      <ParticleSystem />
      
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
        pages={pages}
      />

      <div className="perspective-1000">
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="relative z-10 min-h-screen transform-3d"
          >
            {renderCurrentPage()}
          </motion.main>
        </AnimatePresence>
      </div>

      {/* Footer - Always visible */}
      <Footer language={language} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;