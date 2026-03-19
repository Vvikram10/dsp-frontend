import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: 'Office Building Tint',
    category: 'Commercial',
    benefit: 'Heat & Glare Reduction',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    title: 'Corporate HQ',
    category: 'Commercial',
    benefit: 'Privacy',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Home Tint',
    category: 'Residential',
    benefit: 'UV Protection',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Privacy Film',
    category: 'Residential',
    benefit: 'Daytime Privacy',
  },
];

const categories = ['All', 'Residential', 'Commercial'];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);

  const filteredImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.7,
          scrollTrigger: { trigger: '.gallery-header', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo('.gallery-item',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }
    );
  }, [activeFilter]);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 lg:py-28 bg-white relative">

      {/* RED GLOW */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#E63946]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="gallery-header text-center mb-12 sm:mb-16">

          <span className="text-[#E63946] text-xs font-semibold tracking-[3px] uppercase">
            Portfolio
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mt-4 mb-4">
            Project <span className="text-[#E63946]">Gallery</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our recent tinting projects for homes and businesses.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all
                ${
                  activeFilter === cat
                    ? 'bg-[#E63946] text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#E63946] hover:text-[#E63946]'
                }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">

          {filteredImages.map((img, i) => (
            <div
              key={i}
              className="gallery-item group relative rounded-xl overflow-hidden aspect-square border border-gray-200"
            >

              {/* IMAGE */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">

                <span className="text-[#E63946] text-[10px] uppercase font-semibold">
                  {img.category}
                </span>

                <h3 className="text-white text-sm font-semibold mt-1">
                  {img.title}
                </h3>

                <p className="text-gray-200 text-xs mt-1">
                  {img.benefit}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default GallerySection;