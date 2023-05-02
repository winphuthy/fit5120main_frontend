import * as React from 'react';
import { useState } from 'react'; // import useState hook


export function ColorChange() {
    const [inputValue, setInputValue] = useState(''); // initialize state for input value

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // update input value state on change
    };

    let backgroundColor = 'blue'; // initialize background color to blue

    if (inputValue.length > 3) {
        backgroundColor = 'yellow'; // change background color to yellow if input length is greater than 3
    }

    if (inputValue.length > 6) {
        backgroundColor = 'gray'; // change background color to gray if input length is greater than 6
    }

    return (
        <div style={{ backgroundColor: backgroundColor,height:'150px'}}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
    );
}