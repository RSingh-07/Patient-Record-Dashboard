import React from 'react';
import { Heart, Home, Users, Info } from '../icons/Icons';
import NavLink from './NavLink';

const Header = ({ page, navigate }) => (
    <header className="bg-gray-800 shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-[#4F46E5] flex items-center">
                <Heart className="w-6 h-6 mr-2 fill-[#4F46E5] stroke-none" />
                Jarurat Care
            </div>
            <nav className="flex space-x-4">
                <NavLink label="Home" currentPage={page} targetPage="home" onClick={() => navigate('home')} icon={Home} />
                <NavLink label="Patients" currentPage={page} targetPage="patients" onClick={() => navigate('patients')} icon={Users} />
                <NavLink label="About" currentPage={page} targetPage="about" onClick={() => navigate('about')} icon={Info} />
            </nav>
        </div>
    </header>
);

export default Header;
