import React from 'react'
import Quiz from './Components/Quiz/Quiz'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <>
      <Quiz/>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App
