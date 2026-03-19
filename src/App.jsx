
// import React, { useState, useEffect, lazy, Suspense } from "react";
// import Lenis from "@studio-freight/lenis";

// // === CAR (Dark Theme) Components ===
// import CarLoadingScreen from "./components/car/LoadingScreen";
// import CarNavbar from "./components/car/Navbar";
// import CarHero from "./components/car/HeroSection";
// import CarAbout from "./components/car/AboutSection";
// import CarServices from "./components/car/ServicesSection";
// import CarPackages from "./components/car/PackagesSection";
// import CarGallery from "./components/car/GallerySection";
// import CarWhyChoose from "./components/car/WhyChooseUs";
// import CarTestimonials from "./components/car/TestimonialsSection";
// import CarCTA from "./components/car/CTASection";
// import CarFooter from "./components/car/Footer";

// // === COMMERCIAL (White Theme) Components ===
// import ComLoadingScreen from "./components/commercial/LoadingScreen";
// import ComNavbar from "./components/commercial/Navbar";
// import ComHero from "./components/commercial/HeroSection";
// import ComAbout from "./components/commercial/AboutSection";
// import ComServices from "./components/commercial/ServicesSection";
// import ComPackages from "./components/commercial/PackagesSection";
// import ComGallery from "./components/commercial/GallerySection";
// import ComWhyChoose from "./components/commercial/WhyChooseUs";
// import ComTestimonials from "./components/commercial/TestimonialsSection";
// import ComCTA from "./components/commercial/CTASection";
// import ComFooter from "./components/commercial/Footer";

// // === LAZY LOAD CONTACT PAGE ===
// const ContactPage = lazy(() => import("./pages/ContactPage"));

// function App() {
//   const [mode, setMode] = useState("car");
//   const [loading, setLoading] = useState(true);
//   const [showContact, setShowContact] = useState(false);

//   // ✅ Lenis Smooth Scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   const switchMode = (newMode) => {
//     if (newMode === mode) return;
//     setLoading(true);
//     setMode(newMode);
//     setShowContact(false);
//     window.scrollTo({ top: 0 });
//   };

//   return (
//     <div
//       className={`min-h-screen ${
//         mode === "car"
//           ? "bg-[#0a0a0a] text-white"
//           : "bg-white text-[#111111]"
//       }`}
//     >
//       {/* ===== LOADING ===== */}
//       {loading &&
//         (mode === "car" ? (
//           <CarLoadingScreen onComplete={() => setLoading(false)} />
//         ) : (
//           <ComLoadingScreen onComplete={() => setLoading(false)} />
//         ))}

//       {/* ===== MAIN CONTENT ===== */}
//       {!loading && (
//         <>
//           {showContact ? (
//             <Suspense
//               fallback={
//                 <div className="flex items-center justify-center h-screen">
//                   Loading Contact...
//                 </div>
//               }
//             >
//               <ContactPage onBack={() => setShowContact(false)} />
//             </Suspense>
//           ) : mode === "car" ? (
//             <>
//               <CarNavbar onContactClick={() => setShowContact(true)} />
//               <CarHero />
//               <CarAbout />
//               <CarServices />
//               <CarPackages />
//               <CarGallery />
//               <CarWhyChoose />
//               <CarTestimonials />
//               <CarCTA />
//               <CarFooter />
//             </>
//           ) : (
//             <>
//               <div className="bg-white text-[#111111]">
//                 <ComNavbar onContactClick={() => setShowContact(true)} />

//                 <main className="overflow-hidden">
//                   <section className="bg-white relative">
//                     <ComHero />
//                     <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#F5F5F5]" />
//                   </section>

//                   <section className="bg-[#F5F5F5]">
//                     <ComAbout />
//                   </section>

//                   <section className="bg-white">
//                     <ComServices />
//                   </section>

//                   <section className="bg-[#F5F5F5]">
//                     <ComPackages />
//                   </section>

//                   <section className="bg-white">
//                     <ComGallery />
//                   </section>

//                   <section className="bg-[#F5F5F5]">
//                     <ComWhyChoose />
//                   </section>

//                   <section className="bg-white">
//                     <ComTestimonials />
//                   </section>

//                   <section className="bg-[#F5F5F5]">
//                     <ComCTA />
//                   </section>
//                 </main>

//                 <ComFooter />
//               </div>
//             </>
//           )}

//           <ModeSwitch mode={mode} onSwitch={switchMode} />
//         </>
//       )}
//     </div>
//   );
// }

