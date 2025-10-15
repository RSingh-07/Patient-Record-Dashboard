import React from 'react';
import { Heart, Calendar, Phone, Mail, Info } from '../icons/Icons';
import DetailRow from './DetailRow';

const PatientDetailModal = ({ patient, onClose }) => {
    if (!patient) return null;
    const conditionColor = patient.condition === 'Critical' ? 'text-red-400' :
                           patient.condition === 'Chronic' ? 'text-yellow-400' :
                           'text-[#4F46E5]';

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100 duration-300">
                <div className="bg-[#4338CA] p-6 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Patient Details: {patient.name}</h3>
                    <button onClick={onClose} className="text-white hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                        </svg>
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3 text-lg">
                        <Heart className="w-5 h-5 text-red-500" />
                        <p className={`font-semibold ${conditionColor}`}>{patient.condition} Condition</p>
                    </div>
                    <DetailRow label="ID" value={patient.id} />
                    <DetailRow label="Gender" value={patient.gender} />
                    <DetailRow label="Age" value={`${patient.age} years`} />
                    <DetailRow label="Blood Group" value={patient.bloodGroup} />
                    <DetailRow label="Primary Diagnosis" value={patient.diagnosis} />
                    <DetailRow label="Last Visit" value={patient.lastVisit} icon={<Calendar className="w-4 h-4 text-[#3B82F6]"/>} />
                    <DetailRow label="Contact Phone" value={patient.contact} icon={<Phone className="w-4 h-4 text-[#3B82F6]"/>} />
                    <DetailRow label="Email" value={patient.email} icon={<Mail className="w-4 h-4 text-[#3B82F6]"/>} />
                    <div className="pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400">Notes: Patient requires bi-weekly checkups and medication adherence.</p>
                    </div>
                </div>
                <div className="p-4 bg-gray-900 flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-md">Close</button>
                </div>
            </div>
        </div>
    );
};

export default PatientDetailModal;
