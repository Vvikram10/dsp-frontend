// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import {
//   FaSun, FaShieldAlt, FaEyeSlash, FaDesktop, FaLeaf,
//   FaLock, FaPaintBrush, FaGlasses, FaBuilding, FaTools,
// } from 'react-icons/fa';

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     icon: <FaSun />,
//     title: 'Heat Reduction',
//     desc: 'Blocks excessive heat from sunlight, keeps interiors cooler and more comfortable. Reduces air conditioning costs significantly.',
//     color: 'from-orange-500 to-red-600',
//     bgLight: 'bg-orange-50',
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: 'UV Protection',
//     desc: 'Blocks up to 99% of harmful UV rays. Protects furniture, flooring, and electronics from fading and sun damage.',
//     color: 'from-blue-500 to-indigo-600',
//     bgLight: 'bg-blue-50',
//   },
//   {
//     icon: <FaEyeSlash />,
//     title: 'Privacy Enhancement',
//     desc: 'Adds privacy for homes and office spaces. Prevents outsiders from seeing inside during daytime while maintaining views.',
//     color: 'from-purple-500 to-violet-600',
//     bgLight: 'bg-purple-50',
//   },
//   {
//     icon: <FaDesktop />,
//     title: 'Glare Reduction',
//     desc: 'Reduces glare from sunlight on screens. Ideal for offices, meeting rooms, and home workspaces for better productivity.',
//     color: 'from-cyan-500 to-blue-600',
//     bgLight: 'bg-cyan-50',
//   },
//   {
//     icon: <FaLeaf />,
//     title: 'Energy Efficiency',
//     desc: 'Improves insulation of windows and helps reduce energy consumption. Lower utility bills while reducing your carbon footprint.',
//     color: 'from-green-500 to-emerald-600',
//     bgLight: 'bg-green-50',
//   },
//   {
//     icon: <FaLock />,
//     title: 'Safety & Security Films',
//     desc: 'Strengthens glass against breakage. Helps hold shattered glass together during accidents, storms, or break-in attempts.',
//     color: 'from-red-500 to-rose-700',
//     bgLight: 'bg-red-50',
//   },
//   {
//     icon: <FaPaintBrush />,
//     title: 'Decorative Window Films',
//     desc: 'Frosted or designer films for offices and homes. Perfect for conference rooms, bathrooms, partitions, and storefronts.',
//     color: 'from-pink-500 to-fuchsia-600',
//     bgLight: 'bg-pink-50',
//   },
//   {
//     icon: <FaGlasses />,
//     title: 'Daytime Privacy Films',
//     desc: 'One-way mirror effect allows you to see outside while blocking the outside view in. Privacy without sacrificing natural light.',
//     color: 'from-amber-500 to-orange-600',
//     bgLight: 'bg-amber-50',
//   },
//   {
//     icon: <FaBuilding />,
//     title: 'Commercial Installation',
//     desc: 'Professional installation for office buildings, retail stores, restaurants, and clinics. Custom solutions for every business need.',
//     color: 'from-slate-500 to-slate-700',
//     bgLight: 'bg-slate-50',
//   },
//   {
//     icon: <FaTools />,
//     title: 'Residential Installation',
//     desc: 'Expert home window tinting. Every room, every window — tailored to your comfort, aesthetics, and energy-saving goals.',
//     color: 'from-teal-500 to-emerald-700',
//     bgLight: 'bg-teal-50',
//   },
// ];

