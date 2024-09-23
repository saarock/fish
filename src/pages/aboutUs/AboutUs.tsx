const AboutUs = () => {
  return (
    <section className="py-24 text-cyan-50">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center mb-10">About Us</h1>
        <p className="text-xl text-center mb-12">
          Welcome to our fish farming venture! We are dedicated to sustainable practices
          that ensure the health of our fish and the environment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#092420] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p>
              Our mission is to provide fresh, high-quality fish while promoting sustainable farming practices.
            </p>
          </div>
          <div className="bg-[#092420] p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p>
              We envision a world where fish farming contributes positively to local economies and ecosystems.
            </p>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-10">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs transition-transform transform hover:scale-105">
              <img src="path-to-image" alt="Team member" className="rounded-full w-24 h-24 mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>
            {/* Add more team members similarly */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
