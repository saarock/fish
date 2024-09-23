import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdContact, IoMdHome } from 'react-icons/io';
import { SiAmazonsimpleemailservice } from 'react-icons/si';
import { FcAbout } from 'react-icons/fc';
import { LuMenu, LuX } from 'react-icons/lu'; // Importing icons for menu
import "./header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    
    const navs = [
        { id: 1, name: "Home", slug: "/", icon: <IoMdHome /> },
        { id: 2, name: "Service", slug: "/service", icon: <SiAmazonsimpleemailservice /> },
        { id: 3, name: "Contact", slug: "/contact", icon: <IoMdContact /> },
        { id: 4, name: "About Us", slug: "/about-us", icon: <FcAbout /> },
    ];

    return (
        <header className="bg-gradient-to-r from-[#0b2f2a] to-[#0f4f4c] text-cyan-50 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center" style={{cursor: "pointer"}} onClick={() => navigate("/")}>
                <img src="data:image/png;base64,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" alt="Logo" className="h-10 w-auto mr-3" />
                <span className="text-2xl font-bold">The fish</span>
            </div>
    
            {/* Contact Details */}
            <div className="hidden md:flex space-x-6 text-sm">
                <span className="hover:text-white transition duration-200">Email: info@example.com</span>
                <span className="hover:text-white transition duration-200">Phone: +123 456 7890</span>
            </div>
    
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <LuX className="text-2xl" /> : <LuMenu className="text-2xl" />}
            </button>
    
            {/* Navigation Links */}
            <ul className={`flex-col md:flex md:flex-row space-x-4 absolute md:static bg-[#0b2f2a] z-50 md:bg-transparent transition-all duration-300 ${isOpen ? 'top-12 left-0 w-full' : 'top-[-200px] md:top-0'}`}>
                {navs.map((currentNav) => (
                    <li key={currentNav.id} className="md:mr-4">
                        <NavLink
                            to={currentNav.slug}
                            className={({ isActive }) =>
                                `flex items-center px-3 py-2 rounded-lg transition duration-200 ${
                                    isActive ? 'bg-[#0f4f4c] text-white' : 'hover:bg-[#1e3f3f] hover:text-white'
                                }`
                            }
                        >
                            {currentNav.icon}
                            <span className="ml-2">{currentNav.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    
    );
};

export default Header;
