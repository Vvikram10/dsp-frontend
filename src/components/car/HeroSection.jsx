import React, { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const handleRef = useRef(null);

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
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo('.hero-title',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    )
    .fromTo('.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.hero-label-left',
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo('.hero-label-right',
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.slider-handle',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' },
      '-=0.3'
    )
    .fromTo('.hero-scroll-hint',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.2'
    );
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundColor: '#000',
        overflow: 'hidden',
        userSelect: 'none',
        cursor: isDragging ? 'ew-resize' : 'default'
      }}
    >
      {/* ===== LEFT SIDE: ORIGINAL IMAGE ===== */}
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%'
      }}>
        <img
          src="/white-mirror.png"
          alt="Before Tint"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />
      </div>

      {/* ===== RIGHT SIDE: DARK TINTED IMAGE ===== */}
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
        transition: isDragging ? 'none' : 'clip-path 0.05s ease'
      }}>
        <img
          src="/black-mirror.png"
          alt="After Tint"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            // filter: 'brightness(0.35) saturate(0.6) contrast(1.1)'
          }}
        />
      </div>

      {/* ===== SIMPLE WHITE SLIDER LINE + HANDLE ===== */}
      <div
        ref={handleRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPos}%`,
          transform: 'translateX(-50%)',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}
      >
        {/* Simple White Vertical Line */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: 3,
          backgroundColor: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)'
        }} />

        {/* Minimal White Handle */}
        <div
          className="slider-handle"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
            pointerEvents: 'auto',
            cursor: 'ew-resize',
            zIndex: 31
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
        >
          <FaChevronLeft style={{ color: '#000', fontSize: 12 }} />
          <FaChevronRight style={{ color: '#000', fontSize: 12 }} />
        </div>
      </div>

      {/* ===== CENTER TEXT OVERLAY ===== */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}>
        <h1 className="hero-title" style={{
          fontFamily: 'Oswald, sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          color: '#fff',
          textAlign: 'center',
          letterSpacing: '0.1em',
          textShadow: '0 0 20px rgba(0,0,0,0.8)',
          lineHeight: 1
        }}>
          DSP <span style={{ color: '#fff' }}>TINTS</span>
        </h1>
        <p className="hero-subtitle" style={{
          marginTop: 16,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(0.6rem, 1.5vw, 0.9rem)',
          color: '#fff',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          textShadow: '0 0 15px rgba(0,0,0,0.8)'
        }}>
          Keep Cool. Stay Protected.
        </p>
      </div>

      {/* ===== SIDE LABELS ===== */}
      <div className="hero-label-left" style={{
        position: 'absolute',
        bottom: 100,
        left: 'clamp(16px, 5vw, 60px)',
        zIndex: 20,
        pointerEvents: 'none'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 12,
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            Before Tint
          </span>
        </div>
      </div>

      <div className="hero-label-right" style={{
        position: 'absolute',
        bottom: 100,
        right: 'clamp(16px, 5vw, 60px)',
        zIndex: 20,
        pointerEvents: 'none'
      }}>
        <div style={{
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 12,
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <span style={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            After Tint
          </span>
        </div>
      </div>

      {/* ===== SCROLL DOWN HINT ===== */}
      <div className="hero-scroll-hint" style={{
        position: 'absolute',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        pointerEvents: 'none'
      }}>
        <span style={{
          fontSize: 10,
          color: 'rgba(255,255,255,0.8)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif'
        }}>
          Scroll Down
        </span>
        <div style={{
          width: 20,
          height: 32,
          borderRadius: 10,
          border: '2px solid rgba(255,255,255,0.6)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 6
        }}>
          <div style={{
            width: 3,
            height: 8,
            borderRadius: 2,
            backgroundColor: '#fff',
            animation: 'scrollBounce 1.5s infinite'
          }} />
        </div>
        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(6px); opacity: 0.3; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;
