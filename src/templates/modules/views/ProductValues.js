import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

import WhoWeAre from '../../../images/who_we_are.png';
import WhatGoal from '../../../images/what_our_goal.png';
import DigitalCommunicationIcon from '../../../images/DigitalCommunication.png';
import DigitalServiceIcon from '../../../images/DigitalServicesIcon.png';
import AvoidingScams from '../../../images/Avoiding.png';


const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const fontcolor = 'White';

const cardColumn = {
    padding: '20px',
    border: '2px solid white',
    borderRadius: '20px'
}

function ProductValues() {
    return (
        <div>
            <Box
                component="section"
                sx={{display: 'flex', overflow: 'hidden', bgcolor: '#08527A'}}
            >
                <Container sx={{mt: 15, mb: 10, display: 'flex', position: 'relative'}}>
                    <Box
                        component="img"
                        src="/static/themes/onepirate/productCurvyLines.png"
                        alt="curvy lines"
                        sx={{pointerEvents: 'none', position: 'absolute', top: -180}}
                    />
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4} >
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

                                    {/*{*/}
                                    {/*  ', go for a mini-vacation just a few subway stops away from your home.'*/}
                                    {/*}*/}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} >
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

                                    {/*{'your Sundays will not be alike.'}*/}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} >
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
                                    {/*{'that you will not find anywhere else.'}*/}
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
                <Container sx={{mt: 15, mb: 30, display: 'flex', position: 'relative'}}>
                    <Box
                        component="img"
                        src="/static/themes/onepirate/productCurvyLines.png"
                        alt="curvy lines"
                        sx={{pointerEvents: 'none', position: 'absolute', top: -180}}
                    />
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4} >
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

                                    {/*{*/}
                                    {/*  ', go for a mini-vacation just a few subway stops away from your home.'*/}
                                    {/*}*/}
                                </Typography>
                            </Box>
                        </Grid>
                        {/*<Grid item xs={12} md={4}>*/}
                        {/*    <Box sx={item}>*/}
                        {/*        <Box*/}
                        {/*            component="img"*/}
                        {/*            src={HowDonating}*/}
                        {/*            alt="graph"*/}
                        {/*            sx={{height: 100}}*/}
                        {/*        />*/}
                        {/*        <Typography variant="h6" sx={{my: 5}} color={fontcolor}>*/}
                        {/*            How donating can help:*/}
                        {/*        </Typography>*/}
                        {/*        <Typography variant="h5" color={fontcolor}>*/}
                        {/*            {*/}
                        {/*                'Your donation can help people to stay connected with their love ones and service they need '*/}
                        {/*            }*/}

                        {/*            /!*{'your Sundays will not be alike.'}*!/*/}
                        {/*        </Typography>*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} md={4} >
                            <Box sx={item} style={cardColumn}>
                                <Box
                                    component="img"
                                    src={AvoidingScams}
                                    alt="clock"
                                    sx={{height: 100}}
                                />
                                <Typography variant="h6" sx={{my: 5}} color={fontcolor}>
                                    Avoiding scams:
                                </Typography>
                                <Typography variant="h5" color={fontcolor}>
                                    {'Best-practices to avoid online scams and use our detector to identity scam messages '}
                                    {/*{'that you will not find anywhere else.'}*/}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
}

export default ProductValues;
