import React from 'react';
import { LuFacebook, LuInstagram, LuTwitter } from 'react-icons/lu';

const ContactHeader: React.FC = () => {
    const socialLinks = [
        { id: 1, name: "Facebook", slug: "https://facebook.com", icon: <LuFacebook /> },
        { id: 2, name: "Instagram", slug: "https://instagram.com", icon: <LuInstagram /> },
        { id: 3, name: "Twitter", slug: "https://twitter.com", icon: <LuTwitter /> },
    ];

    return (
        <div className="bg-[#0b2f2a] text-cyan-50 py-4 contact-header">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="https://themetechmount.com/html/aqovo/aqovo-advance/images/logo.png"
                        alt="logo"
                        className="h-12"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    {socialLinks.map((current) => (
                        <a key={current.id} href={current.slug} target="_blank" rel="noopener noreferrer" className="text-cyan-50 hover:text-cyan-300 transition duration-300">
                            {current.icon}
                        </a>
                    ))}
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <div className="number mr-4">+977-9823464648</div>
                    <button className="bg-[#2c7f7f] text-white py-2 px-4 rounded hover:bg-[#1c3f3f] transition duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactHeader;
