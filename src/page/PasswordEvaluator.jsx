import './AvoidScam.css';
import MainImage from '../images/websitebackgroundnew2.jpg'
import * as React from 'react';
import { useRef, useState } from 'react';


import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';


export function PasswordEvaluator() {

    const [password, setPassword] = useState('');
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [number, setNumber] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [count, setCount] = useState(0);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setUppercase(/[A-Z]/.test(event.target.value));
        setLowercase(/[a-z]/.test(event.target.value));
        setNumber(/[0-9]/.test(event.target.value));
        setSymbol(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(event.target.value));
        setCount(event.target.value.length);
        const passwordFeedback = document.getElementById('passwordFeedback');
        passwordFeedback.style.display = 'block';
    }



    return (
        <div style={{
            backgroundColor: "#333333",
            height: "auto",
            paddingBottom: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                height: '45vh',
                width: '100%',
                opacity: '0.7',
                backgroundImage: `url(${MainImage})`,
                backgroundPositionY: '-200px',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <p style={{ fontSize: "xxx-large", fontWeight: "bolder", color: 'black' }}>Password Evaluator</p>
            </div>

            <p style={{fontWeight: "bolder",color:'whitesmoke',fontSize:'1.8rem'}}>Test your password </p>
            <p style={{fontWeight: "bolder",fontSize:'1.3rem',color:'whitesmoke'}}>Tip: Longer passwords with more varying characters are much more secure</p>
            <div style={{ backgroundColor: 'beige', padding: '20px', width: '60vw', fontWeight: "bolder", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', fontSize: '1.2rem' }}>
                <p style={{ fontSize: '1.5rem' }}>Type a password</p>
                <Box component="form">
                    <FormControl  sx={{ width: '58vw', background: 'grey' }}>
                        <OutlinedInput placeholder="Type the password here" onChange={handlePasswordChange} />
                    </FormControl>
                </Box>
                <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', width: '55vw' }}>
                    <span style={{ color: count === 0 ? 'grey' : 'black' }}>{count} characters containing:</span>
                    <span style={{ color: uppercase ? 'green' : 'gray' }}>Uppercase</span>
                    <span style={{ color: lowercase ? 'green' : 'gray' }}>Lowercase</span>
                    <span style={{ color: number ? 'green' : 'gray' }}>Number</span>
                    <span style={{ color: symbol ? 'green' : 'gray' }}>Symbol</span>
                </div>
            </div>
            <div id='passwordFeedback' style={{fontWeight: 'bold',paddingTop:'30px',fontSize: '1.3rem',display:'none'}}>
            {password.length > 8 && uppercase && lowercase && number && symbol ?
                <div style={{ color: 'green'}}>Password is secure</div> :
                <div style={{ color: 'red'}}>Password is too simple</div>
            }
            </div>
        </div>

    )
}