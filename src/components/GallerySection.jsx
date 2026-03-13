import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80',
    title: 'Full Vehicle Wrap',
    category: 'Wrap',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80',
    title: 'Ceramic Coating',
    category: 'Coating',
  },
  {
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80',
    title: 'Window Tinting',
    category: 'Tint',
  },
  {
    src: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80',
    title: 'PPF Installation',
    category: 'PPF',
  },
  {
    src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80',
    title: 'Interior Detail',
    category: 'Detailing',
  },
  {
    src: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80',
    title: 'Paint Correction',
    category: 'Coating',
  },
  {
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
    title: 'Custom Kit Install',
    category: 'Custom',
  },
  {
    src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80',
    title: 'Color Change Wrap',
    category: 'Wrap',
  },
];

const categories = ['All', 'Tint', 'Wrap', 'Coating', 'PPF', 'Detailing', 'Custom'];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);

  const filteredImages =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-header > *',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-header',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.gallery-item',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power3.out',
      }
    );
  }, [activeFilter]);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 lg:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="gallery-header text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-[4px] uppercase">
            Our Work
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Project <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Browse through our portfolio of completed projects and transformations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'gradient-red text-white shadow-lg shadow-primary/30'
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              className="gallery-item group relative rounded-2xl overflow-hidden cursor-pointer aspect-square"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                <div className="p-5 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {img.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold mt-1">{img.title}</h3>
                </div>
              </div>
              {/* Top-right icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;