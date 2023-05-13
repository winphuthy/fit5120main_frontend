import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import MainImage from '../images/mainpage.jpg'
import Button from '@mui/material/Button';
import data from '../const/Questionnaire.json'
import { useState } from 'react';
import ArrowImage from '../images/productHeroArrowDown.png'


export const Questionnaire = () => {

    const [displayQuestionnaireA, setDisplayQuestionnaireA] = React.useState(false);
    const [displayQuestionnaireB, setDisplayQuestionnaireB] = React.useState(false);
    const [displayQuestionnaireC, setDisplayQuestionnaireC] = React.useState(false);
    const [selectedOptionA, setSelectedOptionA] = React.useState("");
    const [selectedOptionB, setSelectedOptionB] = React.useState("");
    const [feedback, setFeedback] = useState(null);
    const [displayFeedback, setDisplayFeedback] = useState(false);
    const [link,setLink] = useState(null);


    const handleDigitalServiceButtonClick = () => {
        setDisplayQuestionnaireA(true);
        setDisplayQuestionnaireB(false);
        setDisplayQuestionnaireC(false);
        const questionA = document.getElementById('questionA');
        if (questionA) {
            questionA.scrollIntoView({ behavior: "smooth" });
        }

    };

    const handleDigitalCommunicationButtonClick = () => {
        setDisplayQuestionnaireA(false);
        setDisplayQuestionnaireB(true);
        setDisplayQuestionnaireC(false);
        const questionB = document.getElementById('questionB');
        if (questionB) {
            questionB.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleNoneButtonClick = () => {
        setDisplayQuestionnaireA(false);
        setDisplayQuestionnaireB(false);
        setDisplayQuestionnaireC(true);
        const questionC = document.getElementById('questionC');
        if (questionC) {
            questionC.scrollIntoView({ behavior: "smooth" });
        }
    }


    const handleOptionChangeA = (event) => {
        setSelectedOptionA(event.target.value);
    }

    const handleOptionChangeB = (event) => {
        setSelectedOptionB(event.target.value);
    }

    const submitFormA = () => {
        const feedbackText = data[0].options.find(
            (option) => option.text === selectedOptionA
        ).feedback;
        setFeedback(feedbackText);
        setLink(data[0].options.find(
            (option) => option.text === selectedOptionA
        ).link);
        setDisplayFeedback(true);
    }

    const submitFormB = () => {
        const feedbackText = data[1].options.find(
            (option) => option.text === selectedOptionB
        ).feedback;
        setLink(data[1].options.find(
            (option) => option.text === selectedOptionB
        ).link);
        setFeedback(feedbackText);
        setDisplayFeedback(true);
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
                        <Button variant="outlined" sx={{ width: '50vw', height: '50px',fontWeight: 'bolder', color: 'white' }} onClick={handleDigitalServiceButtonClick}>
                        Digital services: Access to online tools that can aid with public services</Button>
                        <Button variant="outlined" sx={{ width: '50vw',height: '50px', fontWeight: 'bolder', color: 'white' }} onClick={handleDigitalCommunicationButtonClick}>
                        Digital Communications: Online tools for messaging, calling, video calling</Button>
                        <Button variant="outlined" sx={{ width: '50vw', height: '50px', fontWeight: 'bolder', color: 'white' }} onClick={handleNoneButtonClick}>
                            None
                        </Button>
                    </Stack>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <img src={ArrowImage} alt="arrow" />
                    </div>
                    <hr style={{ width: '50vw', marginTop: '30px' }} />

                </div>
            </div>


            {displayQuestionnaireA && (
                <div id="questionA" style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.0rem', textAlign: 'justify', marginTop: '30px' }}>

                    <div style={{ backgroundColor: 'cornsilk', padding: '20px' }}>
                        <div style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px' }}>

                            <p>Question A: Which of the following best describes your need?</p>
                            {data[0].options.map((option) => (
                                <div>
                                    <Checkbox checked={selectedOptionA === option.text} onChange={handleOptionChangeA} value={option.text} /> <label>{option.text}</label>
                                    <br />
                                </div>
                            ))}
                            <br />
                            <br />
                            <Button variant="contained" sx={{ width: '150px', height: '50px', backgroundColor: 'aliceblue', fontsize: '1.5rem', fontWeight: 'bolder', display: 'block', margin: 'auto' }} onClick={submitFormA}>submit</Button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <img src={ArrowImage} alt="arrow" />
                    </div>
                    <hr style={{ width: '50vw', marginTop: '30px', marginBottom: "30px" }} />
                    {displayFeedback && (
                        <div style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px'}}>
                            <p>{feedback}</p>
                            <a  href= {link}>{link}</a>
                        </div>
                    )}

                </div>
            )}
            {displayQuestionnaireB && (
                <div id='questionB' style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.0rem', textAlign: 'justify' ,marginTop:'30px'}}>

                    <div style={{ backgroundColor: 'cornsilk', padding: '20px' }}>
                        <div style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px' }}>

                            <p>Question B: Which of the following best describes your need?</p>
                            {data[1].options.map((option) => (
                                <div>
                                    <Checkbox checked={selectedOptionB === option.text} onChange={handleOptionChangeB} value={option.text} /> <label>{option.text}</label>
                                    <br />
                                </div>
                            ))}
                            <br />
                            <br />
                            <Button variant="contained" sx={{ width: '150px', heighåt: '50px', backgroundColor: 'aliceblue', fontsize: '1.5rem', fontWeight: 'bolder', display: 'block', margin: 'auto' }} onClick={submitFormB}>submit</Button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <img src={ArrowImage} alt="arrow" />
                    </div>
                    <hr style={{ width: '50vw', marginTop: '30px', marginBottom: "30px" }} />
                    {displayFeedback && (
                        <div style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px' }}>
                            <p>{feedback}</p>
                            <a  href= {link}>{link}</a>
                        </div>
                    )}

                </div>
            )}

            {displayQuestionnaireC && (
                <div id='questionC' style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.0rem', textAlign: 'justify',marginTop:'30px'}}>
                    <div style={{ backgroundColor: 'grey', padding: '20px' }}>
                        <p>It looks like none of our current guides will match your desired goal. If you’d like a guide created for a specific platform, you can make a suggestion over on our learning suggestions page: </p>
                        <a  href= "https://lesterwithhistreasure.de/learningsuggestions">https://lesterwithhistreasure.de/learningsuggestions</a>
                    </div>
                </div>
            )}

        </div>

    )

}