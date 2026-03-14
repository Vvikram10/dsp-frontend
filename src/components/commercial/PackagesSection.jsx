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
        features: [
          'Quality dyed film',
          'Heat reduction up to 45%',
          'UV protection',
          '5-year warranty',
          'Single room windows',
        ],
      },
      {
        name: 'Premium Home Tint',
        price: 'From $14/sq ft',
        features: [
          'Ceramic nano film',
          'Heat reduction up to 80%',
          '99% UV rejection',
          'Lifetime warranty',
          'Whole house coverage',
          'Energy savings guarantee',
        ],
        popular: true,
      },
    ],
  },
  {
    category: 'Commercial Tinting',
    description: 'Professional solutions for offices & businesses',
    items: [
      {
        name: 'Office Basic',
        price: 'From $6/sq ft',
        features: [
          'Glare reduction film',
          'Privacy enhancement',
          'UV protection',
          'Professional installation',
          '5-year warranty',
        ],
      },
      {
        name: 'Office Premium',
        price: 'From $12/sq ft',
        features: [
          'Ceramic commercial film',
          'Maximum heat rejection',
          '99% UV block',
          'Anti-glare for screens',
          'Energy efficiency boost',
          '10-year warranty',
        ],
        popular: true,
      },
    ],
  },
  {
    category: 'Safety & Security Films',
    description: 'Protection films for glass reinforcement',
    items: [
      {
        name: 'Safety Film',
        price: 'From $10/sq ft',
        features: [
          'Shatter-proof protection',
          'Holds broken glass together',
          'Storm & impact resistance',
          '7-year warranty',
        ],
      },
      {
        name: 'Security Plus',
        price: 'From $18/sq ft',
        features: [
          'Anti-intrusion grade film',
          'Maximum shatter protection',
          'Blast mitigation rated',
          'Combined UV + heat rejection',
          'Lifetime warranty',
        ],
        popular: true,
      },
    ],
  },
  {
    category: 'Decorative Films',
    description: 'Aesthetic solutions for interiors',
    items: [
      {
        name: 'Frosted Film',
        price: 'From $7/sq ft',
        features: [
          'Elegant frosted finish',
          'Privacy for partitions',
          'Custom cut patterns',
          'Conference rooms & bathrooms',
        ],
      },
      {
        name: 'Designer Film',
        price: 'From $15/sq ft',
        features: [
          'Custom branded designs',
          'Logo & pattern printing',
          'Premium aesthetic finish',
          'Perfect for storefronts',
          'UV protection included',
        ],
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
      gsap.fromTo('.packages-header > *', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.packages-header', start: 'top 80%' },
      });
      gsap.fromTo('.package-accordion', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.packages-list', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="packages" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side */}
          <div>
            <div className="packages-header mb-10">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
                <span className="text-red-600 font-semibold text-sm tracking-[3px] uppercase">
                  Pricing
                </span>
              </div>
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6 text-slate-900">
                Our <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Packages</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Transparent pricing for every property type. Choose the perfect tinting
                solution for your home, office, or commercial space.
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden h-[400px] hidden lg:block shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&auto=format&fit=crop"
                alt="Office Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/98 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <FaCheck size={24} />
                    </div>
                    <div>
                      <div className="text-slate-900 font-heading font-bold text-lg">Premium Quality Films</div>
                      <div className="text-slate-600 text-sm font-medium">Long-lasting • Low maintenance • Best brands</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Accordion */}
          <div className="packages-list space-y-4">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`package-accordion rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  openIndex === i 
                    ? 'border-red-500 shadow-lg bg-white' 
                    : 'border-slate-200 bg-white hover:border-red-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-900">{pkg.category}</h3>
                    <p className="text-slate-600 text-sm mt-1 font-medium">{pkg.description}</p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      openIndex === i
                        ? 'bg-gradient-to-br from-red-600 to-orange-600 text-white shadow-lg'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {openIndex === i ? <FaMinus size={18} /> : <FaPlus size={18} />}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === i ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 space-y-4 border-t border-slate-200">
                    {pkg.items.map((item, j) => (
                      <div
                        key={j}
                        className={`rounded-xl p-6 border-2 transition-all duration-300 ${
                          item.popular
                            ? 'border-red-500 bg-red-50/60 shadow-md'
                            : 'border-slate-200 bg-white'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-heading font-bold text-lg text-slate-900">{item.name}</h4>
                              {item.popular && (
                                <span className="text-[11px] bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 py-1 rounded-full font-bold shadow-md">
                                  ⭐ POPULAR
                                </span>
                              )}
                            </div>
                            <div className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-heading font-bold text-2xl">
                              {item.price}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3 mb-6">
                          {item.features.map((feature, k) => (
                            <div key={k} className="flex items-start gap-3 text-sm text-slate-700">
                              <FaCheck className="text-red-600 text-sm flex-shrink-0 mt-1 font-bold" />
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 rounded-lg text-sm font-bold text-white hover:shadow-lg hover:shadow-red-300 transition-all duration-300 hover:scale-105">
                          Get Quote Today
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