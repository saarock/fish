

const Footer = () => {
  return (
    <div className="from-[#0b2f2a] to-[#0f4f4c] text-cyan-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">Join the Aquaculture Revolution</h2>
            <p className="mt-2 text-sm">Follow us on our journey to sustainable fish farming!</p>
          </div>
          <div className="flex justify-center space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-[#448c74] hover:underline hover:text-green-400 transition duration-300 ease-in-out">
              <span className="relative">
                <span className="absolute inset-0 bg-[#448c74] h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
                Facebook
              </span>
            </a>
            <a href="#" className="text-[#448c74] hover:underline hover:text-green-400 transition duration-300 ease-in-out">
              <span className="relative">
                <span className="absolute inset-0 bg-[#448c74] h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
                Twitter
              </span>
            </a>
            <a href="#" className="text-[#448c74] hover:underline hover:text-green-400 transition duration-300 ease-in-out">
              <span className="relative">
                <span className="absolute inset-0 bg-[#448c74] h-0.5 transform scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
                Instagram
              </span>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Fish Farming Co. All rights reserved.
          </p>
          <p className="text-xs mt-2">Bringing the freshest fish to your table.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
