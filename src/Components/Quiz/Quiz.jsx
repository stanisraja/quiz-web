// Quiz.jsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // For making HTTP requests
import './Quiz.css'

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const optionArray = [Option1, Option2, Option3, Option4];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/questions', {
          params: { limit: 5 }
        });
        setQuestions(response.data);
        //setLoading(false); 
      } catch (error) {
        console.error('Error fetching questions:', error);
        //setLoading(false); 
      }
    };

    fetchQuestions();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  console.log(currentQuestion)

  if (!currentQuestion) {
    return <div>No Questions available...</div>;
  }


  const checkAns = (e, currect_ans) => {
    if (!lock) {
      const correctOption = currentQuestion.currect_ans === 'a' ? 1 :
                            currentQuestion.currect_ans === 'b' ? 2 :
                            currentQuestion.currect_ans === 'c' ? 3 :
                            4;
      if (correctOption === currect_ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optionArray[correctOption - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (currentQuestionIndex === questions.length - 1) {
        setResult(true);
        return;
      }
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setLock(false);
      optionArray.forEach(option => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/questions');
        setQuestions(response.data);
        setCurrentQuestionIndex(0);
        setScore(0);
        setLock(false);
        setResult(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  };

  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}>Quiz</h1>
      <hr />
      {result ? (
        <>
          <h2>You Scored {score} out of {questions.length}</h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>{currentQuestionIndex + 1}. {currentQuestion.title}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>{currentQuestion.option_1}</li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>{currentQuestion.option_2}</li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>{currentQuestion.option_3}</li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>{currentQuestion.option_4}</li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">{currentQuestionIndex + 1} of {questions.length} questions</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
