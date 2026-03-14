import React, { useState } from 'react';

// === CAR (Dark Theme) Components ===
import CarLoadingScreen from './components/car/LoadingScreen';
import CarNavbar from './components/car/Navbar';
import CarHero from './components/car/HeroSection';
import CarAbout from './components/car/AboutSection';
import CarServices from './components/car/ServicesSection';
import CarPackages from './components/car/PackagesSection';
import CarGallery from './components/car/GallerySection';
import CarWhyChoose from './components/car/WhyChooseUs';
import CarTestimonials from './components/car/TestimonialsSection';
import CarCTA from './components/car/CTASection';
import CarFooter from './components/car/Footer';

// === COMMERCIAL (White Theme) Components ===
import ComLoadingScreen from './components/commercial/LoadingScreen';
import ComNavbar from './components/commercial/Navbar';
import ComHero from './components/commercial/HeroSection';
import ComBenefits from './components/commercial/BenefitsBanner';
import ComAbout from './components/commercial/AboutSection';
import ComServices from './components/commercial/ServicesSection';
import ComPackages from './components/commercial/PackagesSection';
import ComGallery from './components/commercial/GallerySection';
import ComWhyChoose from './components/commercial/WhyChooseUs';
import ComTestimonials from './components/commercial/TestimonialsSection';
import ComCTA from './components/commercial/CTASection';
import ComFooter from './components/commercial/Footer';

function App() {
  const [mode, setMode] = useState('car'); // 'car' or 'commercial'
  const [loading, setLoading] = useState(true);

  // Jab mode switch ho, loading phir se dikhao (optional)
  const switchMode = (newMode) => {
    if (newMode === mode) return;
    setLoading(true);
    setMode(newMode);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={`min-h-screen ${
      mode === 'car' 
        ? 'bg-[#0a0a0a] text-white' 
        : 'bg-white text-slate-900'
    }`}>
      
      {/* ======= LOADING ======= */}
      {loading && (
        mode === 'car'
          ? <CarLoadingScreen onComplete={() => setLoading(false)} />
          : <ComLoadingScreen onComplete={() => setLoading(false)} />
      )}

      {/* ======= MAIN CONTENT ======= */}
      {!loading && (
        <>
          {mode === 'car' ? (
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
            <>
              <ComNavbar />
              <ComHero />
              <ComBenefits />
              <ComAbout />
              <ComServices />
              <ComPackages />
              <ComGallery />
              <ComWhyChoose />
              <ComTestimonials />
              <ComCTA />
              <ComFooter />
            </>
          )}

          {/* ======= BOTTOM SWITCH BUTTONS ======= */}
          <ModeSwitch mode={mode} onSwitch={switchMode} />
        </>
      )}
    </div>
  );
}

// ============================
// Bottom Floating Switch Buttons
// ============================
const ModeSwitch = ({ mode, onSwitch }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999]">
      <div className={`flex items-center gap-1 p-1.5 rounded-full shadow-2xl backdrop-blur-xl ${
        mode === 'car' 
          ? 'bg-white/10 border border-white/20' 
          : 'bg-slate-900/10 border border-slate-200'
      }`}>
        
        {/* Car Button */}
        <button
          onClick={() => onSwitch('car')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
            mode === 'car'
              ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/30 scale-105'
              : mode === 'commercial'
                ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          Car service
        </button>

        {/* Commercial Button */}
        <button
          onClick={() => onSwitch('commercial')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
            mode === 'commercial'
              ? 'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/30 scale-105'
              : mode === 'car'
                ? 'text-gray-400 hover:text-white hover:bg-white/10'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Commercial
        </button>
      </div>
    </div>
  );
};

export default App;