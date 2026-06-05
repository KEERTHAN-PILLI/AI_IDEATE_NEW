import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Avatars from './components/Avatars';
import WhatIsSifra from './components/WhatIsSifra';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Design reference dimensions based on the screenshot proportions
  const DESIGN_WIDTH = 1440;
  const DESIGN_HEIGHT = 1900;

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const scaleX = windowWidth / DESIGN_WIDTH;
      const scaleY = windowHeight / DESIGN_HEIGHT;
      
      setScale(Math.min(scaleX, scaleY));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-white flex items-start justify-center">
      <div 
        ref={containerRef}
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
        className="bg-white flex flex-col overflow-hidden relative"
      >
        {/* Main content area */}
        <div className="px-16 pt-6 flex-1 flex flex-col relative z-10">
          <Header />
          <Hero />
          <Avatars />
          <WhatIsSifra />
          <BottomCTA />
        </div>
        <Footer />
        
        {/* Subtle ambient background gradients */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[5%] right-[-5%] w-[700px] h-[700px] rounded-full bg-blue-50 blur-[180px] opacity-40" />
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-50 blur-[150px] opacity-30" />
        </div>
      </div>
    </div>
  );
}

export default App;
