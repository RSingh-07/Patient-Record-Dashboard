import React from 'react';

// Added isMobileMenu prop
const NavLink = ({ label, currentPage, targetPage, onClick, icon: Icon, isMobileMenu = false }) => {
    const isActive = currentPage === targetPage;
    
    // Define base classes
    const baseClasses = `
        font-medium transition-colors duration-200 flex items-center
        ${isActive ? 'bg-[#4F46E5] text-white shadow-md' : 'text-gray-300 hover:bg-gray-600 hover:text-white'}
    `;

    // Define mobile-specific classes (full width button for vertical menu)
    const mobileClasses = `w-full px-4 py-3 text-base space-x-3 rounded-none`;

    // Define desktop/standard classes (compact button for horizontal menu)
    const desktopClasses = `px-3 py-2 text-sm space-x-2 rounded-lg`;

    return (
        <button
            onClick={onClick}
            // Use mobile classes if in the mobile menu, otherwise use desktop classes
            className={`${baseClasses} ${isMobileMenu ? mobileClasses : desktopClasses}`}
        >
            {/* Icon size remains consistent */}
            <Icon className="w-5 h-5 shrink-0" /> 
            
            <span>{label}</span> 
        </button>
    );
};

export default NavLink;