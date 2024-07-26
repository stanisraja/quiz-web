import React, { useState, useEffect } from 'react';

function HomePage() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Fetch the topics from an API or any other data source
    const fetchTopics = async () => {
      try {
        const response = await fetch('/api/topics');
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, []);

  
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div className="topic-container">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`topic ${index % 2 === 0 ? 'flashing' : ''}`}
          >
            {topic.name}
          </div>
        ))}
      </div>
      <div>
        <a href="https://quiz.yourdomain.com" className="start-quiz-link">
          Start Quiz
        </a>
      </div>
    </div>
  );
}

export default HomePage;