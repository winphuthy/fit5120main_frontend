import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import HomePageBox from '../../../components/HomePageBox';
import WhoWeAre from '../../../images/who_we_are.png';
import WhatGoal from '../../../images/what_our_goal.png';
import DigitalCommunicationIcon from '../../../images/DigitalCommunication.png';
import DigitalServiceIcon from '../../../images/DigitalServicesIcon.png';
import LearningSuggestions from '../../../images/ls.png';
import quiz from '../../../images/quiz.png';
import questionaire from '../../../images/questionaire.png';
import security from '../../../images/cyber-security.png';

// const item = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     px: 5,
//     , border: hovered ? '1px solid #000' : 'none',
//     cursor: 'pointer',
// };

function ProductValues() {
    return (
        <div>
            <Box
                component="section"
                sx={{display: 'flex', overflow: 'hidden', bgcolor: '#08527A'}}
            >
                <Container sx={{mt: 15, mb: 30, display: 'flex', position: 'relative'}}>
                    <Box
                        component="img"
                        src="/static/themes/onepirate/productCurvyLines.png"
                        alt="curvy lines"
                        sx={{pointerEvents: 'none', position: 'absolute', top: -180}}
                    />
                    <Grid container spacing={5}>
                        <HomePageBox icon={WhoWeAre} title="Who we are"
                                     content={'We are a team of 5 Masters of IT students from different disciplines collaborating together'}/>
                        <HomePageBox icon={WhatGoal} title="What our goal is"
                                     content={'Provide educational content to groups above 55 and improve their digital literacy skills'}/>
                        <HomePageBox icon={questionaire} title="Learning Recommendation"
                                     content={'Unsure of what you need? Answer our questions and we’ll give the best suggestion for you'}/>
                        <HomePageBox icon={DigitalCommunicationIcon} title="Digital tutorial"
                                     content={'Step-by-step instructions on how to access some of the most popular digital communications platforms'}/>
                        <HomePageBox icon={DigitalServiceIcon} title="Digital Services"
                                     content={'Step-by-step instructions on how to access some of the most commonly used digital services'}/>
                        <HomePageBox to="/avoidingscam" icon={security} title="Security"
                                     content={'Best practices on avoiding scams and creating secure passwords. Scam detector and password evaluator'}/>
                        <HomePageBox to="learningsuggestions" icon={LearningSuggestions} title="Learning Suggestions"
                                     content={"Can't find a specific guide? Visit the learning suggestions page to vote for the next guide to be created"}/>
                        <HomePageBox to="/QuizPage" icon={quiz} title="Digital Ability Test"
                                     content={"Keen to test your digital knowledge? Do so here with our comprehensive digital knowledge quiz"}/>
                    </Grid>
                </Container>
            </Box>
            {/*<Box
             component="section"
             sx={{display: 'flex', overflow: 'hidden', bgcolor: '#08527A'}}
             >
             <Container sx={{mt: 15, mb: 5, display: 'flex', position: 'relative'}}>
             <Box
             component="img"
             src="/static/themes/onepirate/productCurvyLines.png"
             alt="curvy lines"
             sx={{pointerEvents: 'none', position: 'absolute', top: -180}}
             />
             <Grid container spacing={5}>
             <Grid item xs={12} md={4}>
             <Box sx={item} style={cardColumn}>
             <Box
             component="img"
             src={WhoWeAre}
             alt="suitcase"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             Who we are:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {
             'We are a team of 5 Masters of IT students from different disciplines collaborating together'
             }

             {
             ', go for a mini-vacation just a few subway stops away from your home.'
             }
             </Typography>
             </Box>
             </Grid>
             <HomePageBox icon={WhoWeAre} title="Who we are" content={'We are a team of 5 Masters of IT students from different disciplines collaborating together'}/>
             <Grid item xs={12} md={4}>
             <Box sx={item} style={cardColumn}>
             <Box
             component="img"
             src={WhatGoal}
             alt="graph"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             What our goal is:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {
             'Provide educational content to groups above 55 and improve their digital literacy skills '
             }

             {'your Sundays will not be alike.'}
             </Typography>
             </Box>
             </Grid>
             <HomePageBox icon={WhatGoal} title="What our goal is" content={'Provide educational content to groups above 55 and improve their digital literacy skills'}/>
             <Grid item xs={12} md={4}>
             <Box sx={item} style={cardColumn}>
             <Box
             component="img"
             src={DigitalCommunicationIcon}
             alt="clock"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             Digital communication:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {'Step-by-step instructions on how to access some of the most popular digital communications platforms'}
             {'that you will not find anywhere else.'}
             </Typography>
             </Box>
             </Grid>
             <HomePageBox icon={DigitalCommunicationIcon} title="Digital communication" content={'Step-by-step instructions on how to access some of the most popular digital communications platforms'}/>
             <HomePageBox icon={DigitalServiceIcon} title="Digital Services" content={'Step-by-step instructions on how to access some of the most commonly used digital services'}/>
             <HomePageBox icon={security} title="Security" content={'Best practices on avoiding scams and creating secure passwords. Scam detector and password evaluator for personal use'}/>
             <HomePageBox icon={LearningSuggestions} title="learning Suggestions" content={"Can't find a specific guide? Visit the learning suggestions page to vote for the next guide to be created"}/>
             <HomePageBox icon={quiz} title="Digital Ability Test" content={"Keen to test your digital knowledge? Do so here with our Digital knowledge quiz"}/>
             <HomePageBox icon={questionaire} title="Learning Recommendation" content={'Unsure of what you need? Answer our questions and we’ll give the best suggestion'}/>

             </Grid>
             </Container>
             </Box>
             <Box
             component="section"
             sx={{display: 'flex', overflow: 'hidden', bgcolor: '#08527A'}}
             >
             <Container sx={{mt: 5, mb: 5, display: 'flex', position: 'relative'}}>
             <Box
             component="img"
             src="/static/themes/onepirate/productCurvyLines.png"
             alt="curvy lines"
             sx={{pointerEvents: 'none', position: 'absolute', top: -180}}
             />
             <Grid container spacing={5}>
             <Grid item xs={12} md={4}>
             <Box sx={item} style={cardColumn}>
             <Box
             component="img"
             src={DigitalServiceIcon}
             alt="suitcase"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             Digital Services:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {
             'Step-by-step instructions on how to access some of the most commonly used digital services'
             }

             {
             ', go for a mini-vacation just a few subway stops away from your home.'
             }
             </Typography>
             </Box>
             </Grid>
             <Grid item xs={12} md={4}>
             <Box sx={item}>
             <Box
             component="img"
             src={HowDonating}
             alt="graph"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             How donating can help:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {
             'Your donation can help people to stay connected with their love ones and service they need '
             }

             {'your Sundays will not be alike.'}
             </Typography>
             </Box>
             </Grid>
             <Grid item xs={12} md={4}>
             <Box sx={item} style={cardColumn}>
             <Box
             component="img"
             src={security}
             alt="clock"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             Security:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {'Best practices on avoiding scams and creating secure passwords. Scam detector and password evaluator for personal use'}
             {'that you will not find anywhere else.'}
             </Typography>
             </Box>
             </Grid>
             <Grid item xs={12} md={4}>
             <Box sx={item} style={cardColumn}>
             <Box
             component="img"
             src={LearningSuggestions}
             alt="clock"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             Learning Suggestions:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {"Can't find a specific guide? Visit the learning suggestions page to vote for the next guide to be created"}
             {'that you will not find anywhere else.'}
             </Typography>
             </Box>
             </Grid>
             </Grid>
             </Container>
             </Box>
             <Box
             component="section"
             sx={{display: 'flex', overflow: 'hidden', bgcolor: '#08527A'}}
             >
             <Container sx={{mt: 5, mb: 30, display: 'flex', position: 'relative'}}>
             <Box
             component="img"
             src="/static/themes/onepirate/productCurvyLines.png"
             alt="curvy lines"
             sx={{pointerEvents: 'none', position: 'absolute', top: -180}}
             />
             <Grid container spacing={5}>
             <Grid item xs={12} md={4}>
             <Box sx={item} style={cardColumn}>
             <Box
             component="img"
             src={quiz}
             alt="suitcase"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             Digital Ability Test:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {
             'Keen to test your digital knowledge? Do so here with our Digital knowledge quiz'
             }

             {
             ', go for a mini-vacation just a few subway stops away from your home.'
             }
             </Typography>
             </Box>
             </Grid>
             <Grid item xs={12} md={4}>
             <Box sx={item}>
             <Box
             component="img"
             src={HowDonating}
             alt="graph"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             How donating can help:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {
             'Your donation can help people to stay connected with their love ones and service they need '
             }

             {'your Sundays will not be alike.'}
             </Typography>
             </Box>
             </Grid>
             <Grid item xs={12} md={4}>
             <Box sx={item} style={cardColumn}>
             <Box
             component="img"
             src={questionaire}
             alt="clock"
             sx={{height: 100}}
             />
             <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
             Learning Recommendation:
             </Typography>
             <Typography variant="h5" color={fontcolor}>
             {"Unsure of what you need? Answer our questions and we’ll give the best suggestion"}
             {'that you will not find anywhere else.'}
             </Typography>
             </Box>
             </Grid>
             </Grid>
             </Container>
             </Box>*/}
        </div>
    );
}

export default ProductValues;
