import React, { useEffect, useRef, useState } from 'react';
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
    image: 'https://cdn.britannica.com/14/162014-050-45C1FD13/warm-bloodedness-opah-results-heat-exchange-system-gills.jpg',
    description: 'Tilapia is a popular freshwater fish known for its mild taste.',
    available: true,
  },
  {
    name: 'Catfish',
    image: 'https://cdn.britannica.com/14/162014-050-45C1FD13/warm-bloodedness-opah-results-heat-exchange-system-gills.jpg',
    description: 'Catfish are bottom feeders with a unique flavor profile.',
    available: false,
  },
  {
    name: 'Salmon',
    image: 'https://cdn.britannica.com/14/162014-050-45C1FD13/warm-bloodedness-opah-results-heat-exchange-system-gills.jpg',
    description: 'Salmon is a nutritious fish rich in omega-3 fatty acids.',
    available: true,
  },
  {
    name: 'Trout',
    image: 'https://cdn.britannica.com/14/162014-050-45C1FD13/warm-bloodedness-opah-results-heat-exchange-system-gills.jpg',
    description: 'Trout is known for its delicate flavor and is a favorite among anglers.',
    available: true,
  },
];

const Service: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    if (containerRef.current) {
      // Fade in effect
      tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, []);

  const filteredFishTypes = fishTypes.filter(fish =>
    fish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={containerRef} className="py-12 mt-12 text-cyan-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Our Fish Types</h1>
        <p className="text-lg text-center mb-8">
          Explore the different types of fish we offer, their details, and availability.
        </p>

        {/* Search Input */}
        <div className="mb-6 text-center">
    <input
        type="text"
        placeholder="Search for a fish..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 w-full max-w-xs text-black"
    />
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFishTypes.map((fish, index) => (
            <div key={index} className="bg-[#0e2b27e0] p-6 rounded-lg shadow-lg text-cyan-50">
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
