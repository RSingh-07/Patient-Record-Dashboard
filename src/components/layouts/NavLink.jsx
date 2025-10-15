import React from 'react';

const NavLink = ({ label, currentPage, targetPage, onClick, icon: Icon }) => {
    const isActive = currentPage === targetPage;
    return (
        <button
            onClick={onClick}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2
                ${isActive ? 'bg-[#4F46E5] text-white shadow-md' : 'text-gray-300 hover:bg-gray-600 hover:text-white'}
            `}
        >
            <Icon className="w-5 h-5" />
            <span>{label}</span> 
        </button>
    );
};

export default NavLink;