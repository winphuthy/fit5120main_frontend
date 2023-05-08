import MainImage from '../images/mainpage.jpg'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export const Questionnaire = () => {

    const [displayQuestionnaireA, setDisplayQuestionnaireA] = React.useState(false);
    const [displayQuestionnaireB, setDisplayQuestionnaireB] = React.useState(false);

    const handleDigitalServiceButtonClick = () => {
        setDisplayQuestionnaireA(true);
        setDisplayQuestionnaireB(false);
    };

    const handleDigitalCommunicationButtonClick = () => {
        setDisplayQuestionnaireA(false);
        setDisplayQuestionnaireB(true);
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
                    <h1>Learning Recommendation</h1>
                </div>
                <div style={{ width: '50vw', margin: 'auto' }}>
                    <p style={{ textAlign: 'justify', fontSize: '1.2rem' }}>If you’re unsure about what software might best suit your needs, have a quick go at our recommendations questionnaire, and we’ll provide you with the best recommendations</p>
                    <hr style={{ width: '50vw', marginTop: '30px', marginBottom: "50px" }} />
                    <p style={{ textAlign: 'justify', fontSize: '1.2rem' }}>Digital Service: Platforms which can be used for multiple purposes such as:
                        <br />-  Sending electronic mail
                        <br />-  Storing medical information
                        <br />-  Storing personally identifying info for government services</p>
                    <br />
                    <p style={{ textAlign: 'justify', fontSize: '1.2rem' }}>Digital Communications: Platforms that can be used for online messaging, features include:
                        <br />-  Group messaging
                        <br />-  Messaging from anywhere with an internet connection
                        <br />-  Video calling</p>
                    <hr style={{ width: '50vw', marginTop: '50px', marginBottom: "50px" }} />
                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', marginTop: '50px' }} >
                        <Button variant="contained" sx={{ width: '350px', height: '70px', backgroundColor: 'aliceblue', fontsize: '1.5rem', fontWeight: 'bolder' }} onClick={handleDigitalServiceButtonClick}>Digital Service</Button> {/* add onClick event to button */}
                        <Button variant="contained" sx={{ width: '350px', height: '70px', backgroundColor: 'aliceblue', fontsize: '1.5rem', fontWeight: 'bolder' }} onClick={handleDigitalCommunicationButtonClick}>Digital Communications</Button>
                    </Stack>
                </div>
            </div>

            {displayQuestionnaireA && (
                <div style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.2rem', textAlign: 'justify' }}>
                    <hr style={{ width: '50vw', marginTop: '50px', marginBottom: "50px" }} />
                    <p>some describes for A</p>
                    <hr style={{ width: '50vw', marginTop: '50px', marginBottom: "50px" }} />
                    <div style={{ backgroundColor: 'cornsilk', padding: '20px' }}>
                        <div style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px' }}>

                            <p>Question: Which of the following best describes your need?</p>
                            <FormControlLabel control={<Checkbox />} label="A. I want to receive and send email." labelPlacement="end" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="B. I want to check out Super summary for this financial year." labelPlacement="end" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="C. I want to access government services online." labelPlacement="end" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="D. I want to check my Medicare claims and statements." labelPlacement="end" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="E. Not of above." labelPlacement="end" />
                            <br />
                            <br />
                            <Button variant="contained" sx={{ width: '150px', height: '50px', backgroundColor: 'aliceblue', fontsize: '1.5rem', fontWeight: 'bolder', display: 'block', margin: 'auto' }} >submit</Button>
                        </div>
                    </div>
                </div>
            )}

            {displayQuestionnaireB && (
                <div style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.2rem', textAlign: 'justify' }}>
                    <hr style={{ width: '50vw', marginTop: '50px', marginBottom: "50px" }} />
                    <p>some describes for B</p>
                    <hr style={{ width: '50vw', marginTop: '50px', marginBottom: "50px" }} />
                    <div style={{ backgroundColor: 'cornsilk', padding: '20px' }}>
                        <div style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px' }}>

                            <p>Question: Which of the following best describes your need?</p>
                            <FormControlLabel control={<Checkbox />} label="A. I want to chat with my friend and family via text but don’t want to pay." labelPlacement="whatsapp" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="B. I want to chat with my friends and family face to face, I want to see them clearly." labelPlacement="zoom" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="C. I want to see what my friends and families are doing, meet some new people, and want to know if there is anything happening in my neighbourhood. " labelPlacement="facebook" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="D. I want to chat with my friends and family face to face, wherever I am." labelPlacement="facetime" />
                            <br />
                            <FormControlLabel control={<Checkbox />} label="E. Not of above." labelPlacement="learningsuggestions" />
                            <br />
                            <br />
                            <Button variant="contained" sx={{ width: '150px', heighåt: '50px', backgroundColor: 'aliceblue', fontsize: '1.5rem', fontWeight: 'bolder', display: 'block', margin: 'auto' }} >submit</Button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )

}