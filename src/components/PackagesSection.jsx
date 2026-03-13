import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlus, FaMinus, FaCheck } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    category: 'Window Tinting',
    items: [
      {
        name: 'Standard Tint',
        price: 'From \$150',
        features: ['2-door or 4-door vehicles', 'Quality dyed film', '5-year warranty', 'UV protection'],
      },
      {
        name: 'Ceramic Tint',
        price: 'From \$300',
        features: ['All windows', 'Premium ceramic film', 'Lifetime warranty', '99% UV rejection', 'Heat reduction'],
        popular: true,
      },
    ],
  },
  {
    category: 'Ceramic Coating',
    items: [
      {
        name: 'Essential Coating',
        price: 'From \$500',
        features: ['Paint decontamination', 'Single layer coating', '2-year protection', 'Hydrophobic finish'],
      },
      {
        name: 'Premium Coating',
        price: 'From \$1,200',
        features: ['Full paint correction', 'Multi-layer ceramic', '5-year protection', 'Self-cleaning effect', 'Free annual inspection'],
        popular: true,
      },
    ],
  },
  {
    category: 'Car Detailing',
    items: [
      {
        name: 'Quick Detail',
        price: 'Cars \$310 / SUV \$340',
        features: ['Engine bay clean', 'Hand wash & vacuum', 'Interior shampoo', 'Wheels & tires', 'Wax & finishing'],
      },
      {
        name: 'Deluxe Wash',
        price: 'Cars \$180 / SUV \$220',
        features: ['Exterior hand wash', 'Interior vacuum', 'Dashboard polish', 'Window cleaning', 'Tire shine'],
      },
    ],
  },
  {
    category: 'PPF Packages',
    items: [
      {
        name: 'Partial PPF',
        price: 'From \$800',
        features: ['Front bumper', 'Hood edge', 'Mirror caps', '5-year warranty'],
      },
      {
        name: 'Full Front PPF',
        price: 'From \$2,000',
        features: ['Full hood', 'Full bumper', 'Fenders', 'Mirrors', 'Headlights', '10-year warranty'],
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
      gsap.fromTo(
        '.packages-header > *',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.packages-header',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.package-accordion',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.packages-list',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="packages" ref={sectionRef} className="py-20 lg:py-32 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Image & Header */}
          <div>
            <div className="packages-header mb-10">
              <span className="text-primary font-semibold text-sm tracking-[4px] uppercase">
                Pricing
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Our <span className="text-primary">Packages</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Choose from our carefully curated packages designed to give your vehicle the best
                protection and finish at competitive prices.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[400px] hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&q=80"
                alt="Car Detailing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="glass rounded-xl p-4">
                  <div className="text-primary font-heading text-2xl font-bold">Premium Quality</div>
                  <div className="text-gray-300 text-sm">Best products in the market</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="packages-list space-y-4">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="package-accordion glass rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <div>
                    <h3 className="font-heading text-xl font-bold">{pkg.category}</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {pkg.items.length} package{pkg.items.length > 1 ? 's' : ''} available
                    </p>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === i ? 'bg-primary text-white rotate-180' : 'glass text-gray-400'
                    }`}
                  >
                    {openIndex === i ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === i ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 space-y-4">
                    {pkg.items.map((item, j) => (
                      <div
                        key={j}
                        className={`rounded-xl p-5 border transition-all duration-300 ${
                          item.popular
                            ? 'border-primary/50 bg-primary/5'
                            : 'border-white/5 bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-heading font-bold text-lg">{item.name}</h4>
                              {item.popular && (
                                <span className="text-[10px] bg-primary px-2 py-0.5 rounded-full font-bold">
                                  POPULAR
                                </span>
                              )}
                            </div>
                            <div className="text-primary font-heading font-bold text-xl mt-1">
                              {item.price}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {item.features.map((feature, k) => (
                            <div key={k} className="flex items-center gap-2 text-sm text-gray-300">
                              <FaCheck className="text-primary text-xs flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <button className="mt-4 gradient-red px-6 py-2.5 rounded-full text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary/30 transition-all">
                          Book Now
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