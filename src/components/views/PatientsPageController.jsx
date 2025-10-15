import React, { useState, useEffect } from 'react';
import { fetchMockPatients } from '../utils/data'; 
import PatientsView from './PatientsView'; 

const PatientsPageController = () => {
    const [patients, setPatients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchMockPatients()
            .then(result => {
                if (result.error) {
                    setError(result.error);
                    setPatients([]);
                } else {
                    setPatients(result.data);
                    setError(null);
                }
            })
            .catch(() => setError("An unexpected network error occurred."))
            .finally(() => setIsLoading(false));
    }, []);

    const handleDeletePatient = (patientId) => {
        const isConfirmed = window.confirm(`Are you sure you want to delete patient ID ${patientId}? This action cannot be undone.`);
        
        if (isConfirmed) {
            const updatedPatients = patients.filter(patient => patient.id !== patientId);
            setPatients(updatedPatients);
        }
    };

    const handleAddPatient = (newPatient) => {
        const newId = Math.max(...patients.map(p => p.id), 0) + 1;
        setPatients(prevPatients => [...prevPatients, { ...newPatient, id: newId }]);
    };
    
    const handleViewDetails = (patient) => {
        console.log("Viewing details for:", patient.name);
    };

    return (
        <PatientsView
            patients={patients}
            isLoading={isLoading}
            error={error}
            onAddPatient={handleAddPatient}
            onViewDetails={handleViewDetails}
            onDeletePatient={handleDeletePatient} 
        />
    );
};

export default PatientsPageController;