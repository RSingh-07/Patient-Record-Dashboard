import React, { useState } from 'react';
import { Heart, Home, Users, Info, Menu, X } from '../icons/Icons';
import NavLink from '../layouts/NavLink';
import JaruratLogo from '../../../src/assets/jarurat-care-logo.webp';

const Header = ({ page, navigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigate = (targetPage) => {
        navigate(targetPage);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-gray-800 shadow-xl sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                
                <div className="text-xl sm:text-3xl font-extrabold text-blue-400 flex items-center shrink-0">
                    <img
                        src={JaruratLogo}
                        alt="Jarurat Care Logo"
                        className="h-8 sm:h-10 w-auto mr-2 sm:mr-3"
                    />
                    <span className="truncate">Jarurat Care</span>
                </div>

                
                <nav className="hidden md:flex space-x-4">
                    <NavLink label="Home" currentPage={page} targetPage="home" onClick={() => navigate('home')} icon={Home} />
                    <NavLink label="Patients" currentPage={page} targetPage="patients" onClick={() => navigate('patients')} icon={Users} />
                    <NavLink label="About" currentPage={page} targetPage="about" onClick={() => navigate('about')} icon={Info} />
                </nav>

                
                <button
                    className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-gray-700 shadow-lg py-2 z-50">
                    <NavLink label="Home" currentPage={page} targetPage="home" onClick={() => handleNavigate('home')} icon={Home} isMobileMenu={true} />
                    <NavLink label="Patients" currentPage={page} targetPage="patients" onClick={() => handleNavigate('patients')} icon={Users} isMobileMenu={true} />
                    <NavLink label="About" currentPage={page} targetPage="about" onClick={() => handleNavigate('about')} icon={Info} isMobileMenu={true} />
                </div>
            )}
        </header>
    );
};

export default Header;