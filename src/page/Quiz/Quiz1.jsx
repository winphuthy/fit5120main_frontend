import * as React from 'react';
import { useState } from 'react'; // import useState hook
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import multiQuiz from '../../const/MultiQuiz.json'; // import MultiQuiz json file

export function Quiz1() {
    const [selectedColor, setSelectedColor] = useState(''); // create state for selected color

    const currentQuestion = multiQuiz[0]; // get the first question from MultiQuiz

    return (
        <div style={{backgroundColor: 'darkgray',paddingTop: '50px', height: '100vh', width: '100vw'}}>
            <h1 style={{textAlign:'center'}}>Digital Securities Quiz</h1>
            <div style={{width: '40vw', margin: 'auto',textAlign: 'justify',paddingTop: '50px'}}>
            <h2 style={{color:'orange'}}>Question {currentQuestion.id + 1} of {multiQuiz.length}</h2> {/* display current question number */}
            <h2>{currentQuestion.content}</h2> {/* display current question */}
            <Stack direction="column" spacing={1} sx={{display: 'flex', alignItems: 'center', marginTop: '50px'}} > 
                {/* map through current question's options and display them */}
                {currentQuestion.options.map((option, index) => (
                    <Button 
                        key={index} 
                        variant="contained" 
                        sx={{width: '500px', backgroundColor: selectedColor === `op${index + 1}` ? 'cornflowerblue' : 'initial'}} 
                        onClick={() => setSelectedColor(`op${index + 1}`)}
                    >
                        {option.text}
                    </Button>
                ))}
            </Stack>
            <Button variant="contained" sx={{width: '300px',marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'orange'}} onClick={() => window.location.href='quiz2'}>NEXT</Button>            </div>
        </div>
    );
}