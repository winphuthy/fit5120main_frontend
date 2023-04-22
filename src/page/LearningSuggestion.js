
import './About.css';
import KeywordImage from '../images/keywordPage.jpeg';
import SuggestionImage from '../images/learningsuggestions.jpg'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export function LearningSuggestion() {
  const councilList = [
    { label: 'Word 1', weight: 0, category: 'landfill' },
    { label: 'Word 2', weight: 0, category:  'recyclable'  },
    { label: 'Word 3', weight: 0, category: 'landfill'  },
    { label: 'Word 4', weight: 0, category: 'organic' },
   
];

    return (
        <div style={{backgroundImage:`url(${SuggestionImage})`,backgroundRepeat:"no-repeat",height: "auto", paddingTop: '50px', paddingBottom: '50px',backgroundSize: 'cover'}}>
        <div style={{width: '70%', margin: "auto", color: "black",display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <h1>Learning Suggestions</h1>
        </div>
        <h1></h1>
        <div style={{backgroundColor: 'rgba(220, 220, 220, 0.2)', color: '#194870',fontWeight: 'bolder',fontSize: '1.5rem', width: '45vw',margin:'auto'}}>
        <p>Intro text about the word cloud just below this </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={KeywordImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div>
        <p>Intro message paragraph to our generated word cloud function</p>
      </div>
      <h1></h1>
      <div style={{position: 'relative', width: '25%',margin: 'auto'}}>
          <Autocomplete
            disablePortal
            id="word-list"
            options={councilList}
            sx={{ width: 400,marginLeft:'-70%',backgroundColor:"darkgrey"}}
            renderInput={(params) => <TextField {...params} label="List of word" />}
        />
        </div>
      <h1></h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={KeywordImage} alt="word image" style={{ width: '50%', height: 'auto' }} /></div>
      <div>
        <p>Leaderboard for most voted platform/app/website:</p>
        <p>1: </p>
        <p>2: </p>
        <p>3: </p>
      </div>
        </div>
      </div>
    )
}