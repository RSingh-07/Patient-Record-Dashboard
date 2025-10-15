import React from 'react';
import { Calendar, Phone } from '../icons/Icons';

const PatientCard = ({ patient, onViewDetails, onDelete }) => {
    const conditionStyle = patient.condition === 'Critical' ? 'bg-red-500/20 text-red-400' :
                           patient.condition === 'Chronic' ? 'bg-yellow-500/20 text-yellow-400' :
                           'bg-[#4F46E5]/20 text-[#4F46E5]';

    const handleDeleteClick = () => {
        const confirmed = window.confirm(`Are you sure you want to delete the record for ${patient.name}?`);
        if (confirmed) {
            onDelete(patient.id);
        }
    };

    return (
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-700">
            <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-white">{patient.name}</h4>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${conditionStyle}`}>
                    {patient.condition}
                </span>
            </div>
            <div className="space-y-2 text-gray-300 text-sm flex-grow">
                <p className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#3B82F6]"/>
                    <span>Age: <span className="font-medium text-white">{patient.age}</span></span>
                </p>
                <p className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-[#3B82F6]"/>
                    <span>Contact: <span className="font-medium text-white">{patient.contact}</span></span>
                </p>
                <p className="text-sm font-medium text-gray-400 mt-2">Diagnosis: {patient.diagnosis}</p>
            </div>
            
            <div className="flex space-x-3 mt-5">
                <button
                    onClick={() => onViewDetails(patient)}
                    className="flex-1 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-md"
                >
                    View Details
                </button>
                
                <button
                    onClick={handleDeleteClick}
                    className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium shadow-md"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PatientCard;