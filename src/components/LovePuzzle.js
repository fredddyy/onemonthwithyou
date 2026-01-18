import React, { useState, useEffect } from 'react';
import './LovePuzzle.css';

const LovePuzzle = () => {
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [showCongrats, setShowCongrats] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [currentAnswers, setCurrentAnswers] = useState({});

  const gridSize = 15;
  const loveWords = [
    'LOVE', 'HEART', 'KISS', 'HUG', 'FOREVER', 'ALWAYS', 'SWEETHEART', 
    'ROMANCE', 'TOGETHER', 'HAPPY', 'SMILE', 'DREAM', 'SOULMATE'
  ];

  const [mamaFound, setMamaFound] = useState(false);
  const [selectedMamaCells, setSelectedMamaCells] = useState([]);

  const mamaGrid = [
    ['A','M','T','A','S','R','M','Q','A','S','T','A','S'],
    ['S','Q','A','R','M','A','Q','S','M','T','R','S','M'],
    ['M','A','S','Q','T','R','A','M','Q','A','M','Q','T'],
    ['R','M','A','S','A','Q','T','S','R','A','M','Q','A'],
    ['M','Q','A','S','T','R','M','A','S','Q','M','A','R'],
    ['R','M','Q','A','S','T','M','R','A','Q','S','A','Q'],
    ['A','S','T','R','M','A','S','Q','T','R','M','A','Q'],
    ['S','M','A','Q','R','A','S','M','T','R','A','S','M'],
    ['A','Q','T','R','M','A','S','A','Q','T','S','R','A'],
    ['M','Q','A','S','T','R','A','S','Q','M','A','R','M'],
    ['T','R','M','A','S','Q','T','R','A','S','Q','M','A'],
    ['Q','R','M','A','S','Q','T','R','S','A','M','Q','R'],
    ['A','S','R','A','Q','M','A','S','T','Q','R','M','A'],
    ['S','T','A','M','Q','R','A','S','M','A','Q','T','Q'],
    ['R','M','A','S','Q','T','R','M','A','S','Q','M','Q']
  ];

  const quizQuestions = [
    {
      question: "What feature do I love the most about you?",
      options: ["Your biceps", "Your chest", "Your eyes", "Your voice"],
      correct: 2
    },
    {
      question: "When did I first say I love you?",
      options: ["December 11th", "December 7th", "December 10th", "December 6th"],
      correct: 3
    },
    {
      question: "Who was the first person I told about you?",
      options: ["My mom", "Rachael", "Stella", "My brothers"],
      correct: 2
    },
    {
      question: "What is my favorite thing to call you?",
      options: ["Daddy", "Grizz", "Baby", "All of the above"],
      correct: 3
    }
  ];

  const grid = [
    ['L','O','V','E','H','U','G','F','O','R','E','V','E','R','S'],
    ['O','H','E','A','R','T','K','I','S','S','T','O','G','E','T'],
    ['V','A','L','W','A','Y','S','L','A','W','A','Y','S','H','O'],
    ['E','R','M','A','N','C','E','P','A','S','S','I','O','N','G'],
    ['R','O','M','A','N','C','E','H','A','P','P','Y','S','M','I'],
    ['E','A','D','R','E','A','M','S','O','U','L','M','A','T','E'],
    ['S','W','E','E','T','H','E','A','R','T','L','O','V','E','Y'],
    ['O','U','L','M','A','T','E','F','O','R','E','V','E','R','O'],
    ['U','G','H','T','O','G','E','T','H','E','R','H','A','P','P'],
    ['L','M','A','T','E','S','W','E','E','T','H','E','A','R','T'],
    ['M','A','T','E','L','O','V','E','R','O','M','A','N','C','E'],
    ['A','T','E','S','W','E','E','T','H','E','A','R','T','L','O'],
    ['T','E','S','W','E','E','T','H','E','A','R','T','L','O','V'],
    ['E','S','W','E','E','T','H','E','A','R','T','L','O','V','E']
  ];

  const handleCellClick = (row, col) => {
    const cellKey = `${row}-${col}`;
    
    if (selectedCells.includes(cellKey)) {
      setSelectedCells(selectedCells.filter(cell => cell !== cellKey));
    } else {
      const newSelected = [...selectedCells, cellKey];
      setSelectedCells(newSelected);
      
      // Check if selected cells form a word
      const word = newSelected.map(cellKey => {
        const [r, c] = cellKey.split('-').map(Number);
        return grid[r][c];
      }).join('');
      
      if (loveWords.includes(word) && !foundWords.includes(word)) {
        setFoundWords([...foundWords, word]);
        setSelectedCells([]);
        
        if (foundWords.length + 1 === loveWords.length) {
          setShowCongrats(true);
        }
      }
    }
  };

  const resetPuzzle = () => {
    setFoundWords([]);
    setSelectedCells([]);
    setShowCongrats(false);
  };

  const handleQuizAnswer = (questionIndex, selectedOption) => {
    setCurrentAnswers({...currentAnswers, [questionIndex]: selectedOption});
    
    if (selectedOption === quizQuestions[questionIndex].correct) {
      setQuizScore(quizScore + 1);
    }
  };

  const submitQuiz = () => {
    setShowQuizResults(true);
  };

  const resetQuiz = () => {
    setQuizScore(0);
    setCurrentAnswers({});
    setShowQuizResults(false);
  };

  const handleMamaCellClick = (row, col) => {
    const cellKey = `${row}-${col}`;
    
    if (selectedMamaCells.includes(cellKey)) {
      setSelectedMamaCells(selectedMamaCells.filter(cell => cell !== cellKey));
    } else {
      const newSelected = [...selectedMamaCells, cellKey];
      setSelectedMamaCells(newSelected);
      
      // Check if selected cells spell "MAMA"
      if (newSelected.length === 4) {
        const word = newSelected.map(cellKey => {
          const [r, c] = cellKey.split('-').map(Number);
          return mamaGrid[r][c];
        }).join('');
        
        if (word === 'MAMA') {
          setMamaFound(true);
          setSelectedMamaCells([]);
        } else {
          setSelectedMamaCells([]);
        }
      }
    }
  };

  const resetMamaGame = () => {
    setMamaFound(false);
    setSelectedMamaCells([]);
  };

  return (
    <section id="puzzle" className="love-puzzle">
      <div className="container">
        {/* Quiz Section */}
        <div className="love-quiz">
          <h2 className="section-title">How Well Do You Know Me?</h2>
          <div className="quiz-intro">
            <p>Hi, Baby!</p>
            <p>I have a surprise for you today. In honor of our love, I've put together a little quiz to test just how well you know me. I hope you're ready to put your knowledge to the test, because I've come up with some questions that will really put your memory to the test. So sit back, relax, and get ready to show off your love for me. Good luck!</p>
          </div>
          
          {!showQuizResults ? (
            <div className="quiz-questions">
              {quizQuestions.map((question, index) => (
                <div key={index} className="question-card">
                  <h3>{index + 1}. {question.question}</h3>
                  <div className="options">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`option-btn ${currentAnswers[index] === optionIndex ? 'selected' : ''}`}
                        onClick={() => handleQuizAnswer(index, optionIndex)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <div className="quiz-submit">
                <button className="submit-quiz-btn" onClick={submitQuiz}>
                  Submit Quiz
                </button>
              </div>
            </div>
          ) : (
            <div className="quiz-results">
              <div className="results-card">
                <h3>Quiz Results! 🎉</h3>
                <p>You scored {quizScore} out of {quizQuestions.length}</p>
                {quizScore === quizQuestions.length ? (
                  <p>Perfect! You know me so well! ❤️</p>
                ) : quizScore >= quizQuestions.length / 2 ? (
                  <p>Great job! You know me pretty well! 💕</p>
                ) : (
                  <p>Good try! We have more memories to make! 😊</p>
                )}
                <button className="reset-quiz-btn" onClick={resetQuiz}>
                  Take Quiz Again
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mama Game Section */}
        <div className="mama-game">
          <h2 className="section-title">Find Me</h2>
          {/* <p className="mama-intro">Find the word "MAMA" hidden in the letters grid below. Each letter must be connected and in order!</p> */}
          
          <div className="mama-images">
            {process.env.PUBLIC_URL + '/a.jpg' && (
              <img src={process.env.PUBLIC_URL + '/a.jpg'} alt="Memory A" className="mama-game-img" />
            )}
            {process.env.PUBLIC_URL + '/b.jpg' && (
              <img src={process.env.PUBLIC_URL + '/b.jpg'} alt="Memory B" className="mama-game-img" />
            )}
            {process.env.PUBLIC_URL + '/c.jpg' && (
              <img src={process.env.PUBLIC_URL + '/c.jpg'} alt="Memory C" className="mama-game-img" />
            )}
          </div>

          <div className="mama-puzzle-container">
            <div className="mama-grid">
              {mamaGrid.map((row, rowIndex) => (
                row.map((letter, colIndex) => (
                  <div
                    key={`mama-${rowIndex}-${colIndex}`}
                    className={`mama-grid-cell ${selectedMamaCells.includes(`${rowIndex}-${colIndex}`) ? 'selected' : ''}`}
                    onClick={() => handleMamaCellClick(rowIndex, colIndex)}
                  >
                    {letter}
                  </div>
                ))
              ))}
            </div>
            
            <div className="mama-status">
              {mamaFound ? (
                <div className="mama-success">
                  <h3>🎉 Found MAMA! 🎉</h3>
                  <p>You found it! You're the best at finding what matters most! ❤️</p>
                  <button className="reset-mama-btn" onClick={resetMamaGame}>Play Again</button>
                </div>
              ) : (
                <div className="mama-instructions">
                  <p>Selected: {selectedMamaCells.length}/4 letters</p>
                  {/* <p>Click 4 connected letters to spell MAMA</p> */}
                </div>
              )}
            </div>
          </div>
        </div>


    
      </div>
    </section>
  );
};

export default LovePuzzle;