import React from 'react';

const AboutView = () => (
    <div className="p-8 sm:p-12 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white border-b border-gray-700 pb-3">About Jarurat Care</h2>
        <div className="bg-[#374151] p-6 rounded-xl space-y-4 shadow-lg">
            <p className="text-gray-300">
                Jarurat Care simplifies medical record management for healthcare professionals.
            </p>
            <p className="text-gray-400 text-sm">
                Built with React, Hooks, and Tailwind CSS.
            </p>
        </div>
    </div>
);

export default AboutView;
