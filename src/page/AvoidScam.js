import './AvoidScam.css';
import AvoidScamContent from '../const/AvoidScamContent.json';
import KeywordImage from '../images/keywordPage.jpeg';
import ScamImage from '../images/scamImage.jpg'
import { useState } from 'react';

export function AvoidScam() {

  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      // Perform logic to determine if inputValue is a scam or not
      // Set result based on the logic
      setResult(`Based on your message, there is 76.88% chance this is a scam message`);
  }
;

    return (
        <div style={{backgroundImage:`url(${ScamImage})`,backgroundRepeat:"no-repeat",height: "auto", paddingTop: '50px', paddingBottom: '50px',backgroundSize: 'cover'}}>
        <div style={{width: '70%', margin: "auto", color: "black",display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <h1>Avoiding Scams</h1>
        </div>
        <h1></h1>
        <div style={{backgroundColor: 'rgba(220, 220, 220, 0.5)', color: 'black',height:100,width: '70%', margin: "auto"}}>
        <p>General info Best practices in detecting scams </p>
        </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={KeywordImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div style={{backgroundColor: 'rgba(220, 220, 220, 0.5)', color: 'black',height:150,width: '70%', margin: "auto"}}>
        <p>Instruction: </p>
        <p> - Put text or email you think might be a scam to below box. And we will tell you how likely it is a spam</p>
      </div>
      <h1></h1>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
         <div style={{position: 'relative', width: '70%',margin: 'auto'}}>
          <input type="text" value={inputValue} onChange={handleInputChange} style={{ height:100, width:'100%',backgroundColor:'rgba(220, 220, 220, 0.5)'}} />
           <button type="submit" style={{position: 'absolute', bottom: 0, right: 0}}>Submit</button>
           </div>
           </form>
      <h1></h1>
      <div style={{backgroundColor: 'rgba(220, 220, 220, 0.5)', color: 'black',height:50,width: '70%', margin: "auto"}}>
        <p>RESULT: Based on your message, there is 76.88% This is a scam message</p>
      </div>
      </div>
    )
}