import * as React from 'react';
import ProductHero from "../templates/modules/views/ProductHero";
import ProductValues from "../templates/modules/views/ProductValues";
/*
import ProductCategories from "../templates/modules/views/ProductCategories";
import ProductHowItWorks from "../templates/modules/views/ProductHowItWorks";
import ProductCTA from "../templates/modules/views/ProductCTA";
import ProductSmokingHero from "../templates/modules/views/ProductSmokingHero";
*/
import AppFooter from "../templates/modules/views/AppFooter";
import InteractionChart from "../components/InteractionChart";

import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import MainImage from '../images/mainpage.jpg'
import Button from '@mui/material/Button';
import data from '../const/Questionnaire.json'
import { useState } from 'react';
import ArrowImage from '../images/productHeroArrowDown.png'


export default function HomePage() {


    const [displayQuestionnaireA, setDisplayQuestionnaireA] = React.useState(false);
    const [displayQuestionnaireB, setDisplayQuestionnaireB] = React.useState(false);
    const [displayQuestionnaireC, setDisplayQuestionnaireC] = React.useState(false);
    const [displayQuestionnaireD, setDisplayQuestionnaireD] = React.useState(false);

    const [selectedOptionA, setSelectedOptionA] = React.useState("");
    const [selectedOptionB, setSelectedOptionB] = React.useState("");
    const [selectedOptionD, setSelectedOptionD] = React.useState("");

    const [feedback, setFeedback] = useState(null);
    const [link, setLink] = useState(null);


    const handleDigitalServiceButtonClick = () => {
        setDisplayQuestionnaireA(true);
        setDisplayQuestionnaireB(false);
        setDisplayQuestionnaireC(false);
        setDisplayQuestionnaireD(false);

        const questionA = document.getElementById('questionA');
        if (questionA) {
            questionA.scrollIntoView({ behavior: "smooth" });
        }
        const digitalCommunication = document.getElementById('digitalCommunication');
        digitalCommunication.style.display = 'none';
        const no = document.getElementById('no');
        no.style.display = 'none';



    };

    const handleDigitalCommunicationButtonClick = () => {
        setDisplayQuestionnaireA(false);
        setDisplayQuestionnaireB(true);
        setDisplayQuestionnaireC(false);
        setDisplayQuestionnaireD(false);
        const questionB = document.getElementById('questionB');
        if (questionB) {
            questionB.scrollIntoView({ behavior: "smooth" });
        }
        const digitalService = document.getElementById('digitalService');
        digitalService.style.display = 'none';
        const no = document.getElementById('no');
        no.style.display = 'none';
    };

    const handleNoneButtonClick = () => {
        setDisplayQuestionnaireA(false);
        setDisplayQuestionnaireB(false);
        setDisplayQuestionnaireC(true);
        setDisplayQuestionnaireD(false);
        const questionC = document.getElementById('questionC');
        if (questionC) {
            questionC.style.display = 'block';
            questionC.scrollIntoView({ behavior: "smooth" });
        }
        const digitalService = document.getElementById('digitalService');
        digitalService.style.display = 'none';
        const no = document.getElementById('no');
        no.style.display = 'none';
    }


    const handleOptionChangeA = (event) => {
        setSelectedOptionA(event.target.value);
    }

    const handleOptionChangeB = (event) => {
        setSelectedOptionB(event.target.value);
    }

    const handleOptionChangeD = (event) => {
        if (event.target.checked) {
            setSelectedOptionD(event.target.value);
        }
    };

    const submitFormA = () => {
        if (selectedOptionA) {
            const feedbackText = data[0].options.find(
                (option) => option.text === selectedOptionA
            ).feedback;
            setFeedback(feedbackText);
            setLink(data[0].options.find(
                (option) => option.text === selectedOptionA
            ).link);
            const feedbackADisplay = document.getElementById('feedbackA');
            feedbackADisplay.style.display = 'block';
            feedbackADisplay.scrollIntoView({ behavior: 'smooth' });

        }
    }

    const submitFormB = () => {
        if (selectedOptionB) {
            const feedbackText = data[1].options.find(
                (option) => option.text === selectedOptionB
            ).feedback;
            setLink(data[1].options.find(
                (option) => option.text === selectedOptionB
            ).link);
            if (selectedOptionB === "B. Video Calling") {
                setDisplayQuestionnaireB(false);
                setDisplayQuestionnaireD(true);
            } else {
                const feedbackBDisplay = document.getElementById('feedbackB');
                setFeedback(feedbackText);
                feedbackBDisplay.style.display = 'block';
                feedbackBDisplay.scrollIntoView({ behavior: 'smooth' });

            }
        }
    }

    const submitFormD = () => {
        if (selectedOptionD) {

            const feedbackText = data[2].options.find(
                (option) => option.text === selectedOptionD
            ).feedback;
            setLink(data[2].options.find(
                (option) => option.text === selectedOptionD
            ).link);
            setFeedback(feedbackText);
            const feedbackDDisplay = document.getElementById('feedbackD');
            feedbackDDisplay.style.display = 'block';
            feedbackDDisplay.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        // <AppTheme title="Onepirate theme - MUI" description="A onepirate theme">
        <div>
            <React.Fragment>
                {/*<AppAppBar />*/}
                <ProductHero />
                <div style={{ background: "#333", height: "auto", paddingTop: '50px', paddingBottom: '50px' }}>
                    <div style={{ width: '70%', margin: "auto", color: "whitesmoke" }}>

                        <h3>Why are we doing this?</h3>
                        <p>Our team at Silicon Sharks have come to realise that more and more things in life are becoming readily accessible only to those with both knowledge and access to technology. We know from our data on the left of this, that Victorians from the age of 50 and above have always struggled to feel as digitally included as people in other age groups. Don’t believe it?</p>
                        <p>Filter through the different years to see the ever-present Digital Divide. With more and more things becoming digitised, we want to provide an easy to navigate platform in which users can easily learn how to access a multitude of digital services and platforms that they could then integrate into their lives, by providing clear yet concise step-by-step instructions on how to do the things they would like to do.</p>

                        <div style={{ width: "50%", height: "500px", margin: "auto", marginTop: '20px' }} >
                            <InteractionChart />
                        </div>



                        <div style={{
                            backgroundColor: "#333333", paddingBottom: '50px', paddingTop: '30px'
                        }}>
                            <div style={{
                                color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.5rem', margin: 'auto',
                            }}>

                            </div>
                            <div style={{ width: '50vw', margin: 'auto' }}>
                                <hr style={{ width: '50vw', marginTop: '30px' }} />
                                <h3>Need a recommendation?</h3>


                                <p style={{ textAlign: 'justify', fontSize: '1.2rem' }}>If you’re unsure about what software might best suit your needs, have a quick go at our recommendations questionnaire, and we’ll provide you with the best recommendations</p>
                                <hr style={{ width: '50vw', marginTop: '30px' }} />
                                <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', marginTop: '50px' }} >
                                    <Button id='digitalService' variant="outlined" sx={{ width: '50vw', height: '50px', fontWeight: 'bolder', color: 'white' }} onClick={handleDigitalServiceButtonClick}>
                                        Digital services: Access to online tools that can aid with public services</Button>
                                    <Button id='digitalCommunication' variant="outlined" sx={{ width: '50vw', height: '50px', fontWeight: 'bolder', color: 'white' }} onClick={handleDigitalCommunicationButtonClick}>
                                        Digital Communications: Online tools for messaging, calling, video calling</Button>
                                    <Button id= 'no' variant="outlined" sx={{ width: '50vw', height: '50px', fontWeight: 'bolder', color: 'white' }} onClick={handleNoneButtonClick}>
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
                                <div id='feedbackA' style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px', display: 'none' }}>
                                    <p>{feedback}</p>
                                    <a href={link}>{link}</a>
                                </div>

                            </div>
                        )}
                        {displayQuestionnaireB && (
                            <div id='questionB' style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.0rem', textAlign: 'justify', marginTop: '30px' }}>

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
                                <div id='feedbackB' style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px', display: 'none' }}>
                                    <p>{feedback}</p>
                                    <a href={link}>{link}</a>
                                </div>

                            </div>
                        )}

                        <div id='questionC' style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.0rem', textAlign: 'justify', marginTop: '30px', display: 'none' }}>
                            <div style={{ backgroundColor: 'grey', padding: '20px' }}>
                                <p>It looks like none of our current guides will match your desired goal. If you’d like a guide created for a specific platform, you can make a suggestion over on our learning suggestions page: </p>
                                <a href="https://lesterwithhistreasure.de/learningsuggestions">https://lesterwithhistreasure.de/learningsuggestions</a>
                            </div>
                        </div>

                        {displayQuestionnaireD && (
                            <div id='questionD' style={{ width: '50vw', margin: 'auto', color: 'whitesmoke', fontWeight: 'bolder', fontSize: '1.0rem', textAlign: 'justify', marginTop: '30px' }}>
                                <div style={{ backgroundColor: 'cornsilk', padding: '20px' }}>
                                    <div style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px' }}>

                                        <p>Which of the following  best describes your digital situation?</p>
                                        {data[2].options.map((option) => (
                                            <div>
                                                <Checkbox checked={selectedOptionD === option.text} onChange={handleOptionChangeD} value={option.text} /> <label>{option.text}</label>
                                                <br />
                                            </div>
                                        ))}
                                        <br />
                                        <br />
                                        <Button variant="contained" sx={{ width: '150px', heighåt: '50px', backgroundColor: 'aliceblue', fontsize: '1.5rem', fontWeight: 'bolder', display: 'block', margin: 'auto' }} onClick={submitFormD}>submit</Button>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                                    <img src={ArrowImage} alt="arrow" />
                                </div>
                                <hr style={{ width: '50vw', marginTop: '30px', marginBottom: "30px" }} />

                                <div id='feedbackD' style={{ backgroundColor: 'grey', padding: '20px', marginBottom: '20px', display: 'none' }}>
                                    <p>{feedback}</p>
                                    <a href={link}>{link}</a>
                                </div>

                            </div>
                        )}





                    </div>
                </div>
                <ProductValues />
                {/*<ProductCategories />*/}
                {/*<ProductHowItWorks />*/}
                {/*<ProductCTA />*/}
                {/*<ProductSmokingHero />*/}
                <AppFooter />
            </React.Fragment>
        </div>
        // </AppTheme>
    );
}
