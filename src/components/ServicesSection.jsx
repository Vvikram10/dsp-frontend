import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaCarSide,
  FaShieldAlt,
  FaSprayCan,
  FaPalette,
  FaBuilding,
  FaHome,
  FaCube,
  FaWrench,
  FaStar,
  FaCogs,
} from "react-icons/fa";

import { MdTireRepair } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaCarSide />,
    title: "Window Tint",
    desc: "Premium window tinting with top-tier films for UV protection, privacy, and heat reduction.",
    image:
      "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80",
    color: "from-red-600 to-red-900",
  },
  {
    icon: <FaShieldAlt />,
    title: "PPF",
    desc: "Paint Protection Film to guard your vehicle against rock chips, scratches, and road debris.",
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80",
    color: "from-orange-600 to-red-800",
  },
  {
    icon: <FaSprayCan />,
    title: "Ceramic Coating",
    desc: "Long-lasting ceramic protection giving your vehicle a permanent showroom-quality shine.",
    image:
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80",
    color: "from-amber-600 to-orange-800",
  },
  {
    icon: <FaPalette />,
    title: "Vehicle Wrap",
    desc: "Full or partial vehicle wraps to transform your car with custom colors and finishes.",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    color: "from-purple-600 to-indigo-800",
  },
  {
    icon: <FaBuilding />,
    title: "Office Signs & Vinyl",
    desc: "Professional signage and vinyl stickers for offices, storefronts, and vehicles.",
    image:
      "https://images.unsplash.com/photo-1588412079929-790b9f593d8e?w=600&q=80",
    color: "from-blue-600 to-blue-900",
  },
  {
    icon: <MdTireRepair />,
    title: "Tire Swap",
    desc: "Quick and professional tire swap services for seasonal changes or upgrades.",
    image:
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=600&q=80",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: <FaHome />,
    title: "Commercial & House Tints",
    desc: "Residential and commercial window tinting for energy efficiency and privacy.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    color: "from-teal-600 to-teal-900",
  },
  {
    icon: <FaCube />,
    title: "3D Prints",
    desc: "Custom 3D printing services for car accessories, prototypes, and unique designs.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    color: "from-pink-600 to-rose-800",
  },
  {
    icon: <FaWrench />,
    title: "Handyman",
    desc: "General handyman services for installations, repairs, and maintenance needs.",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    color: "from-yellow-600 to-amber-800",
  },
  {
    icon: <FaStar />,
    title: "Car Detailing",
    desc: "Interior and exterior car detailing to make your vehicle look brand new.",
    image:
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80",
    color: "from-emerald-600 to-green-800",
  },
  {
    icon: <FaCogs />,
    title: "Custom Kits Installation",
    desc: "Professional installation of custom body kits, spoilers, and aftermarket parts.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    color: "from-red-700 to-red-950",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-header > *",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-header",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".service-card",
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-black relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="service-header text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We specialize in premium automotive and commercial services.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group relative rounded-2xl overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/70" />

              <div className="relative p-6 h-[260px] flex flex-col justify-end text-white">
                <div
                  className={`w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-2xl`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;