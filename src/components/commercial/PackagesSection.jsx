import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlus, FaMinus, FaCheck } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    category: 'Residential Tinting',
    description: 'Window tinting solutions for your home',
    items: [
      {
        name: 'Standard Home Tint',
        price: 'From $8/sq ft',
        features: ['Quality film', 'Heat reduction', 'UV protection', '5-year warranty'],
      },
      {
        name: 'Premium Home Tint',
        price: 'From $14/sq ft',
        features: ['Ceramic film', '80% heat reduction', '99% UV block', 'Lifetime warranty'],
        popular: true,
      },
    ],
  },
  {
    category: 'Commercial Tinting',
    description: 'Solutions for offices & businesses',
    items: [
      {
        name: 'Office Basic',
        price: 'From $6/sq ft',
        features: ['Glare reduction', 'Privacy', 'UV protection', '5-year warranty'],
      },
      {
        name: 'Office Premium',
        price: 'From $12/sq ft',
        features: ['Ceramic film', 'Max heat rejection', 'Anti-glare', '10-year warranty'],
        popular: true,
      },
    ],
  },
];

const PackagesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo('.packages-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.7,
          scrollTrigger: { trigger: '.packages-header', start: 'top 80%' }
        }
      );

      gsap.fromTo('.package-accordion',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.5,
          scrollTrigger: { trigger: '.packages-list', start: 'top 85%' }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="packages" ref={sectionRef} className="py-20 lg:py-28 bg-[#F5F5F5] relative">

      {/* LIGHT RED GLOW */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#E63946]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            <div className="packages-header mb-8">

              <span className="text-[#E63946] font-semibold text-xs tracking-[3px] uppercase">
                Pricing
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-[#111]">
                Our <span className="text-[#E63946]">Packages</span>
              </h2>

              <p className="text-gray-500 text-sm sm:text-base">
                Transparent pricing for homes and businesses. Choose the perfect solution for your space.
              </p>
            </div>

            {/* IMAGE (HIDDEN ON MOBILE) */}
            <div className="hidden lg:block rounded-2xl overflow-hidden h-[350px] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="packages-list space-y-4">

            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`package-accordion border rounded-xl transition-all ${
                  openIndex === i
                    ? 'border-[#E63946] bg-white shadow-md'
                    : 'border-gray-200 bg-white'
                }`}
              >

                {/* HEADER */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
                >
                  <div>
                    <h3 className="font-semibold text-[#111] text-base sm:text-lg">
                      {pkg.category}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      {pkg.description}
                    </p>
                  </div>

                  <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    openIndex === i
                      ? 'bg-[#E63946] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {openIndex === i ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </div>
                </button>

                {/* BODY */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  openIndex === i ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-4 sm:p-5 border-t border-gray-200 space-y-4">

                    {pkg.items.map((item, j) => (
                      <div
                        key={j}
                        className={`p-4 rounded-xl border ${
                          item.popular
                            ? 'border-[#E63946] bg-[#E63946]/5'
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-[#111] text-sm sm:text-base">
                            {item.name}
                          </h4>

                          {item.popular && (
                            <span className="text-[10px] bg-[#E63946] text-white px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>

                        <div className="text-[#E63946] font-bold text-lg mb-3">
                          {item.price}
                        </div>

                        <div className="space-y-2 mb-4">
                          {item.features.map((f, k) => (
                            <div key={k} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                              <FaCheck className="text-[#E63946]" />
                              {f}
                            </div>
                          ))}
                        </div>

                        <button className="w-full bg-[#E63946] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#C92F3A] transition">
                          Get Quote
                        </button>
                      </div>
                    ))}

                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default PackagesSection;