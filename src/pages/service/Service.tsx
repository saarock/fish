import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface FishType {
  name: string;
  image: string;
  description: string;
  available: boolean;
}

const fishTypes: FishType[] = [
  {
    name: 'Tilapia',
    image: 'https://via.placeholder.com/150',
    description: 'Tilapia is a popular freshwater fish known for its mild taste.',
    available: true,
  },
  {
    name: 'Catfish',
    image: 'https://via.placeholder.com/150',
    description: 'Catfish are bottom feeders with a unique flavor profile.',
    available: false,
  },
  {
    name: 'Salmon',
    image: 'https://via.placeholder.com/150',
    description: 'Salmon is a nutritious fish rich in omega-3 fatty acids.',
    available: true,
  },
  {
    name: 'Trout',
    image: 'https://via.placeholder.com/150',
    description: 'Trout is known for its delicate flavor and is a favorite among anglers.',
    available: true,
  },
];

const Service: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (containerRef.current) {
      // Fade in effect
      tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, []);

  return (
    <div ref={containerRef} className="py-12 mt-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Our Fish Types</h1>
        <p className="text-lg text-center mb-8">
          Explore the different types of fish we offer, their details, and availability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fishTypes.map((fish, index) => (
            <div key={index} className="bg-[#0b2f2a] p-6 rounded-lg shadow-lg text-cyan-50">
              <img
                src={fish.image}
                alt={fish.name}
                className="mb-4 rounded w-full h-40 object-cover"
              />
              <h2 className="text-2xl font-semibold text-center mb-2">{fish.name}</h2>
              <p className="text-center mb-2">{fish.description}</p>
              <p className="text-center">
                Availability: 
                <span className={fish.available ? "text-green-400" : "text-red-400"}>
                  {fish.available ? ' Available' : ' Not Available'}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
