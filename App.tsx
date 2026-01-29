import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import SlideRenderer from './components/SlideRenderer';
import Controls from './components/Controls';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentSlide = SLIDES[currentSlideIndex];

  // Calculate progress percentage
  const progress = ((currentSlideIndex + 1) / SLIDES.length) * 100;

  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden text-black selection:bg-black selection:text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
            className="h-full bg-black transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Slide Area */}
      <main className="w-full h-full flex flex-col relative">
        <SlideRenderer slide={currentSlide} />
      </main>

      {/* Navigation Controls */}
      <Controls
        current={currentSlideIndex}
        total={SLIDES.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* Background decoration (Minimalist) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] z-0 flex items-center justify-center">
         <h1 className="text-[20vw] font-bold">AI</h1>
      </div>
    </div>
  );
};

export default App;
