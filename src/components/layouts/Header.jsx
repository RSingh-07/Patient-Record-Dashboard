import React from 'react';
// Path to icons is up two levels (out of layouts and out of components)
import { Heart, Home, Users, Info } from '../icons/Icons'; 
// Path to NavLink is up one level (out of layouts)
import NavLink from './NavLink'; 

// Path to logo is up three levels (out of layouts, components, and src)
import JaruratLogo from '../../../src/assets/jarurat-care-logo.webp';

const Header = ({ page, navigate }) => (
    <header className="bg-gray-800 shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            
            {/* Logo and Heading Section */}
            {/* TEXT CHANGE: Changed text-white to text-blue-400 */}
            <div className="text-3xl font-extrabold text-blue-400 flex items-center">
                {/* Image Logo */}
                <img
                    src={JaruratLogo}
                    alt="Jarurat Care Logo"
                    // Tailwind classes for size and spacing (h-10 matches header height)
                    className="h-10 w-auto mr-3" 
                />
                
                {/* Text Heading - Now bright blue, extra bold, and larger (text-3xl) */}
                Jarurat Care
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-4">
                <NavLink label="Home" currentPage={page} targetPage="home" onClick={() => navigate('home')} icon={Home} />
                <NavLink label="Patients" currentPage={page} targetPage="patients" onClick={() => navigate('patients')} icon={Users} />
                <NavLink label="About" currentPage={page} targetPage="about" onClick={() => navigate('about')} icon={Info} />
            </nav>
        </div>
    </header>
);

export default Header;