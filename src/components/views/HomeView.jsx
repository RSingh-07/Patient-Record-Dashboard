import React from 'react';
import { Heart, Users } from '../icons/Icons';

// HomeView.jsx
const HomeView = ({ onViewPatients }) => (
    <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <Heart className="w-20 h-20 text-[#4F46E5] mb-6 animate-pulse"/>
        <h2 className="text-5xl font-extrabold text-white mb-4">Welcome to Jarurat Care</h2>
        <p className="text-xl text-gray-300 max-w-3xl">
            Your centralized platform for managing comprehensive patient records...
        </p>
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
                className="px-8 py-3 bg-[#4F46E5] text-white rounded-lg text-lg font-semibold shadow-xl hover:bg-[#4338CA] transition-colors"
                onClick={onViewPatients}  // <-- Attach React handler
            >
                <Users className="inline w-5 h-5 mr-2" />
                View Patient Records
            </button>
        </div>
    </div>
);
export default HomeView;

