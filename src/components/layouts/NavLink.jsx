import React from 'react';

const NavLink = ({ label, currentPage, targetPage, onClick, icon: Icon, isMobileMenu = false }) => {
    const isActive = currentPage === targetPage;
    
    // Base classes common to both styles
    const baseClasses = `
        font-medium transition-colors duration-200 flex items-center
        ${isActive ? 'bg-[#4F46E5] text-white shadow-md' : 'text-gray-300 hover:bg-gray-600 hover:text-white'}
    `;

    // Mobile Menu style: Full width button for vertical menu
    const mobileClasses = `w-full px-4 py-3 text-base space-x-3 rounded-none`;

    // Desktop Nav style: Compact button for horizontal bar
    const desktopClasses = `px-3 py-2 text-sm space-x-2 rounded-lg`;

    return (
        <button
            onClick={onClick}
            // Conditionally applies mobile or desktop styles
            className={`${baseClasses} ${isMobileMenu ? mobileClasses : desktopClasses}`}
        >
            <Icon className="w-5 h-5 shrink-0" /> 
            
            <span>{label}</span> 
        </button>
    );
};

export default NavLink;