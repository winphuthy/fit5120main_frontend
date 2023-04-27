import './AvoidScam.css';
import MainImage from '../images/websitebackgroundnew.jpg'
import { useState } from 'react';
import Button from '@mui/material/Button';
import WordCloudPage from '../images/output.png'


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
      setResult('THE RESULT: This is a right email');
    } else if (hasTypedFasle){
      // Perform logic to determine if inputValue is a scam or not
      // Set result based on the logic
      setResult(`THE RESULT: This is a fake email`);
    }
    else{
      setResult(`error input`);
    }
  }; 

  return (
<div style={{backgroundColor: "dimgrey",height: "auto", paddingBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
  <div style={{height: '70vh', width: '100%', backgroundImage:`url(${MainImage})`,backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <h1>Avoiding Scams</h1>
    </div>
      <div style={{color: 'floralwhite',fontWeight: 'bolder',fontSize: '1.5rem', width: '70vw',margin:'auto',paddingLeft: '50px',paddingRight: '50px'}}>
        <h3> Best Practices to Avoid Scams</h3>
        <p style={{textAlign: 'justify',fontSize: '1.1rem'}}>As you start to become more digitally literate, it’s important to note that there are also risks that come with digital platforms. One of the major risks would be that of scams. Online scams tend to come in the form of emails or messages, and it can sometimes be hard to tell when someone or something is a scam.</p>
        <p style={{textAlign: 'justify',fontSize: '1.1rem'}}>Digital scams tend to impersonate key digital services such as banks, credit card companies, and streaming services, they’ll tend to try and steal personal information, passwords, and money from you, so as you begin digitalising yourself, it’s best to be aware of how to detect if something is a scam.</p>
        <p style={{textAlign: 'justify',fontSize: '1.1rem'}}>Below is a word cloud of some commonly used phrases and terms in scams. If you see a combination of the phrases shown below, do be careful when providing personal and sensitive information.</p>
        <hr style={{width: '70vw', margin:'auto', marginTop: '50px'}}/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
          <img src={WordCloudPage} alt="word image" style={{ width: '50%', height: 'auto' }} />
        </div>
        <hr style={{width: '70vw', margin:'auto', marginTop: '50px'}}/>
        <h3> Scam Detector</h3>
          <p style={{textAlign: 'justify',fontSize: '1.1rem'}}>If you’re concerned that something could potentially be a scam, use our scam detector below to get our view on how likely it is that it is in fact a scam. Our Scam detector will read your inputted text, and let you know the percentage likelihood of the text being a scam. </p>
          <h3 > How to use the scam detector:</h3>
          <p style={{textAlign: 'justify',fontSize: '1.1rem'}}> - Using your mouse, left click on the first letter of the message you’d like us to scan, whilst holding the left click down, drag your mouse down to the last letter within the same message</p>
          <p style={{textAlign: 'justify',fontSize: '1.1rem'}}> - Press the “CTRL” and “C” keys at the same time to copy the text</p>
          <p style={{textAlign: 'justify',fontSize: '1.1rem'}}> - Navigate to our Scam Detector, and within the input box available, press the “CTRL” and “V” keys at the same time to paste the text into our detector</p>
          <p style={{textAlign: 'justify',fontSize: '1.1rem'}}> - Hit the “SUBMIT VOTE” button</p>
          <p style={{textAlign: 'justify',fontSize: '1.1rem'}}> - Our detector will then inform you of the percentage likelihood of the message being a scam</p>
        </div>
        <hr style={{width: '70vw', margin:'auto', marginTop: '50px'}}/>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
          <div style={{position: 'relative', width: '100%'}}>
            <input type="text" value={inputValue} onChange={handleInputChange} style={{ height:150,backgroundColor: 'rgba(220, 220, 220, 0.4)',fontWeight: 'bolder',fontSize: '1.3rem', width: 800}} />
            < Button onClick={handleSubmit} style={{position: 'absolute', bottom: 2, right: 6,height:40,width:100,backgroundColor:"grey"}}  variant="outlined" href="#outlined-buttons">
        Submit
      </Button>
          </div>
        </form>
        <div style={{width: '45vw',margin:'auto', marginTop: '50px'}}>
          <p style={{textAlign: 'justify',fontSize: '1.5rem',color:"floralwhite"}}> {result}</p>
        </div>
      </div>
  )
}