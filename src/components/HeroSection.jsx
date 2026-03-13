// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { gsap } from 'gsap';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const HeroSection = () => {
//   const [sliderPos, setSliderPos] = useState(50);
//   const [isDragging, setIsDragging] = useState(false);
//   const containerRef = useRef(null);
//   const handleRef = useRef(null);

//   // ===== DRAG LOGIC =====
//   const updatePosition = useCallback((clientX) => {
//     if (!containerRef.current) return;
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = clientX - rect.left;
//     const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
//     setSliderPos(percent);
//   }, []);

//   const onMouseDown = () => setIsDragging(true);
//   const onMouseUp = () => setIsDragging(false);
//   const onMouseMove = useCallback((e) => {
//     if (isDragging) updatePosition(e.clientX);
//   }, [isDragging, updatePosition]);

//   const onTouchMove = useCallback((e) => {
//     if (isDragging) updatePosition(e.touches[0].clientX);
//   }, [isDragging, updatePosition]);

//   useEffect(() => {
//     window.addEventListener('mouseup', onMouseUp);
//     window.addEventListener('mousemove', onMouseMove);
//     window.addEventListener('touchend', onMouseUp);
//     window.addEventListener('touchmove', onTouchMove);
//     return () => {
//       window.removeEventListener('mouseup', onMouseUp);
//       window.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('touchend', onMouseUp);
//       window.removeEventListener('touchmove', onTouchMove);
//     };
//   }, [onMouseMove, onTouchMove]);

//   // ===== GSAP ENTRY ANIMATION =====
//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 0.3 });
    
//     tl.fromTo('.hero-title', 
//       { y: 60, opacity: 0 }, 
//       { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
//     )
//     .fromTo('.hero-subtitle',
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
//       '-=0.5'
//     )
//     .fromTo('.hero-label-left',
//       { x: -30, opacity: 0 },
//       { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
//       '-=0.3'
//     )
//     .fromTo('.hero-label-right',
//       { x: 30, opacity: 0 },
//       { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
//       '-=0.5'
//     )
//     .fromTo('.slider-handle',
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' },
//       '-=0.3'
//     )
//     .fromTo('.hero-scroll-hint',
//       { y: 20, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5 },
//       '-=0.2'
//     );

//     // Handle pulse animation
//     gsap.to('.handle-glow', {
//       boxShadow: '0 0 30px rgba(229,9,20,0.6)',
//       repeat: -1,
//       yoyo: true,
//       duration: 1.5,
//       ease: 'sine.inOut'
//     });
//   }, []);

//   return (
//     <section 
//       id="home" 
//       ref={containerRef}
//       onMouseDown={onMouseDown}
//       onTouchStart={onMouseDown}
//       style={{
//         position: 'relative',
//         height: '100vh',
//         width: '100%',
//         backgroundColor: '#000',
//         overflow: 'hidden',
//         userSelect: 'none',
//         cursor: isDragging ? 'ew-resize' : 'default'
//       }}
//     >
//       {/* ===== LEFT SIDE: LIGHT / UNTINTED CAR ===== */}
//       <div style={{
//         position: 'absolute',
//         inset: 0,
//         width: '100%',
//         height: '100%'
//       }}>
//         {/* Car side-view image - Light version */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
//         }} />
        
//         {/* SVG Car Illustration - Light Window */}
//         <svg viewBox="0 0 1920 1080" style={{
//           position: 'absolute',
//           inset: 0,
//           width: '100%',
//           height: '100%'
//         }} preserveAspectRatio="xMidYMid slice">
//           {/* Car Body */}
//           <defs>
//             <linearGradient id="carBodyLight" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#4a4a4a" />
//               <stop offset="100%" stopColor="#2a2a2a" />
//             </linearGradient>
//             <linearGradient id="lightWindow" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#e8e8e8" />
//               <stop offset="30%" stopColor="#c0c0c0" />
//               <stop offset="100%" stopColor="#a0a0a0" />
//             </linearGradient>
//             <linearGradient id="groundReflection" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
//               <stop offset="100%" stopColor="rgba(0,0,0,0)" />
//             </linearGradient>
//           </defs>

//           {/* Background gradient */}
//           <rect x="0" y="0" width="1920" height="540" fill="#1a1a2e" />
//           <rect x="0" y="540" width="1920" height="540" fill="#0d0d1a" />
          
