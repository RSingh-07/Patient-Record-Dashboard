import React from 'react';

const NavLink = ({ label, currentPage, targetPage, onClick, icon: Icon }) => {
    const isActive = currentPage === targetPage;
    return (
        <button
            onClick={onClick}
            // MODIFIED: Reduced padding (p-2) and text size (text-xs) on mobile.
            // Restored original padding (sm:px-3 sm:py-2) and text size (sm:text-sm) on wider screens.
            className={`px-2 py-1 text-xs rounded-lg font-medium transition-colors duration-200 flex items-center space-x-1
                sm:px-3 sm:py-2 sm:text-sm sm:space-x-2
                ${isActive ? 'bg-[#4F46E5] text-white shadow-md' : 'text-gray-300 hover:bg-gray-600 hover:text-white'}
            `}
        >
            {/* Reduced icon size slightly on mobile for better fit */}
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            
            {/* Text is now visible on all screens */}
            <span>{label}</span> 
        </button>
    );
};

export default NavLink;