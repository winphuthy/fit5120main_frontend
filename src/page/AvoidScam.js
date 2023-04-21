import './AvoidScam.css';
import KeywordImage from '../images/keywordPage.jpeg';
import ScamImage from '../images/sixth.jpg'
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export function AvoidScam() {

  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [hasTypedRight, setHasTypedRight] = useState(false);
  const [hasTypedFasle, setHasTypedFalse] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.includes('right@email.com')) {
      setHasTypedRight(true);
    }
    else if (event.target.value.includes('fake@email.com')) {
      setHasTypedFalse(true);
    }
    else{
      setHasTypedFalse(false);
      setHasTypedRight(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (hasTypedRight) {
      setResult('This is a right email');
    } else if (hasTypedFasle){
      // Perform logic to determine if inputValue is a scam or not
      // Set result based on the logic
      setResult(`This is a fake email`);
    }
    else{
      setResult(`error input`);
    }
  }; 
;

    return (
        <div style={{backgroundImage:`url(${ScamImage})`,backgroundRepeat:"no-repeat",height: "auto", paddingTop: '50px', paddingBottom: '50px',backgroundSize: 'cover'}}>
        <div style={{width: '70%', margin: "auto", color: "black",display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <h1>Avoiding Scams</h1>
        </div>
        <h1></h1>
        <div style={{backgroundColor: 'rgba(220, 220, 220, 0.2)', color: '#194870',fontWeight: 'bolder',fontSize: '1.5rem', width: '45vw',margin:'auto'}}>
        <p>General info Best practices in detecting scams </p>
        </div>
        <h1></h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={KeywordImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div style={{backgroundColor: 'rgba(220, 220, 220, 0.3)', color: '#194870',fontWeight: 'bolder',fontSize: '1.4rem', width: '45vw',margin:'auto'}}>
        <p>Instruction: </p>
        <p> - Put text or email you think might be a scam to below box. And we will tell you how likely it is a spam</p>
      </div>
      <h1></h1>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
        <div style={{position: 'relative', width: '50%',margin: 'auto'}}>
          <input type="text" value={inputValue} onChange={handleInputChange} style={{ height:60,backgroundColor: 'rgba(220, 220, 220, 0.2)', color: 'black',fontWeight: 'bolder',fontSize: '1.3rem', width: '45vw',margin:'auto'}} />
          <Button type ='submit'style={{position: 'absolute', bottom: 2, right: 70,height:40,width:100,backgroundColor:"whitesmoke"}} variant="contained" endIcon={<SendIcon />}>
        Submit
      </Button>
        </div>
      </form>
      <h1></h1>
      <div style={{backgroundColor: 'rgba(220, 220, 220, 0.2)', color: '#194870',fontWeight: 'bolder',fontSize: '1.4rem', width: '45vw',margin:'auto'}}>
  <p>RESULT: {result}</p>
</div>

      </div>
    )
}