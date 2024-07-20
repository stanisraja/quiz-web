import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure the path to your App component is correct
import './Components/Quiz/Quiz.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This should match the id in public/index.html
);