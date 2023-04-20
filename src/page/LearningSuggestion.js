import './About.css';
import KeywordImage from '../images/keywordPage.jpeg';
import SuggestionImage from '../images/suggestion.jpg'
import { useState } from 'react';


export function LearningSuggestion() {
  const [inputValue, setInputValue] = useState('');
    return (
        <div style={{backgroundImage:`url(${SuggestionImage})`,backgroundRepeat:"no-repeat",height: "auto", paddingTop: '50px', paddingBottom: '50px',backgroundSize: 'cover'}}>
        <div style={{width: '70%', margin: "auto", color: "black",display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <h1>Learning Suggestions</h1>
        </div>
        <h1></h1>
        <div style={{backgroundColor: 'rgba(220, 220, 220, 0.5)', color: 'black',height:100,width: '70%', margin: "auto"}}>
        <p>Intro text about the word cloud just below this </p>
        </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={KeywordImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div style={{backgroundColor: 'rgba(220, 220, 220, 0.5)', color: 'black',height:150,width: '70%', margin: "auto"}}>
        <p>Intro message paragraph to our generated word cloud function</p>
      </div>
      <h1></h1>
      <div style={{position: 'relative', width: '70%',margin: 'auto'}}>
  <select value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ height:100, width:'100%',backgroundColor:'rgba(220, 220, 220, 0.5)'}}>
    <option value="word 1">word 1</option>
    <option value="word 2">word 2</option>
    <option value="word 3">word 3</option>
  </select>
</div>
      <h1></h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={KeywordImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div style={{backgroundColor: 'rgba(220, 220, 220, 0.5)', color: 'black',height:150,width: '70%', margin: "auto"}}>
        <p>RLeaderboard for most voted platform/app/website:</p>
        <p>1: </p>
        <p>2: </p>
        <p>3: </p>
      </div>
      </div>
    )
}
