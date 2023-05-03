import './App.css';
import * as React from "react";
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import {DigitalService} from "./page/DigitalService";
import {GetInvolved} from "./page/GetInvolved";
import {AvoidScam} from "./page/AvoidScam";
import {LearningSuggestion} from "./page/LearningSuggestion";
import {Error} from "./page/Error";
import {Develop} from "./Develop";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {MuiNavBar} from "./components/MuiNavBar";
import {Whatsapp} from "./page/Whatsapp";
import {Zoom} from "./page/Zoom";
import {Facebook} from "./page/Facebook";
import {FaceTime} from "./page/FaceTime";
import {Email} from "./page/Email";
import {MyGov} from "./page/MyGov";
import {Medicare} from "./page/Medicare";

import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js'
import {Login} from "./page/Login";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
)


const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const main =
    <BrowserRouter>
        <MuiNavBar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='digitalservice' element={<DigitalService/>}/>
            <Route path='whatsapp' element={<Whatsapp/>}/>
            <Route path='zoom' element={<Zoom/>}/>
            <Route path='facebook' element={<Facebook/>}/>
            <Route path='facetime' element={<FaceTime/>}/>
            <Route path='email' element={<Email/>}/>
            <Route path='mygov' element={<MyGov/>}/>
            <Route path='medicare' element={<Medicare/>}/>
            <Route path='getinvolved' element={<GetInvolved/>}/>
            <Route path='avoidingscam' element={<AvoidScam/>}/>
            <Route path='learningsuggestions' element={<LearningSuggestion/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='develop' element={<Develop/>}/>
        </Routes>
        {/*<AppFooter/>*/}
    </BrowserRouter>


function App() {

    const [enter, setEnter] = useState(true);

    const handValueChange = (value) => {
        console.log(`The new value is ${value}`);
        setEnter(value)
    }

    const login =
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login onValueChange={handValueChange}/>}/>
            </Routes>
        </BrowserRouter>
    return (
        <ThemeProvider theme={theme}>
            {enter || login}
            {enter && main}
        </ThemeProvider>
    );
}

export default App;
