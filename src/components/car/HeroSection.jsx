import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = useCallback((e) => {
    if (isDragging) updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const onTouchMove = useCallback((e) => {
    if (isDragging) updatePosition(e.touches[0].clientX);
  }, [isDragging, updatePosition]);

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchend', onMouseUp);
    window.addEventListener('touchmove', onTouchMove);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [onMouseMove, onTouchMove]);

  useEffect(() => {
    gsap.fromTo('.hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      className="relative w-full h-[60vh] sm:h-[80vh] lg:h-screen bg-black overflow-hidden select-none"
    >

      {/* LEFT IMAGE */}
      <img
        src="/left-car.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Before"
      />

      {/* RIGHT IMAGE */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
        }}
      >
       <img
  src="/right-car.png"
  className="w-full h-full object-cover scale-x-[-1]"
  alt="After"
/>
      </div>

      {/* SLIDER */}
      <div
        style={{ left: `${sliderPos}%` }}
        className="absolute top-0 bottom-0 z-30 flex items-center justify-center -translate-x-1/2"
      >
        {/* Line */}
        <div className="absolute h-full w-[2px] bg-white/80" />

        {/* Handle */}
        <div
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center gap-1 shadow-lg cursor-ew-resize"
        >
          <FaChevronLeft className="text-black text-xs" />
          <FaChevronRight className="text-black text-xs" />
        </div>
      </div>

      {/* CENTER TEXT */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none px-4">
        <h1 className="hero-title text-white font-bold tracking-widest text-[2.5rem] sm:text-5xl lg:text-7xl">
          DSP TINTS
        </h1>
        <p className="hero-subtitle text-white/80 mt-3 text-xs sm:text-sm tracking-[0.3em] uppercase">
          Keep Cool • Stay Protected
        </p>
      </div>

      {/* LABEL LEFT */}
      <div className="absolute bottom-10 left-4 sm:left-10 z-20">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-white text-[10px] sm:text-xs uppercase tracking-wider">
          Before
        </div>
      </div>

      {/* LABEL RIGHT */}
      <div className="absolute bottom-10 right-4 sm:right-10 z-20">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-white text-[10px] sm:text-xs uppercase tracking-wider">
          After
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/70 text-[10px] tracking-widest">
        Scroll
      </div>

    </section>
  );
};

export default HeroSection;