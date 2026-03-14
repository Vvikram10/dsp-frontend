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

    let count = { val: 0 };
    tl.to(count, {
      val: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (countRef.current) countRef.current.textContent = Math.floor(count.val) + '%';
      },
    }, 0);

    tl.to(progressRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'power2.inOut',
    }, 0);

    tl.to(arrowRef.current, {
      left: '100%',
      duration: 2.5,
      ease: 'power2.inOut',
    }, 0);

    tl.fromTo('.loader-logo',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
      0
    );

    tl.fromTo('.loader-tagline',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      0.5
    );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <div className="loader-logo mb-4">
        <img
          src="https://pub-5c87d77e0678464ea969837b65768808.r2.dev/intopdigital_website/static-images/dsp-logo.png"
          alt="DSP Tints Logo"
          className="h-28 w-auto object-contain"
        />
      </div>

      <p className="loader-tagline text-slate-500 text-sm tracking-[0.3em] uppercase mb-10 font-medium">
        Window Tinting Solutions
      </p>

      <div className="w-64 sm:w-80 px-4">
        <div className="flex justify-between mb-4">
          <span className="text-slate-400 text-xs uppercase tracking-wider font-medium">Loading</span>
          <span ref={countRef} className="text-red-600 font-heading font-bold text-sm">0%</span>
        </div>

        <div className="relative h-1.5 bg-slate-100 rounded-full w-full">
          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-full rounded-full w-0"
            style={{ background: 'linear-gradient(90deg, #dc2626, #b91c1c)', boxShadow: '0 0 10px rgba(220,38,38,0.5)' }}
          />
          <div
            ref={arrowRef}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 text-red-600"
            style={{ filter: 'drop-shadow(0 0 6px rgba(220,38,38,0.6))' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;