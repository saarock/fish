import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PositiveMessage: React.FC = () => {
  const messageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageRef.current) {
      gsap.fromTo(messageRef.current, 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, []);

  return (
    <div className=" py-12">
      <div className="container mx-auto px-6">
        <div 
          ref={messageRef} 
          className=" text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Stay Positive!</h1>
          <p className="text-lg mb-4">
            "In every challenge, there's an opportunity. Embrace the journey and shine!"
          </p>
          <button className="bg-white text-[#092420] font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
            Share This Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositiveMessage;
