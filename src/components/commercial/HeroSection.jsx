// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { FaSun, FaShieldAlt, FaEye, FaLeaf } from 'react-icons/fa';

// const features = [
//   { icon: <FaSun />, text: 'Heat Protection' },
//   { icon: <FaShieldAlt />, text: 'UV Block 99%' },
//   { icon: <FaEye />, text: 'Privacy' },
//   { icon: <FaLeaf />, text: 'Energy Saving' },
// ];

// const HeroSection = () => {
//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 0.3 });

//     tl.fromTo('.hero-badge', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
//       .fromTo('.hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }, '-=0.3')
//       .fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
//       .fromTo('.hero-features .feat-item', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, '-=0.3')
//       .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: 'power3.out' }, '-=0.2')
//       .fromTo('.hero-scroll', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
//       .fromTo('.hero-stats .stat-item', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(2)' }, '-=0.4');
//   }, []);

//   return (
//     <section id="home" className="relative min-h-screen flex items-center overflow-hidden rounded-b-[40px] mb-2">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
//           alt="Modern Building"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 " />
//         <div className="absolute inset-0 " />
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
//         <div className="max-w-3xl">
//           {/* Badge */}
//           <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
//             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//             <span className="text-white/90 text-sm font-medium tracking-wider">
//               Residential & Commercial Solutions
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="hero-title font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-6">
//             DSP Window{' '}
//             <span className="relative">
//               <span className="text-[#588157]">Tinting</span>
//               <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
//                 <path d="M2 10C50 2 250 2 298 10" stroke="#588157" strokeWidth="3" strokeLinecap="round" />
//               </svg>
//             </span>{' '}
//             Solutions
//           </h1>

//           {/* Subtitle */}
//           <p className="hero-subtitle text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
//             Professional window tinting for homes, offices, retail stores, restaurants, and clinics.
//             Premium films that protect, save energy, and enhance privacy.
//           </p>

//           {/* Feature Pills */}
//           <div className="hero-features flex flex-wrap gap-3 mb-10">
//             {features.map((f, i) => (
//               <div
//                 key={i}
//                 className="feat-item flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2"
//               >
//                 <span className="text-red-400 text-sm">{f.icon}</span>
//                 <span className="text-white/90 text-sm font-medium">{f.text}</span>
//               </div>
//             ))}
//           </div>



//           {/* Stats */}
//           <div className="hero-stats flex flex-wrap gap-8">
//             {[
//               { num: '15+', label: 'Years Experience' },
//               { num: '10K+', label: 'Projects Done' },
//               { num: '99%', label: 'UV Protection' },
//             ].map((s, i) => (
//               <div key={i} className="stat-item text-center">
//                 <div className="font-heading text-3xl font-bold text-white">{s.num}</div>
//                 <div className="text-white/60 text-xs tracking-wider uppercase mt-1">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
//         <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase">Scroll Down</span>
//         <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex justify-center pt-1.5">
//           <div className="w-1 h-2 rounded-full bg-red-500 animate-bounce" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { FaSun, FaShieldAlt, FaEye, FaLeaf } from 'react-icons/fa';

const features = [
  { icon: <FaSun />, text: 'Heat Protection' },
  { icon: <FaShieldAlt />, text: 'UV Block 99%' },
  { icon: <FaEye />, text: 'Privacy' },
  { icon: <FaLeaf />, text: 'Energy Saving' },
];

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo('.hero-badge', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo('.hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.3')
      .fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
      .fromTo('.feat-item', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, '-=0.3')
      .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.6 }, '-=0.2')
      .fromTo('.stat-item', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5 }, '-=0.4');
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* LIGHT BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f5f5] to-white" />
      </div>

      {/* RED GLOW EFFECT */}
      <div className="absolute top-20 right-10 sm:right-20 w-64 sm:w-80 h-64 sm:h-80 bg-[#E63946]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-5 sm:left-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#E63946]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 w-full">
        
        <div className="max-w-3xl">

          {/* BADGE */}
          <div className="hero-badge inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
            <span className="text-[#555] text-xs sm:text-sm font-medium tracking-wide">
              Residential & Commercial Solutions
            </span>
          </div>

          {/* TITLE */}
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#111111] leading-tight mb-5 sm:mb-6">
            DSP Window{' '}
            <span className="relative text-[#E63946]">
              Tinting
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#E63946] rounded-full" />
            </span>{' '}
            Solutions
          </h1>

          {/* SUBTITLE */}
          <p className="hero-subtitle text-base sm:text-lg text-[#555] leading-relaxed mb-8 max-w-xl">
            Professional window tinting for homes, offices, retail stores, restaurants, and clinics.
            Premium films that protect, save energy, and enhance privacy.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-3 mb-10">
            {features.map((f, i) => (
              <div
                key={i}
                className="feat-item flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 sm:px-4 py-2 shadow-sm hover:shadow-md transition"
              >
                <span className="text-[#E63946] text-sm">{f.icon}</span>
                <span className="text-[#333] text-xs sm:text-sm font-medium">{f.text}</span>
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="hero-cta flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold text-white bg-[#E63946] hover:bg-[#C92F3A] transition shadow-md hover:shadow-lg"
            >
              Book Now
            </a>

            <a
              href="#gallery"
              className="px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold border border-gray-300 text-[#111] hover:border-[#E63946] hover:text-[#E63946] transition"
            >
              View Work
            </a>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-6 sm:gap-8">
            {[
              { num: '15+', label: 'Years Experience' },
              { num: '10K+', label: 'Projects Done' },
              { num: '99%', label: 'UV Protection' },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <div className="text-2xl sm:text-3xl font-bold text-[#111]">{s.num}</div>
                <div className="text-gray-500 text-[10px] sm:text-xs uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-gray-400 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[#E63946] animate-bounce" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;