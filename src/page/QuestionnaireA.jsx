import MainImage from '../images/mainpage.jpg'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const QuestionnaireA = () => {
    


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
                    <p style={{textAlign: 'justify', fontSize: '1.2rem'}}>Questionnaire Survey</p>
                    <hr style={{width: '50vw', marginTop: '50px', marginBottom: "50px"}}/>


  
                </div>
            </div>
        </div>
        
    )

}