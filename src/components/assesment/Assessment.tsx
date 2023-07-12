import React, { useState } from 'react';
import './Assessment.css';

interface Question {
  prompt: string;
  options: string[];
  answer: string;
}

interface AssessmentProps {
  questions: Question[];
  onScore: () => void;
}

const Assessment: React.FC<AssessmentProps> = ({ questions, onScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      onScore();
    }
  };

  const handleResetButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="assessment">
      {showScore ? (
        <div className="assessment__score">
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={handleResetButtonClick}>Try Again</button>
        </div>
      ) : (
        <>
          <div className="assessment__question">
            {questions[currentQuestion].prompt}
          </div>
          <div className="assessment__options">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerButtonClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Assessment;
