import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests
import './Home.css'

function HomePage() {
  const [topics, setTopics] = useState([]);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('/api/topics', {
          params: { limit: 5 }
        });
        setTopics(response.data);
      } catch (error) {
        console.log('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, []);


  const currenttopic = topics[currentTopicIndex];

  console.log(currenttopic)
  
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div className="topic-container">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`topic ${index % 2 === 0 ? 'flashing' : ''}`}
          >
            {currenttopic.NAME}
          </div>
        ))}
      </div>
      <div>
        <a href="https://quiz.1page.click" className="start-quiz-link">
          Start Quiz
        </a>
      </div>
    </div>
  );
}

export default HomePage;