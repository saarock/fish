import React from 'react';
import "./header.css"; // You can keep your custom styles here
import ContactHeader from './ContactHeader';
import { NavLink } from 'react-router-dom';
import { IoMdContact, IoMdHome } from 'react-icons/io';
import { SiAmazonsimpleemailservice } from 'react-icons/si';
import { FcAbout } from 'react-icons/fc';

const Header: React.FC = () => {
    const navs = [
        { id: 1, name: "Home", slug: "/", icon: <IoMdHome /> },
        { id: 2, name: "Service", slug: "/service", icon: <SiAmazonsimpleemailservice /> },
        { id: 3, name: "Contact", slug: "/contact", icon: <IoMdContact /> },
        { id: 4, name: "About Us", slug: "/about-us", icon: <FcAbout /> },
    ];

    return (
        <div className="bg-[#0b2f2a] text-cyan-50">
            <ContactHeader />
            <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
                <div className="flex space-x-4">
                    {navs.map((currentNav) => (
                        <NavLink
                            key={currentNav.id}
                            to={currentNav.slug}
                            className={({ isActive }) => `flex items-center p-2 rounded-md transition duration-300 
                                ${isActive ? 'bg-[#2c7f7f]' : 'hover:bg-[#1c3f3f]'}`}
                        >
                            {currentNav.icon}
                            <span className="ml-2">{currentNav.name}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Header;
