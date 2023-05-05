import * as React from 'react';
import { useState } from 'react'; // import useState hook
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import multiQuiz from '../../const/MultiQuiz.json'; 
import MainImage from '../../images/mainpage.jpg'

export function Quiz1() {
    const [selectedColor, setSelectedColor] = useState(''); // create state for selected color
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // create state for current question index

    const currentQuestion = multiQuiz[currentQuestionIndex]; // get the current question from MultiQuiz based on currentQuestionIndex

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1); // increment currentQuestionIndex by 1 to move to the next question
        setSelectedColor(''); 
    }

    return (
        <div style={{
            backgroundColor: "#333333", paddingBottom: '100px',
        }}>
            <div style={{
                color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.5rem', margin: 'auto',
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
                    <h1>Digital Securities Quiz</h1>
                </div>
                <div style={{width: '45vw',margin:'auto'}}>
            <h3 style={{color:'orange'}}>Question {currentQuestion.id + 1} of {multiQuiz.length}</h3> {/* display current question number */}
            <h3>{currentQuestion.content}</h3> 
            <Stack direction="column" spacing={1} sx={{display: 'flex', alignItems: 'center', marginTop: '50px'}} > 
                {/* map through current question's options and display them */}
                {currentQuestion.options.map((option, index) => (
                    <Button 
                        key={index} 
                        variant="contained" 
                        sx={{width: '500px', color:'white',backgroundColor: selectedColor === `op${index + 1}` ? 'cornflowerblue' : 'initial'}} 
                        onClick={() => setSelectedColor(`op${index + 1}`)}
                    >
                        {option.text}
                    </Button>
                ))}
            </Stack>
            <Button 
                variant="contained" 
                sx={{width: '300px',marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'orange'}}
                onClick={handleNextQuestion} // add onClick event to move to the next question
            >
                Submit
            </Button>            
            </div>

            </div>
        </div>
    );
}
