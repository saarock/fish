import React, {  useRef } from 'react';
import { gsap } from 'gsap';

import "./WhyUs.css"

const WhyUs: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <section className=" text-cyan-50 py-12 why-us">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Why Choose Us?</h1>
        <p className="text-lg text-center mb-8">
          We are committed to providing high-quality fish while ensuring sustainable practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Sustainable Practices', 'Quality Assurance', 'Expert Team'].map((title, index) => (
            <div 
              key={index} 
              ref={el => cardRefs.current[index] = el} 
              className="bg-[#0e2b27e0] p-6 rounded-lg shadow-lg text-cyan-50"
              onMouseEnter={() => animateIn(index)}
              onMouseLeave={() => animateOut(index)}
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDksOKUneMoXf_nkmXbZLs9WbrwKAC510bVQ&s" 
                alt={title} 
                className="mb-4 rounded w-full h-40 object-cover" 
              />
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>
              <p>
                {title === 'Sustainable Practices' && 'Our fish farming methods are designed to protect the environment while delivering fresh fish.'}
                {title === 'Quality Assurance' && 'We ensure that our fish meet the highest quality standards through rigorous testing and monitoring.'}
                {title === 'Expert Team' && 'Our team of experts is dedicated to maintaining the health of our fish and the sustainability of our practices.'}
              </p>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}

export default WhyUs;
