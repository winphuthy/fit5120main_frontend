import './About.css';
import MainImage from '../images/mainpage.jpg'
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import React, {useEffect, useRef, useState} from 'react';
import WordCloudPage from '../images/output.png'

const filter = createFilterOptions();


export function LearningSuggestion() {

    const [wordList, setWordList] = useState([]);
    const [topWord, setTopWord] = useState([]);
    const [wordCloud, setWordCloud] = useState('');
    const [value, setValue] = useState('');
    const isVote = useRef(false);

    console.log('isVote: ', isVote.current);

    function fetch_top_word() {
        fetch('http://20.25.180.39/gettopword', {
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((data) => {
                const wordArray = data.map(item => item.word);
                setTopWord(wordArray);
                // console.log("wordArray: ", wordArray);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    async function fetch_word_cloud() {
        await fetch('http://20.25.180.39/wordcloud', {
            mode: 'cors'
        })
            .then((response) => response.blob())
            .then((imageBlob) => {
                const imageUrl = URL.createObjectURL(imageBlob);
                setWordCloud(imageUrl);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function fetch_word_list() {
        fetch('http://20.25.180.39/getwordlist', {
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((data) => {
                setWordList(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        fetch_word_list();
        fetch_word_cloud();
        fetch_top_word();
    }, []);


    function post_word(newValue) {
        console.log(newValue)
        if (!newValue) return;
        fetch('http://20.25.180.39/wordcloud', {
            method: "POST", mode: "cors", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({"word": newValue})
        })
            .then((response) => response.blob())
            .then((imageBlob) => {
                const imageUrl = URL.createObjectURL(imageBlob);
                setWordCloud(imageUrl);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function sendWord(newValue) {
        console.log('on sendWord');
        console.log('sendWord => isVote: ', isVote.current);
        if (isVote.current === false) {
            post_word(newValue);
            console.log('sendWord => isVote: ', isVote.current);
            isVote.current = true;
            console.log('sendWord => isVote: ', isVote.current);
        }
    }

    function ac_onchange() {
        return (event, newValue) => {
            if (typeof newValue === 'string') {
                setValue({
                    word: newValue,
                });
            } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                    word: newValue.inputValue,
                });
            } else {
                setValue(newValue);
            }
            sendWord(newValue);
        };
    }

    function ac_filterOptions() {
        return (options, params) => {
            const filtered = filter(options, params);

            const {inputValue} = params;
            // Suggest the creation of a new value
            const isExisting = options.some((option) => inputValue === option.word);
            if (inputValue !== '' && !isExisting) {
                filtered.push({
                    inputValue, word: `${inputValue}`,
                });
            }

            return filtered;
        };
    }

    function ac_getOptionLabel() {
        return (option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
                return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
                return option.inputValue;
            }
            // Regular option
            return option.word;
        };
    }

    return (
        <div style={{
            backgroundColor:"dimgray"
        }}>
            <div style={{
                color: 'floralwhite',
                fontWeight: 'bolder',
                fontSize: '1.5rem',
                margin: 'auto',

            }}>
                  <div style={{height: '70vh', backgroundImage:`url(${MainImage})`,backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center',color:'black'}}>
                    <h2>Learning Suggestions</h2>
                 </div>
                <div style={{width: '70vw',margin:'auto'}}>
                <h3>Popular Digital Tools</h3>
                <p style={{textAlign: 'justify',fontSize: '1.2rem'}}>If you’re interested in learning about which are the most popular
                    digital websites, applications and services, look no further. The word cloud below this shows off
                    some of the most currently popular ones.</p>
                <p style={{textAlign: 'justify',fontSize: '1.2rem'}}> If there’s not already a guide for one of the digital tools you’d
                    like to learn about on this website, feel free to scroll down and have a look at the “Making a
                    Suggestion” area.</p>
                <hr style={{width: '70vw', margin:'auto', marginTop: '50px',marginBottom:"50px"}}/>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={WordCloudPage} alt="word image" style={{width: '50%', height: 'auto'}}/></div>
                <div>
                <hr style={{width: '70vw', margin:'auto', marginTop: '50px',marginBottom:"50px"}}/>
                    <h3>Making a Suggestion</h3>
                    <p style={{textAlign: 'justify',fontSize: '1.2rem'}}>If any of these digital tools are of great interest to you and
                        you’d like to learn about them, please use the drop down menu just below this to vote for a
                        digital tool you’d like to learn about. </p>
                    <p style={{textAlign: 'justify',fontSize: '1.2rem'}}>At the end of each month, us over at SillionSharks will proceed to
                        make an informative guide on the top 3 most voted for digital tools. </p>
                    <p style={{textAlign: 'justify',fontSize: '1.2rem'}}>If you can’t find what you’re looking for within the drop down
                        menu, simply type in the name of what you’d be interested in learning, and if it gets voted to
                        the top 3, we’ll also look into the digital tool and proceed to create a guide for it.</p>
                </div>
                <h1></h1>

                <Autocomplete
                    value={value}
                    onChange={ac_onchange()}
                    filterOptions={ac_filterOptions()}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={wordList}
                    getOptionLabel={ac_getOptionLabel()}
                    renderOption={(props, option) => <li {...props}>{option.word}</li>}
                    sx={{width: 300}}
                    freeSolo
                    disabled={isVote.current}
                    renderInput={(params) => (
                        <TextField {...params} label="Free solo with text demo"/>
                    )}
                />

                <h1></h1>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={wordCloud} alt="word image" style={{width: '50%', height: 'auto'}}/></div>
                <div>
                <hr style={{width: '70vw', margin:'auto', marginTop: '50px',marginBottom:"50px"}}/>

                    <h3>Leaderboard for most voted digital tools:</h3>
                    {topWord.map((item, index) => (
                        <p style={{textAlign: 'justify',fontSize: '1.2rem'}}> {index + 1}: {item} </p>
                    ))}
                </div>
                <div>
                </div>
                </div>
            </div>
        </div>
    )
}