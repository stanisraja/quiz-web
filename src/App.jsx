import React from 'react'
import Quiz from './Components/Quiz/Quiz'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App
