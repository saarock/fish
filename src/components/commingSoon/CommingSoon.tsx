import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1c3f3f] text-cyan-50">
      <h1 className="text-5xl font-bold mb-4 text-center">Contact Us - Coming Soon!</h1>
      <p className="text-lg text-center mb-8">
        We're working hard to get our contact features ready. Stay tuned for updates!
      </p>
      <div className="bg-[#0b2f2a] p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">We're Almost There!</h2>
        <p className="mb-4">Our contact page will be available shortly.</p>
        <div className="flex justify-center items-center space-x-4">
          <div className="bg-[#2c7f7f] p-4 rounded-md">
            <span className="text-2xl font-bold">10</span>
            <p className="text-sm">Days</p>
          </div>
          <div className="bg-[#2c7f7f] p-4 rounded-md">
            <span className="text-2xl font-bold">12</span>
            <p className="text-sm">Hours</p>
          </div>
          <div className="bg-[#2c7f7f] p-4 rounded-md">
            <span className="text-2xl font-bold">30</span>
            <p className="text-sm">Minutes</p>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center">
        In the meantime, feel free to explore our services and learn more about us!
      </p>
    </div>
  );
};

export default ComingSoon;
