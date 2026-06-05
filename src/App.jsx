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

  // Desktop landing-page artboard. It scales as one unit to keep every section visible.
  const DESIGN_WIDTH = 1440;
  const DESIGN_HEIGHT = 900;

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
    <div className="main-landing-page bg-white flex items-start justify-center">
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
        {/* Main content area with professional spacing grid */}
        <div className="px-14 pt-3 pb-2 flex-1 flex flex-col relative z-10 justify-start overflow-hidden gap-1.5">
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
