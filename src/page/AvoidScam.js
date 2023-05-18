import './AvoidScam.css';
import MainImage from '../images/websitebackgroundnew2.jpg'
import * as React from 'react';
import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import output from '../images/wc_new.png'
import { backendIP } from "../const/const";
import TextField from '@mui/material/TextField';
import ReactSpeedometer from "react-d3-speedometer";

import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';


const speedometerColor = '#030303';


export function AvoidScam() {

    const [result, setResult] = useState('');
    const [rate, setRate] = useState(0);

    const scamInputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(scamInputRef.current.value);
        fetch_scamInput();
    };
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




    async function fetch_scamInput() {
        await fetch(backendIP + 'spamdetection', {
            method: "POST", mode: "cors", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ "text": scamInputRef.current.value })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setRate(data.result_num)
                setResult(data.result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div style={{
            backgroundColor: "#333333",
            height: "auto",
            paddingBottom: '50px',
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
                <p style={{ fontSize: "xxx-large", fontWeight: "bolder", color: 'black' }}>Avoiding Scams</p>
            </div>
            <div style={{
                color: 'floralwhite',
                fontWeight: 'bolder',
                fontSize: '1.5rem',
                width: '70vw',
                margin: 'auto',
                paddingLeft: '50px',
                paddingRight: '50px'
            }}>
                <h3> Best Practices to Avoid Scams</h3>
                <p style={{ textAlign: 'justify', fontSize: '1.3rem' }}>Digital scams tend to impersonate digital services
                    from organisations such as banks and credit card companies, they’ll tend to try and steal personal
                    information, passwords, and money from you, so as you begin digitalising yourself, it’s best to be
                    aware of how to detect if something is a scam.</p>
                <hr style={{ width: '70vw', margin: 'auto', marginTop: '50px' }} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
                    <img src={output} alt="word image" style={{ width: '50%', height: 'auto' }} />
                </div>
                <hr style={{ width: '70vw', margin: 'auto', marginTop: '50px' }} />
                <h3> Scam Detector</h3>
                <p style={{ textAlign: 'justify', fontSize: '1.1rem' }}>If you’re concerned that something could
                    potentially be a scam, use our scam detector below to get our view on how likely it is that it is in
                    fact a scam. Our Scam detector will read your inputted text, and let you know the percentage
                    likelihood of the text being a scam. </p>
                <hr style={{ width: '70vw', margin: 'auto', marginTop: '50px' }} />

                <h3> How to use the scam detector:</h3>
                <ol style={{ display: "flex", gap: '0.8rem', flexDirection: "column" }}>
                    <li style={{ textAlign: 'justify', fontSize: '1.1rem' }}> Using your mouse, left click on the first
                        letter of the message you’d like us to scan
                    </li>
                    <li style={{ textAlign: 'justify', fontSize: '1.1rem' }}> Whilst holding the left click down, drag
                        your
                        mouse
                        down to the last letter within the same message
                    </li>
                    <li style={{ textAlign: 'justify', fontSize: '1.1rem' }}> Press the “CTRL” and “C” keys at the same
                        time
                        to copy the text
                    </li>
                    <li style={{ textAlign: 'justify', fontSize: '1.1rem' }}> Press the “CTRL” and “V” keys at the same
                        time
                        to paste the text into our
                        detector
                    </li>
                    <li style={{ textAlign: 'justify', fontSize: '1.1rem' }}> Hit the “SUBMIT VOTE” button</li>
                    <li style={{ textAlign: 'justify', fontSize: '1.1rem' }}> Our detector will then inform you of the
                        percentage likelihood of the message being a scam
                    </li>
                </ol>

            </div>
            <hr style={{ width: '70vw', margin: 'auto', marginTop: '50px' }} />

            <div style={{
                // width: '70vw',
                // height: "auto",
                margin: 'auto',
                marginTop: '30px',
                display: "flex",
                justifyContent: "center"
            }}>
                <ReactSpeedometer
                    width={600}
                    height={350}
                    // fluidWidth={true}
                    value={rate}
                    maxValue={0}
                    minValue={100}
                    ringWidth={90}
                    customSegmentLabels={[
                        {
                            text: "Very height",
                            position: "INSIDE",
                            color: speedometerColor,
                        },
                        {
                            text: "Height",
                            position: "INSIDE",
                            color: speedometerColor,
                        },
                        {
                            text: "Medium",
                            position: "INSIDE",
                            color: speedometerColor
                        },
                        {
                            text: "Low chance",
                            position: "INSIDE",
                            color: speedometerColor,
                        },
                        {
                            text: "Very low",
                            position: "INSIDE",
                            color: speedometerColor,
                        },]}
                />
            </div>

            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60vw'
            }}>
                <div style={{ position: 'relative', width: '100%' }}>
                    <TextField
                        id="filled-multiline-static"
                        label="Paste Your Message Here"
                        multiline
                        fullWidth={true}
                        rows={6}
                        variant="filled"
                        inputProps={{ ref: scamInputRef }}
                    />
                    < Button onClick={handleSubmit} style={{
                        position: 'absolute',
                        bottom: 2,
                        right: 6,
                        height: 40,
                        width: 100,
                        backgroundColor: "grey"
                    }} variant="outlined" href="#outlined-buttons">
                        Submit
                    </Button>
                </div>
            </form>


            <div style={{ width: '45vw', margin: 'auto' }}>
                <p style={{ textAlign: 'justify', fontSize: '1.5rem', color: "floralwhite" }}> {result}</p>
            </div>
            
            <hr style={{ width: '70vw', margin: 'auto', marginTop: '50px', marginBottom: '50px' }} />
            <h2 style={{fontWeight: "bolder",color:'whitesmoke'}}>Test your password: </h2>
            <p style={{fontWeight: "bolder",fonts:'1.5rem',color:'whitesmoke'}}>Tip: Longer passwords with more varying characters are much more secure</p>
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
            <div id='passwordFeedback' style={{fontWeight: 'bold',paddingTop:'30px',fontSize: '1.2rem',display:'none'}}>
            {password.length > 8 && uppercase && lowercase && number && symbol ?
                <div style={{ color: 'green'}}>Password is secure</div> :
                <div style={{ color: 'red'}}>Password is too simple</div>
            }
            </div>
        </div>

    )
}