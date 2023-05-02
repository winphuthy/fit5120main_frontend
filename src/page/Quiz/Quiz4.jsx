import * as React from 'react';
import { useState } from 'react'; // import useState hook
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function Quiz4() {
    const [selectedColor, setSelectedColor] = useState(''); // create state for selected color

    return (
        <div style={{backgroundColor: 'darkgray',paddingTop: '50px', height: '100vh', width: '100vw'}}>
            <h1 style={{textAlign:'center'}}>Digital Securities Quiz</h1>
            <div style={{width: '55vw', margin: 'auto',textAlign: 'justify'}}>
            <h2 style={{color:'orange'}}>Question 4 of 10</h2>
            <h2>Click on an answer and select next once you’ve confirmed your answer</h2>
            <h2>Sample Question: if website uses cookies, what does this mean?</h2>
            <Stack direction="column" spacing={1} sx={{display: 'flex', alignItems: 'center', marginTop: '50px'}} > 
                <Button variant="contained" sx={{width: '300px', backgroundColor: selectedColor === 'op1' ? 'cornflowerblue' : 'initial'}} onClick={() => setSelectedColor('op1')}>op1</Button>
                <Button variant="contained" sx={{width: '300px', backgroundColor: selectedColor === 'op2' ? 'cornflowerblue' : 'initial'}} onClick={() => setSelectedColor('op2')}>op2</Button>
                <Button variant="contained" sx={{width: '300px', backgroundColor: selectedColor === 'op3' ? 'cornflowerblue' : 'initial'}} onClick={() => setSelectedColor('op3')}>op3</Button>
                <Button variant="contained" sx={{width: '300px', backgroundColor: selectedColor === 'op4' ? 'cornflowerblue' : 'initial'}} onClick={() => setSelectedColor('op4')}>op4</Button>
            </Stack>
            <Button variant="contained" sx={{width: '300px',marginTop: '50px', marginLeft: 'auto', marginRight: 'auto', display: 'block', backgroundColor: 'orange'}} onClick={() => window.location.href='quiz5'}>NEXT</Button>            </div>
        </div>
    );
}