//           {/* Ground line */}
//           <line x1="0" y1="720" x2="1920" y2="720" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          
//           {/* Car Body - Main shape */}
//           <path d="M380,680 L400,580 L480,500 L580,440 L700,400 L780,380 L860,370 L960,365 L1060,370 L1140,380 L1220,400 L1340,440 L1440,500 L1520,580 L1540,680" 
//             fill="url(#carBodyLight)" stroke="#333" strokeWidth="2" />
          
//           {/* Car Roof */}
//           <path d="M580,440 L620,360 L700,310 L860,280 L1060,280 L1220,310 L1300,360 L1340,440" 
//             fill="#3a3a3a" stroke="#444" strokeWidth="1.5" />
          
//           {/* Window Frame */}
//           <path d="M620,430 L650,365 L720,320 L860,295 L1060,295 L1200,320 L1270,365 L1300,430" 
//             fill="#222" stroke="#555" strokeWidth="1" />
          
//           {/* LEFT WINDOW - LIGHT (No tint) */}
//           <path d="M640,425 L665,370 L730,328 L860,305 L950,302 L950,425 Z" 
//             fill="url(#lightWindow)" opacity="0.9" />
          
//           {/* Light reflection on window */}
//           <path d="M680,400 L700,370 L760,340 L850,320 L880,320 L880,400 Z" 
//             fill="rgba(255,255,255,0.4)" />
          
//           {/* Bright light coming through window */}
//           <ellipse cx="800" cy="370" rx="80" ry="40" fill="rgba(255,255,255,0.25)" />
          
//           {/* RIGHT WINDOW - LIGHT (No tint) */}
//           <path d="M970,302 L970,425 L1280,425 L1255,370 L1190,328 L1060,305 Z" 
//             fill="url(#lightWindow)" opacity="0.9" />
          
//           {/* Light reflection on right window */}
//           <path d="M1000,380 L1050,340 L1150,330 L1200,360 L1200,400 L1000,400 Z" 
//             fill="rgba(255,255,255,0.3)" />
          
//           {/* Door handle */}
//           <rect x="940" y="550" width="60" height="8" rx="4" fill="#555" />
          
//           {/* Door line */}
//           <line x1="960" y1="440" x2="960" y2="680" stroke="#333" strokeWidth="1.5" />
          
//           {/* Side mirror */}
//           <ellipse cx="590" cy="450" rx="30" ry="20" fill="#3a3a3a" stroke="#444" strokeWidth="1" />
          
//           {/* Front wheel */}
//           <circle cx="520" cy="680" r="80" fill="#111" stroke="#333" strokeWidth="3" />
//           <circle cx="520" cy="680" r="60" fill="#1a1a1a" stroke="#444" strokeWidth="2" />
//           <circle cx="520" cy="680" r="35" fill="#222" stroke="#555" strokeWidth="1" />
//           <circle cx="520" cy="680" r="15" fill="#333" />
//           {/* Wheel spokes */}
//           <line x1="520" y1="625" x2="520" y2="645" stroke="#444" strokeWidth="3" />
//           <line x1="520" y1="715" x2="520" y2="735" stroke="#444" strokeWidth="3" />
//           <line x1="465" y1="680" x2="485" y2="680" stroke="#444" strokeWidth="3" />
//           <line x1="555" y1="680" x2="575" y2="680" stroke="#444" strokeWidth="3" />
//           <line x1="481" y1="641" x2="495" y2="655" stroke="#444" strokeWidth="3" />
//           <line x1="545" y1="705" x2="559" y2="719" stroke="#444" strokeWidth="3" />
//           <line x1="481" y1="719" x2="495" y2="705" stroke="#444" strokeWidth="3" />
//           <line x1="545" y1="655" x2="559" y2="641" stroke="#444" strokeWidth="3" />
          
