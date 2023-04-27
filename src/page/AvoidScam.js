import './AvoidScam.css';
import MainImage from '../images/Avoiding_scam.jpeg'
import {useRef, useState} from 'react';
import Button from '@mui/material/Button';
import output from '../images/output2.png'
import {backendIP} from "../const/const";


export function AvoidScam() {

    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const scamInputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(scamInputRef.current.value);
        fetch_scamInput();
    };

    async function fetch_scamInput() {
        await fetch(backendIP + '/spamdetection', {
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
                    aware of how to detect if something is a scam.
                    <br/>
                    <br/>
                    Below is a word cloud of some commonly used phrases and terms in scams. If you see a combination of
                    the phrases shown below, do be careful when providing personal and sensitive information. </p>
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
                <h3> How to use the scam detector:</h3>
                <p style={{textAlign: 'justify', fontSize: '1.1rem'}}> - Using your mouse, left click on the first
                    letter of the message you’d like us to scan, whilst holding the left click down, drag your mouse
                    down to the last letter within the same message</p>
                <p style={{textAlign: 'justify', fontSize: '1.1rem'}}> - Press the “CTRL” and “C” keys at the same time
                    to copy the text</p>
                <p style={{textAlign: 'justify', fontSize: '1.1rem'}}> - Navigate to our Scam Detector, and within the
                    input box available, press the “CTRL” and “V” keys at the same time to paste the text into our
                    detector</p>
                <p style={{textAlign: 'justify', fontSize: '1.1rem'}}> - Hit the “SUBMIT VOTE” button</p>
                <p style={{textAlign: 'justify', fontSize: '1.1rem'}}> - Our detector will then inform you of the
                    percentage likelihood of the message being a scam</p>
            </div>
            <hr style={{width: '70vw', margin: 'auto', marginTop: '50px'}}/>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '50px'
            }}>
                <div style={{position: 'relative', width: '100%'}}>
                    <input type="text" ref={scamInputRef} style={{
                        height: 150,
                        backgroundColor: 'rgba(220, 220, 220, 0.4)',
                        fontWeight: 'bolder',
                        fontSize: '1.3rem',
                        width: 800
                    }}/>
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
            <div style={{width: '45vw', margin: 'auto', marginTop: '50px'}}>
                <p style={{textAlign: 'justify', fontSize: '1.5rem', color: "floralwhite"}}> {result}</p>
            </div>
        </div>
    )
}