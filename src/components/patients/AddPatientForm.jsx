import React, { useState } from 'react';
import InputGroup from './InputGroup';
import { Plus } from '../icons/Icons';

const AddPatientForm = ({ onAdd, onCancel }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [diagnosis, setDiagnosis] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !contact) {
            console.error('Please fill in Name, Age, and Contact fields.');
            return;
        }

        const newPatient = {
            id: Date.now(),
            name,
            age: parseInt(age),
            contact,
            diagnosis: diagnosis || 'N/A',
            gender: 'Unknown',
            email: 'N/A',
            lastVisit: new Date().toISOString().slice(0, 10),
            bloodGroup: 'N/A',
            condition: 'New',
        };

        onAdd(newPatient);
    };

    return (
        <div className="bg-[#374151] p-6 rounded-xl shadow-xl space-y-4">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-3 mb-4 text-[#4F46E5]">Add New Patient</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <InputGroup label="Full Name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="John Doe" required />
                <InputGroup label="Age" value={age} onChange={e => setAge(e.target.value)} type="number" placeholder="35" required min="1" />
                <InputGroup label="Contact Phone" value={contact} onChange={e => setContact(e.target.value)} type="text" placeholder="555-1234" required />
                <InputGroup label="Diagnosis" value={diagnosis} onChange={e => setDiagnosis(e.target.value)} type="text" placeholder="Flu/Fever" />

                <div className="flex justify-end space-x-3 pt-4">
                    <button type="button" onClick={onCancel} className="px-4 py-2 text-gray-300 bg-gray-600 rounded-lg hover:bg-gray-700 transition-colors font-medium shadow-md">Cancel</button>
                    <button type="submit" className="px-6 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] transition-colors font-semibold shadow-lg flex items-center justify-center space-x-2">
                        <Plus className="w-5 h-5 mr-2" /> Add Patient
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPatientForm;
