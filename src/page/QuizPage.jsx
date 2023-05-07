import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import multiQuiz from '../const/MultiQuiz.json';
import MainImage from '../images/mainpage.jpg'

export function QuizPage() {
    const [selectedColor, setSelectedColor] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(false);
    const [answers, setAnswers] = useState([]); // create state for storing answers

    const currentQuestion = multiQuiz[currentQuestionIndex];

    const handleNextQuestion = () => {
        const answer = currentQuestion.options.find(option => option.text === currentQuestion.options[selectedColor.slice(-1) - 1].text); // get the answer object of the selected option
        setAnswers([...answers, { id: currentQuestion.id, selectedOption: selectedColor.slice(-1), isCorrect: answer.isCorrect }]); // add the answer object to state
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedColor('');
    }

    const handleFinish = () => {
        const answer = currentQuestion.options.find(option => option.text === currentQuestion.options[selectedColor.slice(-1) - 1].text); // get the answer object of the selected option
        setAnswers([...answers, { id: currentQuestion.id, selectedOption: selectedColor.slice(-1), isCorrect: answer.isCorrect }]); // add the answer object to state
        setShowQuiz(false);
    }

    return (
        <div style={{
            backgroundColor: "#333333", paddingBottom: '100px',
        }}>
            <div style={{
                color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.2rem', margin: 'auto',
            }}>
                <div style={{
                    height: '45vh',
                    backgroundImage: `url(${MainImage})`,
                    backgroundPositionY: '-120px',
                    opacity: '0.8',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                }}>
                    <h1>How much do you know about digital security?</h1>
                </div>
                <div style={{ width: '55vw', margin: 'auto' }}>
                    <p style={{ textAlign: 'justify', fontSize: '1.2rem' }}>Test your knowledge on digital safety and cyber security by taking our quick 10 question quiz. </p>
                    <p style={{ textAlign: 'justify', fontSize: '1.2rem' }}>Once you’ve finished, we’ll show you how you did on the quiz, and give you some extra information on questions you may have gotten wrong </p>
                    <hr style={{ width: '55vw', marginTop: '70px', marginBottom: "60px" }} />
                    {showQuiz ? (
                        <div style={{ width: '45vw', margin: 'auto' }}>
                            <h3 style={{ color: 'orange' }}>Question {currentQuestion.id + 1} of {multiQuiz.length}</h3>
                            <h3>{currentQuestion.content}</h3>
                            <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', marginTop: '50px' }} >
                                {currentQuestion.options.map((option, index) => (
                                    <Button
                                        key={index}
                                        variant="contained"
                                        sx={{ width: '500px', color: 'white', backgroundColor: selectedColor === `op${index + 1}` ? 'cornflowerblue' : 'initial' }}
                                        onClick={() => setSelectedColor(`op${index + 1}`)}
                                    >
                                        {option.text}
                                    </Button>
                                ))}
                            </Stack>
                            {currentQuestionIndex === multiQuiz.length - 1 ? (
                                selectedColor ? (
                                    <Button
                                        variant="contained"
                                        sx={{ width: '300px', height:'60px',marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'orange' }}
                                        onClick={handleFinish}
                                    >
                                        View the result
                                    </Button>
                                ) : (
                                    null
                                )
                            ) : (
                                selectedColor ? (
                                    <Button
                                        variant="contained"
                                        sx={{ width: '300px',height:'60px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'orange' }}
                                        onClick={handleNextQuestion}
                                    >
                                        NEXT
                                    </Button>
                                ) : (
                                    null
                                )
                            )}
                        </div>
                    ) : (
                        <Stack justifyContent="center" alignItems="center">
                            <Button variant="contained" sx={{ width: '200px', height: '80px' }} onClick={() => setShowQuiz(true)}>Start Quiz</Button>
                        </Stack>
                    )}
                    {(answers.length > 0) && (
                        <div style={{ width: '55vw', margin: 'auto', marginTop: '50px' }}>
                            <hr style={{ width: '55vw', marginTop: '70px', marginBottom: "60px" }} />
                            <h3 style={{ color: 'orange', marginBottom: '20px' }}>Result:</h3>
                            {answers.map((answer) => (
                                <div key={answer.id} style={{ marginBottom: '15px', color: answer.isCorrect ? 'green' : 'red' ,textAlign: 'justify'}}>
                                    <p>Question {answer.id + 1}: <br/> Your answer: {currentQuestion.options[answer.selectedOption - 1].text}</p>
                                    {answer.isCorrect ? (
                                        <p>Correct!</p>
                                    ) : (
                                        <p>Incorrect. <br/> The correct answer is: {currentQuestion.options.find(option => option.isCorrect).text}</p>
                                    )}
                                </div>                                
                            ))}
                            <hr style={{ width: '55vw', marginTop: '70px', marginBottom: "60px" }} />
                            <Button
                                variant="outlined"
                                sx={{ width: '300px',height:'60px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block',backgroundColor: 'lightsteelblue', color: 'black' }}
                                onClick={() => {
                                    setShowQuiz(false); // reset to show quiz button again
                                    setCurrentQuestionIndex(0); // reset current question index
                                    setSelectedColor(''); // reset selected answer
                                    setAnswers([]); // reset answers state
                                }}
                            >
                                Reset quiz
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );                             
                                    }