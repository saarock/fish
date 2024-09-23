import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdContact, IoMdHome } from 'react-icons/io';
import { SiAmazonsimpleemailservice } from 'react-icons/si';
import { FcAbout } from 'react-icons/fc';
import { LuMenu, LuX } from 'react-icons/lu'; // Importing icons for menu
import ContactHeader from './ContactHeader';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navs = [
        { id: 1, name: "Home", slug: "/", icon: <IoMdHome /> },
        { id: 2, name: "Service", slug: "/service", icon: <SiAmazonsimpleemailservice /> },
        { id: 3, name: "Contact", slug: "/contact", icon: <IoMdContact /> },
        { id: 4, name: "About Us", slug: "/about-us", icon: <FcAbout /> },
    ];

    return (
        <header className="bg-[#0b2f2a] text-cyan-50 shadow-lg">
            <ContactHeader />
            <nav className="container mx-auto flex justify-between items-center py-4">
                <div className="text-2xl font-bold">Fish Farming Co.</div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <LuX className="text-2xl" /> : <LuMenu className="text-2xl" />}
                </button>
                <ul className={`flex-col md:flex md:flex-row space-x-4 absolute md:static bg-[#0b2f2a] md:bg-transparent transition-all duration-300 ${isOpen ? 'top-12 left-0 w-full' : 'top-[-200px] md:top-0'}`}>
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
