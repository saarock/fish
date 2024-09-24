import React, { useRef } from 'react';
import { gsap } from 'gsap';
import HeaderContent from '../headerContent/HeaderContent';
import "./WhyUs.css";

const WhyUs: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      title: 'Sustainable Practices',
      description: 'Our fish farming methods are designed to protect the environment while delivering fresh fish.',
      image: './f1.jpeg'
    },
    {
      title: 'Quality Assurance',
      description: 'We ensure that our fish meet the highest quality standards through rigorous testing and monitoring.',
      image: './f4.jpeg'
    },
    {
      title: 'Expert Team',
      description: 'Our team of experts is dedicated to maintaining the health of our fish and the sustainability of our practices.',
      image: './f6.jpeg'
    }
  ];

  // Add hover animations using GSAP
  const animateIn = (index: number) => {
    gsap.to(cardRefs.current[index], { 
      scale: 1.05, 
      duration: 0.3 
    });
  };

  const animateOut = (index: number) => {
    gsap.to(cardRefs.current[index], { 
      scale: 1, 
      duration: 0.3 
    });
  };

  return (
    <section className="text-cyan-50 py-12 why-us">
      <div className="container mx-auto px-6">
        
        <HeaderContent heading='Why Choose Us?' content=" We are committed to providing high-quality fish while ensuring sustainable practices."/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el} 
              className="bg-[#0e2b27e0] p-6 rounded-lg shadow-lg text-cyan-50"
              onMouseEnter={() => animateIn(index)}
              onMouseLeave={() => animateOut(index)}
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="mb-4 rounded w-full h-40 object-cover" 
              />
              <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
