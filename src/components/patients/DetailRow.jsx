import React from 'react';
import { Info } from '../icons/Icons';

const DetailRow = ({ label, value, icon }) => (
    <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="text-gray-400 flex items-center space-x-2">
            {icon || <Info className="w-4 h-4 text-[#3B82F6]"/>} 
            <span>{label}</span>
        </span>
        <span className="font-medium text-white">{value}</span>
    </div>
);

export default DetailRow;
