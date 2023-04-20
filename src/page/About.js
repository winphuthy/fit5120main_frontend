import './About.css';
import AboutContent from '../const/AboutContent.json'
import LineChart from '../components/LineChart';
import ScamImage from '../images/avoidingScam/WechatIMG189.jpeg'


export const About = () => {

    const content = AboutContent.map(value => (
        <p>{value.p}</p>
    ));

    return (
        <div style={{height: "auto", paddingTop: '50px', paddingBottom: '50px'}}>
        <div style={{width: '70%', margin: "auto", color: "black",display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <h1>Learning Suggestions</h1></div>
            <h1></h1>
        <div style={{backgroundColor: 'gainsboro', color: 'black',height:100,width: '70%', margin: "auto"}}>
        <p>Intro text about the word cloud just below this</p></div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={ScamImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <h1></h1>
      <div style={{backgroundColor: 'gainsboro', color: 'black',height:100,width: '70%', margin: "auto"}}>
        <p>Intro message paragraph to our generated word cloud function </p></div>
        <h2></h2>
        <input type="text" style={{ display: 'flex',margin: "auto", height:80, width:'70%',backgroundColor:'gainsboro'}} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={ScamImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div style={{backgroundColor: 'gainsboro', color: 'black',height:100,width: '70%', margin: "auto"}}>
        <p>Leaderboard for most voted platform/app/website:</p>
        <p>1: </p>
        <p>2: </p>
        <p>3: </p>
        <p>4: </p> </div>


        </div>

    )
}