// const ServicesSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         '.service-header > *',
//         { y: 60, opacity: 0 },
//         {
//           y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
//           scrollTrigger: { trigger: '.service-header', start: 'top 80%' },
//         }
//       );
//       gsap.fromTo(
//         '.service-card',
//         { y: 60, opacity: 0, scale: 0.95 },
//         {
//           y: 0, opacity: 1, scale: 1, stagger: 0.07, duration: 0.6, ease: 'power3.out',
//           scrollTrigger: { trigger: '.services-grid', start: 'top 85%' },
//         }
//       );
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
//       {/* Decorative */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-40" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header */}
//         <div className="service-header text-center mb-16">
//           <span className="text-primary font-semibold text-sm tracking-[4px] uppercase">
//             What We Offer
//           </span>
//           <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-slate-900">
//             Our <span className="text-primary">Services</span>
//           </h2>
//           <p className="text-slate-500 text-lg max-w-2xl mx-auto">
//             Comprehensive window tinting solutions designed to protect your space,
//             enhance comfort, and reduce energy costs for homes and businesses.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {services.map((service, i) => (
//             <div
//               key={i}
//               className={`service-card group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-2 cursor-default`}
//             >
//               {/* Icon */}
//               <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
//                 {service.icon}
//               </div>

//               {/* Content */}
//               <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
//                 {service.title}
//               </h3>
//               <p className="text-slate-500 text-sm leading-relaxed">
//                 {service.desc}
//               </p>

//               {/* Hover Arrow */}
//               <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
//                 Learn More
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </div>

//               {/* Corner Accent */}
//               <div className={`absolute top-0 right-0 w-20 h-20 ${service.bgLight} rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaSun, FaShieldAlt, FaEyeSlash, FaDesktop, FaLeaf,
  FaLock, FaPaintBrush, FaGlasses, FaBuilding, FaTools,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: <FaSun />, title: 'Heat Reduction', desc: 'Blocks excessive heat and keeps interiors cooler while reducing AC costs.' },
  { icon: <FaShieldAlt />, title: 'UV Protection', desc: 'Blocks up to 99% UV rays, protecting interiors from fading and damage.' },
  { icon: <FaEyeSlash />, title: 'Privacy Enhancement', desc: 'Enhances privacy without blocking natural light during the day.' },
  { icon: <FaDesktop />, title: 'Glare Reduction', desc: 'Reduces glare on screens, improving comfort and productivity.' },
  { icon: <FaLeaf />, title: 'Energy Efficiency', desc: 'Improves insulation and reduces energy bills significantly.' },
  { icon: <FaLock />, title: 'Safety Films', desc: 'Strengthens glass and prevents shattering during impacts.' },
  { icon: <FaPaintBrush />, title: 'Decorative Films', desc: 'Stylish frosted and designer films for modern interiors.' },
  { icon: <FaGlasses />, title: 'Daytime Privacy', desc: 'One-way visibility while maintaining outside view.' },
  { icon: <FaBuilding />, title: 'Commercial Installation', desc: 'Professional solutions for offices, retail, and businesses.' },
  { icon: <FaTools />, title: 'Residential Installation', desc: 'Custom home window tinting for comfort and privacy.' },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.service-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.7,
          scrollTrigger: { trigger: '.service-header', start: 'top 80%' }
        }
      );

      gsap.fromTo('.service-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.5,
          scrollTrigger: { trigger: '.services-grid', start: 'top 85%' }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-28 bg-white relative">

      {/* SUBTLE RED GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E63946]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* HEADER */}
        <div className="service-header text-center mb-14 sm:mb-16">
          <span className="text-[#E63946] font-semibold text-xs tracking-[3px] uppercase">
            What We Offer
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-5 text-[#111111]">
            Our <span className="text-[#E63946]">Services</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Premium window tinting solutions designed to improve comfort, privacy,
            and energy efficiency for homes and businesses.
          </p>
        </div>

        {/* GRID */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">

          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group bg-white p-5 sm:p-6 border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* ICON */}
              <div className="w-12 h-12 rounded-xl bg-[#E63946]/10 flex items-center justify-center text-[#E63946] text-xl mb-4 group-hover:bg-[#E63946] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#111111] mb-2 group-hover:text-[#E63946] transition">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* HOVER LINE */}
              <div className="mt-4 w-0 h-[2px] bg-[#E63946] group-hover:w-full transition-all duration-300" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;