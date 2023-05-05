import MainImage from '../images/mainpage.jpg'
import * as React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


export const QuestionnaireA = () => {

    const [selectedOption, setSelectedOption] = React.useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleButtonClick = () => {
        switch(selectedOption) {
            case "option1":
                window.location.href = 'email';
                break;
            case "option2":
                window.location.href = 'mygov';
                break;
            case "option3":
                window.location.href = 'mygov';
                break;
            case "option4":
                window.location.href = 'medicare';
                break;
            case "option5":
                window.location.href = 'learningsuggestions';
                break;
            default:
                break;
        }
    };
    

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
                    <h1>Digital Service</h1>
                </div>
                <div style={{width: '50vw', margin: 'auto'}}>
                    
                    <p style={{textAlign: 'justify', fontSize: '1.2rem'}}>Questionnaire A</p>
                    <hr style={{width: '50vw', marginTop: '50px', marginBottom: "50px"}}/>
                    <p style={{textAlign: 'justify', fontSize: '1.2rem'}}>Text</p>
                    <hr style={{width: '50vw', marginTop: '50px', marginBottom: "50px"}}/>
                    <div style={{backgroundColor: 'cornsilk', padding: '20px'}}>
                        <div style={{backgroundColor: 'grey', padding: '20px', marginBottom: '20px'}}>
                            <p>Question: Which of the following best describes your need?</p>
                            <FormControlLabel control={<Checkbox value="option1" onChange={handleOptionChange} />} label="A. I want to receive and send email." />
                            <br />
                            <FormControlLabel control={<Checkbox value="option2" onChange={handleOptionChange} />} label="B. I want to check out Super summary for this financial year." />
                            <br />
                            <FormControlLabel control={<Checkbox value="option3" onChange={handleOptionChange} />} label="C. I want to access government services online." />
                            <br />
                            <FormControlLabel control={<Checkbox value="option4" onChange={handleOptionChange} />} label="D. I want to check my Medicare claims and statements." />
                            <br />
                            <FormControlLabel control={<Checkbox value="option5" onChange={handleOptionChange} />} label="E. Not of above." />
                            <br />
                            <Button variant="contained" sx = {{width:'150px',height:'50px',backgroundColor: 'aliceblue',fontsize:'1.5rem',fontWeight: 'bolder',display: 'block',margin:'auto'}} onClick={handleButtonClick}>submit</Button>                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}