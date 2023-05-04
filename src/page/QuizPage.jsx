import MainImage from '../images/mainpage.jpg'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function QuizPage() {




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
                    color: 'black', // fontSize: '2.8rem',
                }}>
                    <h1>How much do you know about digital security?</h1>
                </div>
                <div style={{width: '55vw', margin: 'auto'}}>
                    <p style={{textAlign: 'justify', fontSize: '1.2rem'}}>Test your knowledge on digital safety and cyber security by taking our quick 10 question quiz. </p>
                    <p style={{textAlign: 'justify', fontSize: '1.2rem'}}>Once you’ve finished, we’ll show you how you did on the quiz, and give you some extra information on questions you may have gotten wrong </p>
                    <hr style={{width: '55vw', marginTop: '70px', marginBottom: "60px"}}/>
                    <Stack justifyContent="center" alignItems="center">
                        <Button variant="contained" sx = {{width:'200px',height:'80px'}} onClick={() => window.location.href='quiz1'}>Start Quiz</Button> {/* add onClick event to button */}
                    </Stack>
  
                </div>
            </div>
        </div>
    );
}