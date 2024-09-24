const AboutUs = () => {
  return (
    <section className="py-24 text-cyan-50 bg-[#0a2a26]">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <h1 className="text-5xl font-extrabold text-center mb-10 tracking-wide">About Us</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Welcome to our fish farming venture! We are dedicated to sustainable practices that ensure the health of
          our fish and the environment.
        </p>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#092420] p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
            <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to provide fresh, high-quality fish while promoting sustainable farming practices.
            </p>
          </div>
          <div className="bg-[#092420] p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
            <h2 className="text-4xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              We envision a world where fish farming contributes positively to local economies and ecosystems.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-center mb-10">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="bg-[#092420] rounded-lg shadow-lg p-6 max-w-xs transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50">
              <img
                src="path-to-image"
                alt="John Doe"
                className="rounded-full w-24 h-24 mx-auto mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-center mb-2">John Doe</h3>
              <p className="text-center text-gray-300">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-[#092420] rounded-lg shadow-lg p-6 max-w-xs transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50">
              <img
                src="path-to-image"
                alt="Jane Smith"
                className="rounded-full w-24 h-24 mx-auto mb-6 shadow-lg"
              />
              <h3 className="text-2xl font-bold text-center mb-2">Jane Smith</h3>
              <p className="text-center text-gray-300">COO</p>
            </div>
            {/* Additional team members */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-extrabold mb-6">Join Us</h2>
          <p className="text-lg mb-8 max-w-lg mx-auto">
            Together, we can create a more sustainable future for fish farming. Reach out to learn how you can be a part of our mission.
          </p>
          <a href="#contact" className="inline-block bg-cyan-600 hover:bg-cyan-700 transition duration-300 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
