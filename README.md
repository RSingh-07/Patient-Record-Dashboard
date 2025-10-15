# 🏥 Jarurat Care - Patient Records Dashboard

A responsive front-end application built with **React** and **Tailwind CSS** to simulate a patient records management system. This project showcases proficiency in state management using **React Hooks** and utility-first styling for a clean, mobile-friendly user interface.

-----

## 🚀 Live Deployment & Submission

| Category | Status | Link/Notes |
| :--- | :--- | :--- |
| **Live Application** | Deployed on Vercel | [**View Jarurat Care Live**] (https://patient-record-dashboard-seven.vercel.app)|
| **Source Code** | GitHub Repository | [**View Repository on GitHub**] *https://github.com/RSingh-07/Patient-Record-Dashboard* |

-----

## ✨ Features Implemented

This dashboard was developed to meet the core requirements of the 'Patient Records Dashboard' task, focusing on modern React best practices.

### 1\. Core Functionality (Patients Page)

  * **Data Handling:** Patient data is fetched from a **hardcoded mock JSON object** to simulate API integration.
  * **Search Bar:** Implemented a real-time filter to allow users to **search patients by name**.
  * **Patient List:** Displays patient records in a **responsive card layout** showing Name, Age, and Contact.
  * **View Details:** Each patient card includes a 'View Details' button that triggers a **Modal** to display complete patient information.
  * **Delete Patient** (Bonus): Each patient card features a dedicated 'Delete' button with a confirmation prompt to remove the record from the local state.

Understood. Since you already had the initial features, here is the updated, concise Technical Implementation section, incorporating the Delete functionality and the advanced Hooks (useCallback) we added to your App.jsx.

### 2. Technical Implementation 🛠️
**State & Architecture**
Core State Management: Uses React Hooks (useState, useEffect) for managing all data, navigation, and UI state (search, modal visibility).

Performance: Employs the useCallback hook in the main container (App.jsx) to memoize all critical handler functions (handleAddPatient, handleDeletePatient), preventing unnecessary re-renders of the component tree.

Architecture: Follows the Container/Presentational Pattern. The top-level component (App.jsx) is the Controller, managing state and logic, which are passed via props to pure functional components (Views/Cards).

Data Operations: Implements full C.R.U.D. capabilities on the client-side state, featuring forms for Add New Patient (Create) and buttons for Delete Patient (Delete).

**Styling & Status**
Styling: Utilizes Tailwind CSS for a utility-first approach, ensuring rapid development and a professional, maintainable design system.

Responsiveness: The UI is fully adaptive, featuring a functional Hamburger Menu for mobile navigation and a patient grid that scales cleanly to a single-column view on small screens.

Data Status: Implements robust conditional rendering to display explicit Loading and Error states during the simulated API fetch, adhering to the bonus requirement.

-----

## 🛠️ Setup and Installation

Follow these steps to get a copy of the project running locally on your machine.

### Prerequisites

  * [Node.js](https://nodejs.org/) (which includes npm)
  * Git

### Local Installation Steps

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/YourUsername/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Development Server:**

    ```bash
    npm start
    # or
    yarn start
    ```

    The application will open automatically at `http://localhost:3000`.

-----

## 🖼️ Screenshots

Patient Dashboard (Desktop Grid View)
Shows the main requirement: the desktop view of the patient directory in a responsive card grid layout.

<img width="700" alt="Desktop view of the patient directory in a responsive card grid layout" src="https://github.com/user-attachments/assets/80dba9dd-a1be-4b2c-86b3-7d5244a75d93" />

Search Filter in Action
Demonstrates the real-time filtering functionality on the patient list.

<img width="700" alt="Desktop view demonstrating the search bar filtering the patient list" src="https://github.com/user-attachments/assets/5e9fc363-fa16-4bca-bde9-963e69880287" />

Add New Patient Form (Bonus Feature)
Showcasing the implemented bonus feature with the form visible on the dashboard.

<img width="700" alt="Desktop view of the 'Add New Patient' form open on the dashboard" src="https://github.com/user-attachments/assets/2739bbfd-4fd4-4915-bd0d-0288534a0359" />

Landing Page (Desktop)
The initial entry point of the application with the clear call-to-action.

<img width="700" alt="Desktop view of the Home Page and initial call-to-action" src="https://github.com/user-attachments/assets/1fc8632a-03ee-4e39-84ac-fffc71166703" />

Mobile Layout: Patient Directory
Demonstrates the clean mobile responsiveness of the patient cards, stacking correctly on small screens.

<img width="300" alt="Mobile view of the Patient Dashboard showing cards stacked for small screens" src="https://github.com/user-attachments/assets/7bb0bf31-6924-4144-b116-2f190b13ab29" />

Mobile Layout: Hamburger Menu Open
This is the crucial image showing the functional, full-width menu overlay we implemented.

<img width="300" alt="Mobile view showing the hamburger menu open with vertically stacked navigation links" src="https://github.com/user-attachments/assets/22c4efbb-7fc8-4558-b384-2a1c5ebc8c3c" />

Mobile Layout: Initial Bug (Before Fix)
This can be used to show the "before" state of the header responsiveness challenge.

<img width="300" alt="Mobile view showing the initial overlapping header link bug (Before Fix)" src="https://github.com/user-attachments/assets/16c1aa6e-8751-45ef-a211-db6cb11adb74" />

About Page
The informational page of the application.

<img width="700" alt="Desktop view of the About Jarurat Care informational page" src="https://github.com/user-attachments/assets/bc517961-39e0-4610-bdf7-155bc94cfaeb" />
