import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const arrowRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete,
        });
      },
    });

    // Counter animation
    let count = { val: 0 };
    tl.to(
      count,
      {
        val: 100,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.floor(count.val) + '%';
          }
        },
      },
      0
    );

    // Progress bar fill animation
    tl.to(
      progressRef.current,
      {
        width: '100%',
        duration: 2.5,
        ease: 'power2.inOut',
      },
      0
    );

    // Arrow moving animation
    tl.to(
      arrowRef.current,
      {
        left: '100%',
        duration: 2.5,
        ease: 'power2.inOut',
      },
      0
    );

    // Logo animation
    tl.fromTo(
      '.loader-logo',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out' },
      0
    );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <div className="loader-logo mb-12">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
            <span className="font-heading font-bold text-2xl text-white">DSP</span>
          </div>
          <div>
            <h1 className="font-heading text-4xl font-bold text-white">
              DSP<span className="text-red-500">-TINTS</span>
            </h1>
            <p className="text-gray-400 text-xs tracking-[4px] uppercase mt-1">Premium Auto Care</p>
          </div>
        </div>
      </div>

      {/* Progress Container */}
      <div className="w-64 sm:w-80 px-4">
        {/* Text */}
        <div className="flex justify-between mb-4">
          <span className="text-gray-400 text-xs uppercase tracking-wider font-medium">Loading</span>
          <span ref={countRef} className="text-red-500 font-heading font-bold text-sm">
            0%
          </span>
        </div>

        {/* Progress Line & Arrow */}
        <div className="relative h-1.5 bg-gray-800 rounded-full w-full">
          {/* The Filling Bar */}
          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-full bg-red-600 rounded-full w-0 shadow-[0_0_10px_rgba(220,38,38,0.8)]"
          />
          
          {/* The Moving Arrow Head */}
          <div
            ref={arrowRef}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;