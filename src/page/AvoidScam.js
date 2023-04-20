import './AvoidScam.css';
import AvoidScamContent from '../const/AvoidScamContent.json';
import React from 'react'
import ScamImage from '../images/avoidingScam/WechatIMG189.jpeg'

export function AvoidScam() {

    const content = AvoidScamContent.map(value => (
        <p>{value.p}</p> ));

    return (
        <div style={{height: "auto", paddingTop: '50px', paddingBottom: '50px'}}>
        <div style={{width: '70%', margin: "auto", color: "black",display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <h1>Avoiding Scams</h1>
        </div>
        <h1></h1>
        <div style={{backgroundColor: 'gainsboro', color: 'black',height:150,width: '70%', margin: "auto"}}>
        <p>General info Best practices in detecting scams </p>
        </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={ScamImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div style={{backgroundColor: 'gainsboro', color: 'black',height:150,width: '70%', margin: "auto"}}>
        <p>Instruction: </p>
        <p> - Put text or email you think might be a scam to below box. And we will tell you how likely it is a spam</p>
      </div>
      <h1></h1>
      <input type="text" style={{ display: 'flex',margin: "auto", height:100, width:'70%',backgroundColor:'gainsboro'}} />
      <h1></h1>
      <div style={{backgroundColor: 'gainsboro', color: 'black',height:150,width: '70%', margin: "auto"}}>
        <p>RESULT: Based on your message, there is 76.88% This is a scam message</p>
      </div>
    

      
    </div>
        
    )
}