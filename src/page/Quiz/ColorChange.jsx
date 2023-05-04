import * as React from 'react';
import { useState } from 'react'; // import useState hook


export function ColorChange() {
    const [inputValue, setInputValue] = useState(''); 

    const handleInputChange = (event) => {
        setInputValue(event.target.value); 
    };

    let backgroundColor = 'blue'; // initialize background color to blue

    if (inputValue.length > 3) {
        backgroundColor = 'yellow'; 
    }

    if (inputValue.length > 6) {
        backgroundColor = 'gray'; 
    }

    return (
        <div style={{ backgroundColor: backgroundColor,height:'150px'}}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
    );
}