// // ===== MODE SWITCH =====
// const ModeSwitch = ({ mode, onSwitch }) => {
//   return (
//     <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[999]">
//       <div
//         className={`flex items-center gap-1 p-[4px] rounded-full backdrop-blur-xl shadow-lg
//         ${
//           mode === "car"
//             ? "bg-white/10 border border-white/20"
//             : "bg-white border border-gray-200"
//         }`}
//       >
//         <button
//           onClick={() => onSwitch("car")}
//           className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
//           ${
//             mode === "car"
//               ? "bg-gradient-to-r from-red-600 to-red-800 text-white"
//               : "text-gray-400 hover:text-white"
//           }`}
//         >
//           Cars
//         </button>

//         <button
//           onClick={() => onSwitch("commercial")}
//           className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
//           ${
//             mode === "commercial"
//               ? "bg-[#E63946] text-white"
//               : "text-gray-500 hover:text-black"
//           }`}
//         >
//           Commercial
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect, lazy, Suspense } from "react";
import Lenis from "@studio-freight/lenis";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import CarNavbar from "./components/car/Navbar";
import CarHero from "./components/car/HeroSection";
import CarAbout from "./components/car/AboutSection";
import CarServices from "./components/car/ServicesSection";
import CarPackages from "./components/car/PackagesSection";
import CarGallery from "./components/car/GallerySection";
import CarWhyChoose from "./components/car/WhyChooseUs";
import CarTestimonials from "./components/car/TestimonialsSection";
import CarCTA from "./components/car/CTASection";
import CarFooter from "./components/car/Footer";

import ComNavbar from "./components/commercial/Navbar";
import ComHero from "./components/commercial/HeroSection";
import ComAbout from "./components/commercial/AboutSection";
import ComServices from "./components/commercial/ServicesSection";
import ComPackages from "./components/commercial/PackagesSection";
import ComGallery from "./components/commercial/GallerySection";
import ComWhyChoose from "./components/commercial/WhyChooseUs";
import ComTestimonials from "./components/commercial/TestimonialsSection";
import ComCTA from "./components/commercial/CTASection";
import ComFooter from "./components/commercial/Footer";

const ContactPage = lazy(() => import("./pages/ContactPage"));

/* == Contact Wrapper — mode URL state se aayega == */
const ContactWrapper = () => {
  const location = useLocation();
  const mode = location.state?.mode || "car";
  return <ContactPage mode={mode} />;
};

/* ================= HOME ================= */
const Home = () => {
  const [mode, setMode] = useState("car");
  const isCar = mode === "car";

  return (
    <div className={`min-h-screen ${isCar ? "bg-[#0a0a0a] text-white" : "bg-white text-[#111]"}`}>
      {isCar ? (
        <>
          <CarNavbar />
          <CarHero />
          <CarAbout />
          <CarServices />
          <CarPackages />
          <CarGallery />
          <CarWhyChoose />
          <CarTestimonials />
          <CarCTA />
          <CarFooter />
        </>
      ) : (
        <div className="bg-white text-[#111]">
          <ComNavbar />
          <main className="overflow-hidden">
            <section className="bg-white relative">
              <ComHero />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#F5F5F5]" />
            </section>
            <section className="bg-[#F5F5F5]"><ComAbout /></section>
            <section className="bg-white"><ComServices /></section>
            <section className="bg-[#F5F5F5]"><ComPackages /></section>
            <section className="bg-white"><ComGallery /></section>
            <section className="bg-[#F5F5F5]"><ComWhyChoose /></section>
            <section className="bg-white"><ComTestimonials /></section>
            <section className="bg-[#F5F5F5]"><ComCTA /></section>
          </main>
          <ComFooter />
        </div>
      )}

      {/* MODE SWITCH */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className={`flex items-center gap-1 p-1 rounded-full shadow-lg backdrop-blur-xl
          ${isCar ? "bg-white/10 border border-white/20" : "bg-white border border-gray-200"}`}
        >
          <button
            onClick={() => setMode("car")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
              ${isCar ? "bg-gradient-to-r from-red-600 to-red-800 text-white" : "text-gray-500 hover:text-black"}`}
          >
            Cars
          </button>
          <button
            onClick={() => setMode("commercial")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
              ${!isCar ? "bg-[#E63946] text-white" : "text-gray-400 hover:text-white"}`}
          >
            Commercial
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= APP ================= */
function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactWrapper />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
