import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'

function HomePage() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('/api/topics', {
          params: { limit: 5 }
        });
        setTopics(response.data);
        console.log('Fetched topics:', response.data); // Log the fetched data
      } catch (error) {
        console.error('Error fetching topics:', error);
        setError('Failed to fetch topics. Please try again later.');
      }
    };

    fetchTopics();
  }, []);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="topic-container">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`topic ${index % 2 === 0 ? 'flashing' : ''}`}
          >
            {topic.NAME || topic.name || JSON.stringify(topic)}
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