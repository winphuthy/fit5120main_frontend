import './AvoidScam.css';
import MainImage from '../images/websitebackgroundnew2.jpg'
import * as React from 'react';
import {useRef, useState} from 'react';
import Button from '@mui/material/Button';
import output from '../images/wc_new.png'
import {backendIP} from "../const/const";
import TextField from '@mui/material/TextField';


export function AvoidScam() {

    const [result, setResult] = useState('');
    const scamInputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(scamInputRef.current.value);
        fetch_scamInput();
    };

    async function fetch_scamInput() {
        await fetch(backendIP + 'spamdetection', {
            method: "POST", mode: "cors", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({"text": scamInputRef.current.value})
        })
            .then((response) => response.json())
            .then((data) => {
                setResult(data);
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
                <p style={{fontSize: "xxx-large", fontWeight: "bolder", color: 'black'}}>Avoiding Scams</p>
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
                <p style={{textAlign: 'justify', fontSize: '1.3rem'}}>Digital scams tend to impersonate digital services
                    from organisations such as banks and credit card companies, they’ll tend to try and steal personal
                    information, passwords, and money from you, so as you begin digitalising yourself, it’s best to be
                    aware of how to detect if something is a scam.</p>
                <hr style={{width: '70vw', margin: 'auto', marginTop: '50px'}}/>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
                    <img src={output} alt="word image" style={{width: '50%', height: 'auto'}}/>
                </div>
                <hr style={{width: '70vw', margin: 'auto', marginTop: '50px'}}/>
                <h3> Scam Detector</h3>
                <p style={{textAlign: 'justify', fontSize: '1.1rem'}}>If you’re concerned that something could
                    potentially be a scam, use our scam detector below to get our view on how likely it is that it is in
                    fact a scam. Our Scam detector will read your inputted text, and let you know the percentage
                    likelihood of the text being a scam. </p>
                <hr style={{width: '70vw', margin: 'auto', marginTop: '50px'}}/>

                <h3> How to use the scam detector:</h3>
                <ol style={{display: "flex", gap: '0.8rem', flexDirection: "column"}}>
                    <li style={{textAlign: 'justify', fontSize: '1.1rem'}}> Using your mouse, left click on the first
                        letter of the message you’d like us to scan
                    </li>
                    <li style={{textAlign: 'justify', fontSize: '1.1rem'}}> Whilst holding the left click down, drag
                        your
                        mouse
                        down to the last letter within the same message
                    </li>
                    <li style={{textAlign: 'justify', fontSize: '1.1rem'}}> Press the “CTRL” and “C” keys at the same
                        time
                        to copy the text
                    </li>
                    <li style={{textAlign: 'justify', fontSize: '1.1rem'}}> Press the “CTRL” and “V” keys at the same
                        time
                        to paste the text into our
                        detector
                    </li>
                    <li style={{textAlign: 'justify', fontSize: '1.1rem'}}> Hit the “SUBMIT VOTE” button</li>
                    <li style={{textAlign: 'justify', fontSize: '1.1rem'}}> Our detector will then inform you of the
                        percentage likelihood of the message being a scam
                    </li>
                </ol>

            </div>
            <hr style={{width: '70vw', margin: 'auto', marginTop: '50px'}}/>


            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '30px',
                width: '60vw'
            }}>
                <div style={{position: 'relative', width: '100%'}}>
                    <TextField
                        id="filled-multiline-static"
                        label="Paste Your Message Here"
                        multiline
                        fullWidth={true}
                        rows={6}
                        variant="filled"
                        inputProps={{ref: scamInputRef}}
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

            <div style={{width: '45vw', margin: 'auto', marginTop: '30px'}}>
                <p style={{textAlign: 'justify', fontSize: '1.5rem', color: "floralwhite"}}> {result}</p>
            </div>
        </div>
    )
}