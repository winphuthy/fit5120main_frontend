import MainImage from '../images/mainpage.jpg'
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export const Questionnaire = () => {
    


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
                <div style={{width: '50vw', margin: 'auto'}}>
                    <p style={{textAlign: 'justify', fontSize: '1.2rem'}}>If you’re unsure about what software might best suit your needs, have a quick go at our recommendations questionnaire, and we’ll provide you with the best recommendations</p>
                    <hr style={{width: '50vw', marginTop: '50px', marginBottom: "50px"}}/>
                    <Stack direction="column" spacing={1} sx={{display: 'flex', alignItems: 'center', marginTop: '50px'}} > 
                    <Button variant="contained" sx = {{width:'350px',height:'70px',backgroundColor: 'aliceblue',fontsize:'1.5rem',fontWeight: 'bolder'}} onClick={() => window.location.href='questionnairea'}>A: Digital Service</Button> {/* add onClick event to button */}
                    <Button variant="contained" sx = {{width:'350px',height:'70px',backgroundColor: 'aliceblue',fontsize:'1.5rem',fontWeight: 'bolder'}} onClick={() => window.location.href='questionnaireb'}>B: Digital Communications</Button> {/* add onClick event to button */}
                    </Stack>
                    <hr style={{width: '50vw', marginTop: '30px', marginBottom: "50px"}}/>
                    <p style={{textAlign: 'justify', fontSize: '1.2rem'}}>Digital Service: Platforms which can be used for multiple purposes such as: 
                    <br/>-  Sending electronic mail
                    <br/>-  Storing medical information
                    <br/>-  Storing personally identifying info for government services</p>
                    <br/>
                    <p style={{textAlign: 'justify', fontSize: '1.2rem'}}>Digital Communications: Platforms that can be used for online messaging, features include: 
                    <br/>-  Group messaging
                    <br/>-  Messaging from anywhere with an internet connection
                    <br/>-  Video calling</p>

  
                </div>
            </div>
        </div>
        
    )

}