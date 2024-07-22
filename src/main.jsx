import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Components/Quiz/Quiz.css'
import fetchData from './api/fetchData.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
