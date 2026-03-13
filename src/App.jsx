import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PackagesSection from './components/PackagesSection';
import GallerySection from './components/GallerySection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PackagesSection />
          <GallerySection />
          <WhyChooseUs />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;