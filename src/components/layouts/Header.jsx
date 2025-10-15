import React from 'react';
// Path to icons is up two levels (out of layouts and out of components)
import { Heart, Home, Users, Info } from '../icons/Icons'; 
// Path to NavLink is up one level (out of layouts)
import NavLink from './NavLink'; 

// Path to logo is up three levels (out of layouts, components, and src)
import JaruratLogo from '../../../src/assets/jarurat-care-logo.webp';

const Header = ({ page, navigate }) => {
    // State to track if the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle navigation click and close the menu
    const handleNavigate = (targetPage) => {
        navigate(targetPage);
        setIsMenuOpen(false); // Close menu after navigation
    };

    return (
        <header className="bg-gray-800 shadow-xl sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                
                {/* Logo and Heading Section (Always Visible) */}
                <div className="text-xl sm:text-3xl font-extrabold text-blue-400 flex items-center shrink-0">
                    <img
                        src={JaruratLogo}
                        alt="Jarurat Care Logo"
                        className="h-8 sm:h-10 w-auto mr-2 sm:mr-3" 
                    />
                    <span className="truncate">Jarurat Care</span>
                </div>

                {/* Desktop Navigation (Visible only on medium screens and up) */}
                <nav className="hidden md:flex space-x-4"> {/* 👈 HIDDEN on mobile, FLEX on desktop */}
                    <NavLink label="Home" currentPage={page} targetPage="home" onClick={() => navigate('home')} icon={Home} />
                    <NavLink label="Patients" currentPage={page} targetPage="patients" onClick={() => navigate('patients')} icon={Users} />
                    <NavLink label="About" currentPage={page} targetPage="about" onClick={() => navigate('about')} icon={Info} />
                </nav>

                {/* Mobile Menu Button (Visible only on mobile) */}
                <button
                    className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay (Conditional Rendering) */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-gray-700 shadow-lg py-2">
                    {/* The menu items are displayed vertically (flex-col) */}
                    <NavLink label="Home" currentPage={page} targetPage="home" onClick={() => handleNavigate('home')} icon={Home} isMobileMenu={true} />
                    <NavLink label="Patients" currentPage={page} targetPage="patients" onClick={() => handleNavigate('patients')} icon={Users} isMobileMenu={true} />
                    <NavLink label="About" currentPage={page} targetPage="about" onClick={() => handleNavigate('about')} icon={Info} isMobileMenu={true} />
                </div>
            )}
        </header>
    );
};

export default Header;