import './About.css';
import KeywordImage from '../images/keywordPage.jpeg';
import SuggestionImage from '../images/learningsuggestions.jpg'
import { useState } from 'react';


export function LearningSuggestion() {
  const [inputValue, setInputValue] = useState('');
    return (
        <div style={{backgroundImage:`url(${SuggestionImage})`,backgroundRepeat:"no-repeat",height: "auto", paddingTop: '50px', paddingBottom: '50px',backgroundSize: 'cover'}}>
        <div style={{width: '70%', margin: "auto", color: "black",display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <h1>Learning Suggestions</h1>
        </div>
        <h1></h1>
        <div style={{backgroundColor: 'rgba(220, 220, 220, 0.2)', color: '#194870',fontWeight: 'bolder',fontSize: '1.5rem', width: '45vw',margin:'auto'}}>
        <p>Intro text about the word cloud just below this </p>
        </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={KeywordImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div style={{backgroundColor: 'rgba(220, 220, 220, 0.3)', color: '#194870',fontWeight: 'bolder',fontSize: '1.5rem', width: '45vw',margin:'auto'}}>
        <p>Intro message paragraph to our generated word cloud function</p>
      </div>
      <h1></h1>
      <div style={{position: 'relative', width: '25%',margin: 'auto'}}>
  <select value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ height:50, width:'100%',backgroundColor: 'rgba(220, 220, 220, 0.2)', color: 'black',fontWeight: 'bolder',fontSize: '1.3rem',margin:'auto'}}>
    <option value="word 1">word 1</option>
    <option value="word 2">word 2</option>
    <option value="word 3">word 3</option>
  </select>
</div>
      <h1></h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={KeywordImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div style={{bbackgroundColor: 'rgba(220, 220, 220, 0.2)', color: '#194870',fontWeight: 'bolder',fontSize: '1.5rem', width: '45vw',margin:'auto'}}>
        <p>Leaderboard for most voted platform/app/website:</p>
        <p>1: </p>
        <p>2: </p>
        <p>3: </p>
      </div>
      </div>
    )
}
