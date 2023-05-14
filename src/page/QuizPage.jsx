import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import multiQuiz from '../const/MultiQuiz.json';
import MainImage from '../images/mainpage.jpg';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export function QuizPage() {
    const [selectedColor, setSelectedColor] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showQuiz, setShowQuiz] = useState(true);
    const [answers, setAnswers] = useState([]);
    const currentQuestion = multiQuiz[currentQuestionIndex];
    const [previousQuestionIndex, setPreviousQuestionIndex] = useState(-1);


    const handleNextQuestion = () => {

        const answer = currentQuestion.options.find(option => option.text === currentQuestion.options[selectedColor.slice(-1) - 1].text);
        setAnswers([...answers, { id: currentQuestion.id, selectedOption: selectedColor.slice(-1), isCorrect: answer.isCorrect }]);
        setPreviousQuestionIndex(currentQuestionIndex);
        setSelectedColor('');
        window.scrollTo(0, 800);
        setShowQuiz(false);

    };
    const handleFinish = () => {
        const answer = currentQuestion.options.find(option => option.text === currentQuestion.options[selectedColor.slice(-1) - 1].text);
        setShowQuiz(false);
        setAnswers([...answers,
        { id: currentQuestion.id, selectedOption: selectedColor.slice(-1), isCorrect: answer.isCorrect }
        ]);
        setPreviousQuestionIndex(currentQuestionIndex);
        window.scrollTo(0, 1600);

    };

    const handleFinishQuiz = () => {
        window.location.href = "/";
    }

    const handleNext = () => {
        if (currentQuestionIndex < 6) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        else {
            setCurrentQuestionIndex(currentQuestionIndex);

        }

        setShowQuiz(true);
        window.scrollTo(0, 300);
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
                    <p style={{ textAlign: 'justify', fontSize: '1.2rem' }}>Test your knowledge on digital safety and cyber security by taking our quick  question quiz. </p>
                    <p style={{ textAlign: 'justify', fontSize: '1.2rem' }}>Once you’ve finished, we’ll show you how you did on the quiz, and give you some extra information on questions you may have gotten wrong </p>
                    {showQuiz ? (
                        <div style={{ width: '55vw', margin: 'auto' }}>
                            <hr style={{ width: '55vw', marginTop: '70px', marginBottom: "60px" }} />

                            <h3 style={{ color: 'orange' }}>Question {currentQuestion.id + 1} of {multiQuiz.length}</h3>
                            <h3>{currentQuestion.content}</h3>
                            <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', marginTop: '50px' }} >
                                {currentQuestion.options.map((option, index) => (
                                    <Button
                                        key={index}
                                        variant="contained"
                                        sx={{ width: '600px', color: 'black', backgroundColor: selectedColor === `op${index + 1}` ? 'cornflowerblue' : 'antiquewhite' }}
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
                                        sx={{ width: '300px', height: '60px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'orange' }}
                                        onClick={handleFinish}
                                    >
                                        View the summary
                                    </Button>
                                ) : (
                                    null
                                )
                            ) : (
                                selectedColor ? (
                                    <Button
                                        variant="contained"
                                        sx={{ width: '300px', height: '60px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'orange' }}
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
                        null
                    )}
                    {(answers.length > 0) && (
                        <div style={{ width: '55vw', margin: 'auto', marginTop: '50px' }}>
                            <hr style={{ width: '55vw', marginTop: '70px', marginBottom: "60px" }} />
                            <h3 style={{ color: 'orange', marginBottom: '20px' }}>Result:</h3>
                            {answers.map((answer, index) => (
                                <div key={answer.id} style={{ marginBottom: '15px', color: answer.isCorrect ? 'green' : 'red', textAlign: 'justify' }}>
                                    {index === previousQuestionIndex && (
                                        <p>Question {answer.id + 1}: <br /> Your answer: {multiQuiz[answer.id].options[answer.selectedOption - 1].text}</p>
                                    )}
                                    {index === previousQuestionIndex && (
                                        answer.isCorrect ? (
                                            <p>Correct!<br />
                                                <br />Feedback:  {multiQuiz[answer.id].options[answer.selectedOption - 1].feedback}
                                            </p>
                                        ) : (
                                            <p>Incorrect. <br /> The correct answer is: {multiQuiz[answer.id].options.find(option => option.isCorrect).text} <br />
                                                <br /> Feedback: <br />{multiQuiz[answer.id].options[answer.selectedOption - 1].feedback}</p>
                                        )

                                    )}
                                </div>
                            ))}
                            <Button
                                variant="contained"
                                sx={{ width: '300px', height: '60px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'orange' }}
                                onClick={handleNext}
                            >
                                Continue quiz
                            </Button>
                            <hr style={{ width: '55vw', marginTop: '70px', marginBottom: "60px" }} />
                            <h3 style={{ color: 'orange' }}>Summary: </h3>
                            <TableContainer component={Paper} style={{ width: '55vw', margin: 'auto', marginTop: '50px', backgroundColor: 'papayawhip' }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" style={{ color: 'black', fontWeight: 'bolder' }}>Question</TableCell>
                                            <TableCell align="center" style={{ color: 'black', fontWeight: 'bolder' }}>Your Answer</TableCell>
                                            <TableCell align="center" style={{ color: 'black', fontWeight: 'bolder' }}>Correct Answer</TableCell>
                                            <TableCell align="center" style={{ color: 'black', fontWeight: 'bolder' }}>Feedback</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {answers.map((answer, index) => (
                                            <TableRow
                                                key={answer.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >   <TableCell component="th" scope="row" style={{ justifyContent: 'center', color: 'black', fontWeight: 'bolder' }} >
                                                    {multiQuiz[answer.id].content}
                                                </TableCell>
                                                <TableCell style={{ justifyContent: 'center', color: 'black', fontWeight: 'bolder' }}>{multiQuiz[answer.id].options[answer.selectedOption - 1].text}</TableCell>
                                                <TableCell style={{ justifyContent: 'center', color: 'black', fontWeight: 'bolder' }}>{multiQuiz[answer.id].options.find(option => option.isCorrect).text}</TableCell>
                                                <TableCell style={{ justifyContent: 'center', color: 'black', fontWeight: 'bolder' }}>{multiQuiz[answer.id].options[answer.selectedOption - 1].feedback}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <hr style={{ width: '55vw', marginTop: '70px', marginBottom: "60px" }} />
                            <Button
                                variant="outlined"
                                sx={{ width: '300px', height: '60px', marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'lightsteelblue', color: 'black' }}
                                onClick={handleFinishQuiz}
                            >
                                Back to home
                            </Button>
                        </div>
                    )}


                </div>
            </div>

        </div>
    );
}