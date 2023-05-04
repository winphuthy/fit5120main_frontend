import MainImage from '../../images/mainpage.jpg'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export function QuizResult() {

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
                    <h1>Quiz Result</h1>
                </div>
                <div style={{width: '55vw', margin: 'auto'}}>
                    <p style={{textAlign: 'justify', fontSize: '1.2rem'}}>Have a look at your response breakdown below for information on how you’ve done, and where you could have improved on </p>
                    <hr style={{width: '55vw', marginTop: '70px', marginBottom: "60px"}}/>
                    <Stack justifyContent="center" alignItems="center">
                        <Button variant="contained" sx = {{width:'200px',height:'60px'}} onClick={() => window.location.href='/'}>Home page</Button> {/* add onClick event to button */}
                    </Stack>
  
                </div>
            </div>
        </div>
        
    );
}