//           {/* Rear wheel */}
//           <circle cx="1400" cy="680" r="80" fill="#111" stroke="#333" strokeWidth="3" />
//           <circle cx="1400" cy="680" r="60" fill="#1a1a1a" stroke="#444" strokeWidth="2" />
//           <circle cx="1400" cy="680" r="35" fill="#222" stroke="#555" strokeWidth="1" />
//           <circle cx="1400" cy="680" r="15" fill="#333" />
//           <line x1="1400" y1="625" x2="1400" y2="645" stroke="#444" strokeWidth="3" />
//           <line x1="1400" y1="715" x2="1400" y2="735" stroke="#444" strokeWidth="3" />
//           <line x1="1345" y1="680" x2="1365" y2="680" stroke="#444" strokeWidth="3" />
//           <line x1="1435" y1="680" x2="1455" y2="680" stroke="#444" strokeWidth="3" />
//           <line x1="1361" y1="641" x2="1375" y2="655" stroke="#444" strokeWidth="3" />
//           <line x1="1425" y1="705" x2="1439" y2="719" stroke="#444" strokeWidth="3" />
//           <line x1="1361" y1="719" x2="1375" y2="705" stroke="#444" strokeWidth="3" />
//           <line x1="1425" y1="655" x2="1439" y2="641" stroke="#444" strokeWidth="3" />
          
//           {/* Headlight */}
//           <path d="M395,600 L380,620 L380,660 L400,670 L420,650 L420,590 Z" fill="#e8e8e8" opacity="0.8" />
//           <path d="M395,610 L385,625 L385,650 L400,658 L412,645 L412,600 Z" fill="#ffffcc" opacity="0.6" />
          
//           {/* Taillight */}
//           <path d="M1525,600 L1540,620 L1540,660 L1520,670 L1500,650 L1500,590 Z" fill="#ff3333" opacity="0.7" />
          
//           {/* Ground shadow */}
//           <ellipse cx="960" cy="770" rx="550" ry="30" fill="rgba(0,0,0,0.4)" />
          
//           {/* Ground reflection */}
//           <rect x="0" y="720" width="1920" height="360" fill="url(#groundReflection)" />
//         </svg>
        
//         {/* Left side gradient overlay */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(135deg, rgba(20,20,40,0.3) 0%, transparent 60%)'
//         }} />
//       </div>

