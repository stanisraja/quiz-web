import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App