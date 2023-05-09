import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import MainImage from '../images/mainpage.jpg'
import Button from '@mui/material/Button';


export const Questionnaire = () => {

    const [displayQuestionnaireA, setDisplayQuestionnaireA] = React.useState(false);
    const [displayQuestionnaireB, setDisplayQuestionnaireB] = React.useState(false);
    const [selectedOptionA, setSelectedOptionA] = React.useState("");
    const [selectedOptionB, setSelectedOptionB] = React.useState("");
    
    const handleDigitalServiceButtonClick = () => {
        setDisplayQuestionnaireA(true);
        setDisplayQuestionnaireB(false);
    };

    const handleDigitalCommunicationButtonClick = () => {
        setDisplayQuestionnaireA(false);
        setDisplayQuestionnaireB(true);
    };

    const handleOptionChangeA = (event) => {
        setSelectedOptionA(event.target.value);
    }

    const handleOptionChangeB = (event) => {
        setSelectedOptionB(event.target.value);
    }

    const submitFormA = () => {
    
            console.log(`Option A Selected: ${selectedOptionA}`);

    }

    const submitFormB = () => {
        if(selectedOptionB !== ""){
            console.log(`Option B Selected: ${selectedOptionB}`);
           
        }
        else{
            console.log("No option selected for Question B");
        }
    }

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
                    color: 'black', 
                }}>
                    <h1>Learning Recommendation</h1>
                </div>
                <div style={{ width: '50vw', margin: 'auto' }}>
                    <p style={{ textAlign: 'justify', fontSize: '1.2rem' }}>If you’re unsure about what software might best suit your needs, have a quick go at our recommendations questionnaire, and we’ll provide you with the best recommendations</p>
                    <hr style={{ width: '50vw', marginTop: '30px', marginBottom: "50px" }} />
                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', marginTop: '50px' }} >
                        <Button variant="outlined" sx={{ width: '50vw', fontWeight: 'bolder' ,color:'white'}} onClick={handleDigitalServiceButtonClick}>
                        Digital Service: Platforms which can be used for multiple purposes such as:
                        <br />-  Sending electronic mail
                        <br />-  Storing medical information
                        <br />-  Storing personally identifying info for government services</Button> 
                        <Button variant="outlined" sx={{ width: '50vw', fontWeight: 'bolder' ,color:'white'}} onClick={handleDigitalCommunicationButtonClick}>
                        Digital Communications: Platforms that can be used for online messaging, features include:
                        <br />-  Group messaging
                        <br />-  Messaging from anywhere with an internet connection
                        <br />-  Video calling</Button> 
                    </Stack>
                </div>
            </div>

            {displayQuestionnaireA && (
                <div style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.0rem', textAlign: 'justify' }}>
                    <hr style={{ width: '50vw', marginTop: '50px', marginBottom: "50px" }} />
                    <div style={{ backgroundColor: 'cornsilk', padding: '20px' }}>
                        <div style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px' }}>

                            <p>Question A: Which of the following best describes your need?</p>
                            <Checkbox checked={selectedOptionA === 'email'} onChange={handleOptionChangeA} value="email"/> <label>A. I want to receive and send email.</label>
                            <br />
                            <Checkbox checked={selectedOptionA === 'mygovb'} onChange={handleOptionChangeA} value="mygovb"/> <label>B. I want to check out Super summary for this financial year.</label>
                            <br />
                            <Checkbox checked={selectedOptionA === 'mygovc'} onChange={handleOptionChangeA} value="mygovc"/><label>C. I want to access government services online.</label>
                            <br />
                            <Checkbox checked={selectedOptionA === 'medicare'} onChange={handleOptionChangeA} value="medicare"/><label>D. I want to check my Medicare claims and statements.</label>
                            <br />
                            <Checkbox checked={selectedOptionA === 'learningsuggestions'} onChange={handleOptionChangeA} value="learningsuggestions"/> <label>E. Not of above.</label>
                            <br />
                            <br />
                            <Button variant="contained" sx={{ width: '150px', height: '50px', backgroundColor: 'aliceblue', fontsize: '1.5rem', fontWeight: 'bolder', display: 'block', margin: 'auto' }} onClick={submitFormA}>submit</Button>
                        </div>
                    </div>
                </div>
            )}
            {displayQuestionnaireB && (
                <div style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.0rem', textAlign: 'justify' }}>
                    <hr style={{ width: '50vw', marginTop: '50px', marginBottom: "50px" }} />
                    <div style={{ backgroundColor: 'cornsilk', padding: '20px' }}>
                        <div style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px' }}>

                            <p>Question B: Which of the following best describes your need?</p>
                            <Checkbox checked={selectedOptionB === 'A'} onChange={handleOptionChangeB} value="A"/> <label>A. I want to chat with my friend and family via text but don’t want to pay.</label>
                            <br />
                            <Checkbox checked={selectedOptionB === 'B'} onChange={handleOptionChangeB} value="B"/> <label>B. I want to chat with my friends and family face to face, I want to see them clearly.</label>
                            <br />
                            <Checkbox checked={selectedOptionB === 'C'} onChange={handleOptionChangeB} value="C"/>  <label>C. I want to see what my friends and families are doing, meet some new people, and want to know if there is anything happening in my neighbourhood.</label> 
                            <br />
                            <Checkbox checked={selectedOptionB === 'D'} onChange={handleOptionChangeB} value="D"/> <label>D. I want to chat with my friends and family face to face, wherever I am.</label>
                            <br />
                            <Checkbox checked={selectedOptionB === 'E'} onChange={handleOptionChangeB} value="E"/>  <label>E. Not of above.</label>
                            <br />
                            <br />
                            <Button variant="contained" sx={{ width: '150px', heighåt: '50px', backgroundColor: 'aliceblue', fontsize: '1.5rem', fontWeight: 'bolder', display: 'block', margin: 'auto' }} onClick={submitFormB}>submit</Button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )

}