//       {/* ===== RIGHT SIDE: DARK TINTED CAR ===== */}
//       <div style={{
//         position: 'absolute',
//         inset: 0,
//         width: '100%',
//         height: '100%',
//         clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
//         transition: isDragging ? 'none' : 'clip-path 0.1s ease'
//       }}>
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(135deg, #0a0a14 0%, #050510 50%, #000005 100%)'
//         }} />
        
//         {/* SVG Car - Dark Tinted Version */}
//         <svg viewBox="0 0 1920 1080" style={{
//           position: 'absolute',
//           inset: 0,
//           width: '100%',
//           height: '100%'
//         }} preserveAspectRatio="xMidYMid slice">
//           <defs>
//             <linearGradient id="carBodyDark" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#3a3a3a" />
//               <stop offset="100%" stopColor="#1a1a1a" />
//             </linearGradient>
//             <linearGradient id="darkWindow" x1="0%" y1="0%" x2="0%" y2="100%">
//               <stop offset="0%" stopColor="#1a2a2a" />
//               <stop offset="50%" stopColor="#0a1515" />
//               <stop offset="100%" stopColor="#050d0d" />
//             </linearGradient>
//           </defs>

//           <rect x="0" y="0" width="1920" height="540" fill="#0a0a14" />
//           <rect x="0" y="540" width="1920" height="540" fill="#050508" />
          
//           <line x1="0" y1="720" x2="1920" y2="720" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          
//           {/* Car Body */}
//           <path d="M380,680 L400,580 L480,500 L580,440 L700,400 L780,380 L860,370 L960,365 L1060,370 L1140,380 L1220,400 L1340,440 L1440,500 L1520,580 L1540,680" 
//             fill="url(#carBodyDark)" stroke="#222" strokeWidth="2" />
          
//           <path d="M580,440 L620,360 L700,310 L860,280 L1060,280 L1220,310 L1300,360 L1340,440" 
//             fill="#2a2a2a" stroke="#333" strokeWidth="1.5" />
          
//           <path d="M620,430 L650,365 L720,320 L860,295 L1060,295 L1200,320 L1270,365 L1300,430" 
//             fill="#111" stroke="#333" strokeWidth="1" />
          
//           {/* LEFT WINDOW - DARK TINTED */}
//           <path d="M640,425 L665,370 L730,328 L860,305 L950,302 L950,425 Z" 
//             fill="url(#darkWindow)" opacity="0.95" />
          
//           {/* Subtle tint reflection */}
//           <path d="M700,400 L720,375 L800,350 L860,340 L870,340 L870,400 Z" 
//             fill="rgba(50,80,80,0.3)" />
          
//           {/* RIGHT WINDOW - DARK TINTED */}
//           <path d="M970,302 L970,425 L1280,425 L1255,370 L1190,328 L1060,305 Z" 
//             fill="url(#darkWindow)" opacity="0.95" />
          
//           <path d="M1000,380 L1050,355 L1150,345 L1200,365 L1200,400 L1000,400 Z" 
//             fill="rgba(50,80,80,0.2)" />
          
//           <rect x="940" y="550" width="60" height="8" rx="4" fill="#444" />
//           <line x1="960" y1="440" x2="960" y2="680" stroke="#222" strokeWidth="1.5" />
//           <ellipse cx="590" cy="450" rx="30" ry="20" fill="#2a2a2a" stroke="#333" strokeWidth="1" />
          
//           {/* Wheels - same */}
//           <circle cx="520" cy="680" r="80" fill="#0a0a0a" stroke="#222" strokeWidth="3" />
//           <circle cx="520" cy="680" r="60" fill="#111" stroke="#333" strokeWidth="2" />
//           <circle cx="520" cy="680" r="35" fill="#1a1a1a" stroke="#444" strokeWidth="1" />
//           <circle cx="520" cy="680" r="15" fill="#222" />
//           <line x1="520" y1="625" x2="520" y2="645" stroke="#333" strokeWidth="3" />
//           <line x1="520" y1="715" x2="520" y2="735" stroke="#333" strokeWidth="3" />
//           <line x1="465" y1="680" x2="485" y2="680" stroke="#333" strokeWidth="3" />
//           <line x1="555" y1="680" x2="575" y2="680" stroke="#333" strokeWidth="3" />
          
//           <circle cx="1400" cy="680" r="80" fill="#0a0a0a" stroke="#222" strokeWidth="3" />
//           <circle cx="1400" cy="680" r="60" fill="#111" stroke="#333" strokeWidth="2" />
//           <circle cx="1400" cy="680" r="35" fill="#1a1a1a" stroke="#444" strokeWidth="1" />
//           <circle cx="1400" cy="680" r="15" fill="#222" />
//           <line x1="1400" y1="625" x2="1400" y2="645" stroke="#333" strokeWidth="3" />
//           <line x1="1400" y1="715" x2="1400" y2="735" stroke="#333" strokeWidth="3" />
//           <line x1="1345" y1="680" x2="1365" y2="680" stroke="#333" strokeWidth="3" />
//           <line x1="1435" y1="680" x2="1455" y2="680" stroke="#333" strokeWidth="3" />
          
//           <path d="M395,600 L380,620 L380,660 L400,670 L420,650 L420,590 Z" fill="#cccccc" opacity="0.6" />
//           <path d="M1525,600 L1540,620 L1540,660 L1520,670 L1500,650 L1500,590 Z" fill="#cc0000" opacity="0.5" />
          
//           <ellipse cx="960" cy="770" rx="550" ry="30" fill="rgba(0,0,0,0.6)" />
//         </svg>
//       </div>

//       {/* ===== SLIDER LINE + HANDLE ===== */}
//       <div 
//         ref={handleRef}
//         style={{
//           position: 'absolute',
//           top: 0,
//           bottom: 0,
//           left: `${sliderPos}%`,
//           transform: 'translateX(-50%)',
//           zIndex: 30,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           pointerEvents: 'none'
//         }}
//       >
//         {/* Vertical Line */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           bottom: 0,
//           width: 2,
//           background: 'linear-gradient(to bottom, transparent 0%, rgba(229,9,20,0.8) 20%, rgba(229,9,20,0.8) 80%, transparent 100%)',
//           boxShadow: '0 0 15px rgba(229,9,20,0.5)'
//         }} />

//         {/* Handle Button */}
//         <div className="slider-handle handle-glow" style={{
//           width: 56,
//           height: 56,
//           borderRadius: '50%',
//           background: 'linear-gradient(135deg, #E50914, #b20710)',
//           border: '3px solid rgba(255,255,255,0.3)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           gap: 4,
//           boxShadow: '0 0 20px rgba(229,9,20,0.5)',
//           pointerEvents: 'auto',
//           cursor: 'ew-resize',
//           zIndex: 31
//         }}
//           onMouseDown={onMouseDown}
//           onTouchStart={onMouseDown}
//         >
//           <FaChevronLeft style={{ color: '#fff', fontSize: 14 }} />
//           <FaChevronRight style={{ color: '#fff', fontSize: 14 }} />
//         </div>
//       </div>

//       {/* ===== CENTER TEXT OVERLAY ===== */}
//       <div style={{
//         position: 'absolute',
//         inset: 0,
//         zIndex: 20,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         pointerEvents: 'none'
//       }}>
//         <h1 className="hero-title" style={{
//           fontFamily: 'Oswald, sans-serif',
//           fontWeight: 700,
//           fontSize: 'clamp(3rem, 10vw, 8rem)',
//           color: '#fff',
//           textAlign: 'center',
//           letterSpacing: '0.1em',
//           textShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.5)',
//           lineHeight: 1
//         }}>
//           DSP <span style={{ color: '#E50914' }}>TINTS</span>
//         </h1>
//         <p className="hero-subtitle" style={{
//           marginTop: 16,
//           fontFamily: 'Inter, sans-serif',
//           fontWeight: 600,
//           fontSize: 'clamp(0.6rem, 1.5vw, 0.9rem)',
//           color: 'rgba(255,255,255,0.7)',
//           letterSpacing: '0.4em',
//           textTransform: 'uppercase',
//           textShadow: '0 0 20px rgba(0,0,0,0.8)'
//         }}>
//           Keep Cool. Stay Protected.
//         </p>
//       </div>

//       {/* ===== SIDE LABELS ===== */}
//       {/* Before Label - Left */}
//       <div className="hero-label-left" style={{
//         position: 'absolute',
//         bottom: 100,
//         left: 'clamp(16px, 5vw, 60px)',
//         zIndex: 20,
//         pointerEvents: 'none'
//       }}>
//         <div style={{
//           background: 'rgba(255,255,255,0.1)',
//           backdropFilter: 'blur(10px)',
//           border: '1px solid rgba(255,255,255,0.15)',
//           borderRadius: 12,
//           padding: '12px 20px',
//           display: 'flex',
//           alignItems: 'center',
//           gap: 10
//         }}>
//           <div style={{
//             width: 10, height: 10, borderRadius: '50%',
//             backgroundColor: '#fff',
//             boxShadow: '0 0 10px rgba(255,255,255,0.5)'
//           }} />
//           <span style={{
//             fontFamily: 'Oswald, sans-serif',
//             fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
//             fontWeight: 600,
//             color: '#fff',
//             letterSpacing: '0.15em',
//             textTransform: 'uppercase'
//           }}>
//             Before Tint
//           </span>
//         </div>
//       </div>

//       {/* After Label - Right */}
//       <div className="hero-label-right" style={{
//         position: 'absolute',
//         bottom: 100,
//         right: 'clamp(16px, 5vw, 60px)',
//         zIndex: 20,
//         pointerEvents: 'none'
//       }}>
//         <div style={{
//           background: 'rgba(229,9,20,0.2)',
//           backdropFilter: 'blur(10px)',
//           border: '1px solid rgba(229,9,20,0.3)',
//           borderRadius: 12,
//           padding: '12px 20px',
//           display: 'flex',
//           alignItems: 'center',
//           gap: 10
//         }}>
//           <div style={{
//             width: 10, height: 10, borderRadius: '50%',
//             backgroundColor: '#E50914',
//             boxShadow: '0 0 10px rgba(229,9,20,0.5)'
//           }} />
//           <span style={{
//             fontFamily: 'Oswald, sans-serif',
//             fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
//             fontWeight: 600,
//             color: '#fff',
//             letterSpacing: '0.15em',
//             textTransform: 'uppercase'
//           }}>
//             After Tint
//           </span>
//         </div>
//       </div>

//       {/* ===== SCROLL DOWN HINT ===== */}
//       <div className="hero-scroll-hint" style={{
//         position: 'absolute',
//         bottom: 30,
//         left: '50%',
//         transform: 'translateX(-50%)',
//         zIndex: 20,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: 8,
//         pointerEvents: 'none'
//       }}>
//         <span style={{
//           fontSize: 10,
//           color: 'rgba(255,255,255,0.4)',
//           letterSpacing: '0.2em',
//           textTransform: 'uppercase',
//           fontFamily: 'Inter, sans-serif'
//         }}>
//           Scroll Down
//         </span>
//         <div style={{
//           width: 20,
//           height: 32,
//           borderRadius: 10,
//           border: '2px solid rgba(255,255,255,0.3)',
//           display: 'flex',
//           justifyContent: 'center',
//           paddingTop: 6
//         }}>
//           <div style={{
//             width: 3,
//             height: 8,
//             borderRadius: 2,
//             backgroundColor: '#E50914',
//             animation: 'scrollBounce 1.5s infinite'
//           }} />
//         </div>
//         <style>{`
//           @keyframes scrollBounce {
//             0%, 100% { transform: translateY(0); opacity: 1; }
//             50% { transform: translateY(6px); opacity: 0.3; }
//           }
//         `}</style>
//       </div>

//       {/* ===== TOP GRADIENT FOR NAVBAR BLEND ===== */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 120,
//         background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)',
//         zIndex: 5,
//         pointerEvents: 'none'
//       }} />
//     </section>
//   );
// };

// export default HeroSection;

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

    gsap.to('.handle-glow', {
      boxShadow: '0 0 30px rgba(229,9,20,0.6)',
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'sine.inOut'
    });
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
      {/* ===== LEFT SIDE: ORIGINAL IMAGE (No Tint) ===== */}
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%'
      }}>
        <img
          src="/gen-images.png"
          alt="Before Tint"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />
        {/* Subtle light overlay to indicate "before" */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255,255,255,0.08)'
        }} />
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
          src="/gen-images.png"
          alt="After Tint"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            /* Dark window tint effect */
            filter: 'brightness(0.35) saturate(0.6) contrast(1.1)'
          }}
        />
        {/* Blue-black tint color overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(5, 10, 20, 0.55)',
          mixBlendMode: 'multiply'
        }} />
        {/* Subtle blue sheen like real window tint */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(20, 40, 80, 0.25)',
          mixBlendMode: 'screen'
        }} />
      </div>

      {/* ===== SLIDER LINE + HANDLE ===== */}
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
        {/* Vertical Line */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: 2,
          background: 'linear-gradient(to bottom, transparent 0%, rgba(229,9,20,0.9) 20%, rgba(229,9,20,0.9) 80%, transparent 100%)',
          boxShadow: '0 0 15px rgba(229,9,20,0.5)'
        }} />

        {/* Handle Button */}
        <div
          className="slider-handle handle-glow"
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #E50914, #b20710)',
            border: '3px solid rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            boxShadow: '0 0 20px rgba(229,9,20,0.5)',
            pointerEvents: 'auto',
            cursor: 'ew-resize',
            zIndex: 31
          }}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
        >
          <FaChevronLeft style={{ color: '#fff', fontSize: 14 }} />
          <FaChevronRight style={{ color: '#fff', fontSize: 14 }} />
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
          textShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.5)',
          lineHeight: 1
        }}>
          DSP <span style={{ color: '#E50914' }}>TINTS</span>
        </h1>
        <p className="hero-subtitle" style={{
          marginTop: 16,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(0.6rem, 1.5vw, 0.9rem)',
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          textShadow: '0 0 20px rgba(0,0,0,0.8)'
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
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 12,
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <div style={{
            width: 10, height: 10, borderRadius: '50%',
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(255,255,255,0.5)'
          }} />
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
          background: 'rgba(229,9,20,0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(229,9,20,0.3)',
          borderRadius: 12,
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <div style={{
            width: 10, height: 10, borderRadius: '50%',
            backgroundColor: '#E50914',
            boxShadow: '0 0 10px rgba(229,9,20,0.5)'
          }} />
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
          color: 'rgba(255,255,255,0.4)',
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
          border: '2px solid rgba(255,255,255,0.3)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 6
        }}>
          <div style={{
            width: 3,
            height: 8,
            borderRadius: 2,
            backgroundColor: '#E50914',
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

      {/* ===== TOP GRADIENT FOR NAVBAR BLEND ===== */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 120,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)',
        zIndex: 5,
        pointerEvents: 'none'
      }} />
    </section>
  );
};

export default HeroSection;