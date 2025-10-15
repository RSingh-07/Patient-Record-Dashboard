// src/api/patientService.js
export const MOCK_PATIENTS = [
    { id: 101, name: "Alice Johnson", age: 45, gender: "Female", contact: "555-0101", email: "alice.j@health.com", diagnosis: "Hypertension", lastVisit: "2024-09-15", bloodGroup: "A+", condition: "Stable" },
    { id: 102, name: "Robert Smith", age: 62, gender: "Male", contact: "555-0202", email: "robert.s@health.com", diagnosis: "Type 2 Diabetes", lastVisit: "2024-09-20", bloodGroup: "O-", condition: "Chronic" },
    { id: 103, name: "Chandra Patel", age: 28, gender: "Female", contact: "555-0303", email: "chandra.p@health.com", diagnosis: "Asthma", lastVisit: "2024-10-01", bloodGroup: "B+", condition: "Managed" },
    { id: 104, name: "Michael O'Connell", age: 71, gender: "Male", contact: "555-0404", email: "michael.o@health.com", diagnosis: "Coronary Artery Disease", lastVisit: "2024-10-10", bloodGroup: "AB-", condition: "Critical" },
    { id: 105, name: "Sarah Connor", age: 33, gender: "Female", contact: "555-0505", email: "sarah.c@health.com", diagnosis: "Migraine", lastVisit: "2024-11-05", bloodGroup: "A-", condition: "Stable" },
    { id: 106, name: "David Kim", age: 50, gender: "Male", contact: "555-0606", email: "david.k@health.com", diagnosis: "Pneumonia (Resolved)", lastVisit: "2024-11-12", bloodGroup: "O+", condition: "Recovered" },
    { id: 107, name: "Emily Brown", age: 19, gender: "Female", contact: "555-0707", email: "emily.b@health.com", diagnosis: "Allergies", lastVisit: "2024-11-18", bloodGroup: "B-", condition: "Stable" },
    { id: 108, name: "Jessica Alba", age: 39, gender: "Female", contact: "555-0808", email: "jessica.a@health.com", diagnosis: "Anxiety Disorder", lastVisit: "2024-11-25", bloodGroup: "AB+", condition: "Managed" },
];

export const fetchMockPatients = () =>
    new Promise(resolve => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                resolve({ data: null, error: "Failed to fetch data due to server overload." });
            } else {
                resolve({ data: MOCK_PATIENTS, error: null });
            }
        }, 1500);
    });
