import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#0b2f2a] text-cyan-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl font-extrabold tracking-tight">Join the Aquaculture Revolution</h2>
            <p className="mt-3 text-lg">Follow us on our journey to sustainable fish farming!</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-6 md:mb-0">
            <a href="#" className="group text-[#448c74] relative">
              <FaFacebook size={24} className="group-hover:scale-110 transition duration-300 ease-in-out" />
              <span className="absolute bottom-[-1.5rem] left-0 w-full text-center opacity-0 group-hover:opacity-100 text-xs text-green-400 transition-opacity duration-300 ease-in-out">
                Facebook
              </span>
            </a>
            <a href="#" className="group text-[#448c74] relative">
              <FaTwitter size={24} className="group-hover:scale-110 transition duration-300 ease-in-out" />
              <span className="absolute bottom-[-1.5rem] left-0 w-full text-center opacity-0 group-hover:opacity-100 text-xs text-green-400 transition-opacity duration-300 ease-in-out">
                Twitter
              </span>
            </a>
            <a href="#" className="group text-[#448c74] relative">
              <FaInstagram size={24} className="group-hover:scale-110 transition duration-300 ease-in-out" />
              <span className="absolute bottom-[-1.5rem] left-0 w-full text-center opacity-0 group-hover:opacity-100 text-xs text-green-400 transition-opacity duration-300 ease-in-out">
                Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-600 pt-6 text-center">
          <p className="text-base font-semibold">
            &copy; {new Date().getFullYear()} Fish Farming Co. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-300">Bringing the freshest fish to your table.</p>
          <p className="text-xs mt-2 text-gray-400">
            Designed and developed by <a href="https://codehons.com" target='_blank' className="text-green-400 hover:underline">codehons.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
