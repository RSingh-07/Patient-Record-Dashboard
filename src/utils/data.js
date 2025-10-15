export const MOCK_PATIENTS = [
    { id: 101, name: "Alice Johnson", age: 45, gender: "Female", contact: "555-0101", email: "alice.j@health.com", diagnosis: "Hypertension", lastVisit: "2024-09-15", bloodGroup: "A+", condition: "Stable" },
    { id: 102, name: "Bob Smith", age: 52, gender: "Male", contact: "555-0102", email: "bob.s@health.com", diagnosis: "Diabetes", lastVisit: "2024-09-10", bloodGroup: "B+", condition: "Chronic" },
    { id: 103, name: "Carol White", age: 30, gender: "Female", contact: "555-0103", email: "carol.w@health.com", diagnosis: "Asthma", lastVisit: "2024-09-12", bloodGroup: "O-", condition: "Stable" },
    { id: 104, name: "David Lee", age: 67, gender: "Male", contact: "555-0104", email: "david.l@health.com", diagnosis: "Cardiac Arrhythmia", lastVisit: "2024-09-05", bloodGroup: "AB+", condition: "Critical" },
    { id: 105, name: "Eva Green", age: 38, gender: "Female", contact: "555-0105", email: "eva.g@health.com", diagnosis: "Migraine", lastVisit: "2024-09-18", bloodGroup: "A-", condition: "Stable" },
    { id: 106, name: "Frank Taylor", age: 50, gender: "Male", contact: "555-0106", email: "frank.t@health.com", diagnosis: "Arthritis", lastVisit: "2024-09-11", bloodGroup: "B-", condition: "Chronic" },
    { id: 107, name: "Grace Kim", age: 29, gender: "Female", contact: "555-0107", email: "grace.k@health.com", diagnosis: "Thyroid Disorder", lastVisit: "2024-09-14", bloodGroup: "O+", condition: "Stable" },
    { id: 108, name: "Henry Brown", age: 60, gender: "Male", contact: "555-0108", email: "henry.b@health.com", diagnosis: "Chronic Kidney Disease", lastVisit: "2024-09-08", bloodGroup: "AB-", condition: "Critical" },
    { id: 109, name: "Ivy Wilson", age: 41, gender: "Female", contact: "555-0109", email: "ivy.w@health.com", diagnosis: "Anemia", lastVisit: "2024-09-16", bloodGroup: "A+", condition: "Stable" },
    { id: 110, name: "Jack Davis", age: 35, gender: "Male", contact: "555-0110", email: "jack.d@health.com", diagnosis: "Back Pain", lastVisit: "2024-09-20", bloodGroup: "O-", condition: "Stable" }
];

export const fetchMockPatients = () => new Promise(resolve => {
    setTimeout(() => {
        // Simulate 10% chance of failure
        if (Math.random() < 0.1) {
            resolve({ data: null, error: "Failed to fetch data due to server overload." });
        } else {
            resolve({ data: MOCK_PATIENTS, error: null });
        }
    }, 1500); // simulate 1.5s network delay
});
