import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/layouts/Header';
import HomeView from './components/views/HomeView';
import AboutView from './components/views/AboutView';
import PatientsView from './components/views/PatientsView';
import PatientDetailModal from './components/patients/PatientDetailModal';
import { fetchMockPatients } from './utils/data';
import './index.css';
import { Plus, Search, Heart, Info, Calendar, Phone, Mail } from './components/icons/Icons';


const App = () => {
    const [patients, setPatients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [page, setPage] = useState('home');

    useEffect(() => {
        setIsLoading(true);
        fetchMockPatients().then(result => {
            if (result.error) setError(result.error);
            else setPatients(result.data);
            setIsLoading(false);
        });
    }, []);

    const handleAddPatient = useCallback(
        (newPatient) => {
            const newId = Math.max(...patients.map(p => p.id), 0) + 1;
            setPatients(prev => [{ ...newPatient, id: newId }, ...prev]);
        }, [patients]
    );

    const handleDeletePatient = useCallback(
        (patientId) => {
            const isConfirmed = window.confirm("Are you sure you want to delete this patient record? This cannot be undone.");

            if (isConfirmed) {
                setPatients(prevPatients => prevPatients.filter(patient => patient.id !== patientId));
                if (selectedPatient && selectedPatient.id === patientId) {
                    setSelectedPatient(null);
                }
            }
        }, [selectedPatient]
    );

    const handleViewDetails = useCallback(
        (patient) => setSelectedPatient(patient), []
    );
    const handleCloseModal = useCallback(() => setSelectedPatient(null), []);
    const navigate = (newPage) => setPage(newPage);

    let CurrentView;
    if (page === 'patients') {
        CurrentView = (
            <PatientsView
                patients={patients}
                isLoading={isLoading}
                error={error}
                onAddPatient={handleAddPatient}
                onViewDetails={handleViewDetails}
                onDeletePatient={handleDeletePatient} 
            />
        );
    } else if (page === 'about') {
        CurrentView = <AboutView />;
    } else {
        CurrentView = <HomeView onViewPatients={() => setPage('patients')} />;
    }

    return (
        <div className="min-h-screen bg-[#1F2937]">
            <Header page={page} navigate={navigate} />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {CurrentView}
            </main>

            <PatientDetailModal patient={selectedPatient} onClose={handleCloseModal} />
        </div>
    );
};

export default App;