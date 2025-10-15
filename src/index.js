import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component
import './index.css';

// Assuming you have a CSS file to import, usually where Tailwind gets compiled:
// import './index.css'; 

// Use the modern React 18+ way to create a root and render the application.
// It looks for a div element with the id 'root' in your public/index.html file.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // The StrictMode component helps highlight potential problems in an application.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
