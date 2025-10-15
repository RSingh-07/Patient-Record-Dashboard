import React, { useState, useMemo } from 'react';
import { Search, Plus } from '../icons/Icons';
import PatientCard from '../patients/PatientCard';
import AddPatientForm from '../patients/AddPatientForm';

const PatientsView = ({ patients, isLoading, error, onAddPatient, onViewDetails, onDeletePatient }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    const filteredPatients = useMemo(() => {
        if (!patients) return [];
        const lowerCaseQuery = searchQuery.toLowerCase();
        return patients.filter(patient =>
            patient.name.toLowerCase().includes(lowerCaseQuery) ||
            patient.contact.includes(searchQuery)
        );
    }, [patients, searchQuery]);

    if (isLoading) return (
        <div className="flex items-center justify-center h-64 text-[#4F46E5]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4F46E5] mr-4"></div>
            <p className="text-lg">Loading patient records...</p>
        </div>
    );

    if (error) return (
        <div className="bg-red-900/30 border border-red-700 p-6 rounded-xl text-red-400 max-w-lg mx-auto mt-10">
            <h3 className="text-xl font-bold mb-2">Error Loading Data</h3>
            <p>{error}</p>
        </div>
    );

    return (
        <div className="space-y-8 p-4 sm:p-6">
            <h2 className="text-3xl font-extrabold text-white border-b border-gray-700 pb-3">
                Patient Directory ({patients.length})
            </h2>

            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="relative w-full sm:w-1/2">
                    <input
                        type="text"
                        placeholder="Search patients by name or contact..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-[#4F46E5] focus:border-[#4F46E5] focus:outline-none transition-shadow shadow-md"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="w-full sm:w-auto px-6 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors font-semibold shadow-lg flex items-center justify-center space-x-2"
                >
                    <Plus className="w-5 h-5" />
                    <span>{showAddForm ? 'Hide Form' : 'Add New Patient'}</span>
                </button>
            </div>

            {showAddForm && (
                <div className="w-full max-w-2xl mx-auto py-4">
                    <AddPatientForm 
                        onAdd={(newPatient) => { 
                            onAddPatient(newPatient); 
                            setShowAddForm(false); 
                            console.log(`Added ${newPatient.name}`); 
                        }}
                        onCancel={() => setShowAddForm(false)}
                    />
                </div>
            )}

            {filteredPatients.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPatients.map(patient => (
                        <PatientCard 
                            key={patient.id} 
                            patient={patient} 
                            onViewDetails={onViewDetails} 
                            onDelete={onDeletePatient}
                        />
                    ))}
                </div>
            ) : (
                <div className="bg-gray-800 p-6 rounded-xl text-center text-gray-400 mt-10">
                    No patients found matching "{searchQuery}".
                </div>
            )}
        </div>
    );
};

export default PatientsView;