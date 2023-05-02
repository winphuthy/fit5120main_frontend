import * as React from 'react';
import Button from '@mui/material/Button';



export function QuizResult() {

    return (
        <div style={{backgroundColor: 'darkgray',paddingTop: '50px', height: '100vh', width: '100vw'}}>
            <h1>Quiz result</h1>
            <p>Have a look at your response breakdown below for information on how you’ve done, and where you could have improved on</p>
            <Button variant="contained" sx={{width: '300px',marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'orange'}} onClick={() => window.location.href='colorchange'}>NEXT</Button>     
        </div>
        
    );
}