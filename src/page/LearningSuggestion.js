
import './About.css';
import MainImage from '../images/mainpage.jpg'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React from 'react';
import Button from '@mui/material/Button';
import WordCloudPage from '../images/output.png'

import { useState, useEffect } from 'react';


export function LearningSuggestion() {


const [WordList, setWordList] = useState([]);

  useEffect(() => {
    fetch('http://20.25.180.39/wordcloud', { mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {
        // Assuming the data obtained from the back-end is an array of objects with a 'label' property
        this.setWordList(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


    return (
        <div style={{backgroundImage:`url(${MainImage})`, backgroundRepeat:"no-repeat",height: "auto", paddingTop: '50px', paddingBottom: '50px',backgroundSize: 'cover'}}>
        <div style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.2)' , color: '#194870',fontWeight: 'bolder',fontSize: '1.5rem', width: '70vw',margin:'auto',paddingLeft: '50px',paddingRight: '50px'}}>
            <h2 style={{color: "black",display: 'flex',justifyContent: 'center',alignItems: 'center'}}>Learning Suggestions</h2>
            <h3 style={{color: 'black'}}>Popular Digital Tools</h3>
            <p style={{textAlign: 'justify'}}>If you’re interested in learning about which are the most popular digital websites, applications and services, look no further. The word cloud below this shows off some of the most currently popular ones.</p>
            <p style={{textAlign: 'justify'}}> If there’s not already a guide for one of the digital tools you’d like to learn about on this website, feel free to scroll down and have a look at the “Making a Suggestion” area.</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={WordCloudPage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div>
        <h3 style={{color: 'black'}}>Making a Suggestion</h3>
        <p style={{textAlign: 'justify'}}>If any of these digital tools are of great interest to you and you’d like to learn about them, please use the drop down menu just below this to vote for a digital tool you’d like to learn about. </p>
        <p style={{textAlign: 'justify'}}>At the end of each month, us over at SillionSharks will proceed to make an informative guide on the top 3 most voted for digital tools. </p>
        <p style={{textAlign: 'justify'}}>If you can’t find what you’re looking for within the drop down menu, simply type in the name of what you’d be interested in learning, and if it gets voted to the top 3, we’ll also look into the digital tool and proceed to create a guide for it.</p>
      </div>
      <h1></h1>
      <div style={{position: 'relative', width: '25%',margin: 'auto'}}>
      <Autocomplete
        disablePortal
        id="word-list"
        options={WordList}
        sx={{ width: 400,marginLeft:'-30%',backgroundColor:"darkgrey"}}
        renderInput={(params) => <TextField {...params} label="Select your chosen digital tool" />}
      />
      <Button style={{position: 'absolute', bottom: 5, left: 340,height:50,width:100,backgroundColor:"grey"}}  variant="outlined" href="#outlined-buttons">
        Vote
      </Button>
    </div>
      <h1></h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={WordCloudPage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div>
        <h3 style={{color: 'black'}}>Leaderboard for most voted digital tools:</h3>
        <p style={{textAlign: 'justify'}}>1: </p>
        <p style={{textAlign: 'justify'}}>2: </p>
        <p style={{textAlign: 'justify'}}>3: </p>
        <p style={{textAlign: 'justify'}}>4: </p>
        <p style={{textAlign: 'justify'}}>5: </p>
        
      </div>
      <div>
    </div>
        </div>
      </div>
      
    )
    
}