import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure the path to your App component is correct
import './Components/Quiz/Quiz.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);