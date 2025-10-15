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
            {/* CHANGE: text-xl on mobile, text-3xl on large screens */}
            <div className="text-xl sm:text-3xl font-extrabold text-blue-400 flex items-center shrink-0">
                {/* Image Logo - SHRINK-0 prevents the logo from shrinking */}
                <img
                    src={JaruratLogo}
                    alt="Jarurat Care Logo"
                    className="h-8 sm:h-10 w-auto mr-2 sm:mr-3" 
                />
                
                {/* Text Heading - Use 'truncate' to prevent it from forcing a single line */}
                <span className="truncate">Jarurat Care</span>
            </div>

            {/* Navigation Links - Use flex-wrap to allow the links to wrap if necessary */}
            {/* The current implementation works better if you just let the container shrink */}
            <nav className="flex space-x-2 sm:space-x-4 overflow-x-auto">
                <NavLink label="Home" currentPage={page} targetPage="home" onClick={() => navigate('home')} icon={Home} />
                <NavLink label="Patients" currentPage={page} targetPage="patients" onClick={() => navigate('patients')} icon={Users} />
                <NavLink label="About" currentPage={page} targetPage="about" onClick={() => navigate('about')} icon={Info} />
            </nav>
        </div>
    </header>
);

export default Header;