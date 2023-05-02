import './App.css';
import * as React from "react";
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
import {Quiz1} from './page/Quiz/Quiz1'
import {Quiz2} from './page/Quiz/Quiz2'
import {Quiz3} from './page/Quiz/Quiz3'
import {Quiz4} from './page/Quiz/Quiz4'
import {Quiz5} from './page/Quiz/Quiz5'
import {Quiz6} from './page/Quiz/Quiz6'
import {Quiz7} from './page/Quiz/Quiz7'
import {Quiz8} from './page/Quiz/Quiz8'
import {Quiz9} from './page/Quiz/Quiz9'
import {Quiz10} from './page/Quiz/Quiz10'
import {QuizResult} from './page/Quiz/QuizResult'
import {ColorChange} from './page/Quiz/ColorChange'




import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from 'chart.js'
  import { Chart } from 'react-chartjs-2'
import { Home, Quiz } from '@mui/icons-material';
  
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

function App() {
    return (
        <ThemeProvider theme={theme}>
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
                    <Route path='quiz1' element = {<Quiz1/>}/>
                    <Route path='quiz2' element = {<Quiz2/>}/>
                    <Route path='quiz3' element = {<Quiz3/>}/>
                    <Route path='quiz4' element = {<Quiz4/>}/>                    <Route path='quiz4' element = {<Quiz4/>}/>
                    <Route path='quiz5' element = {<Quiz5/>}/>
                    <Route path='quiz6' element = {<Quiz6/>}/>
                    <Route path='quiz7' element = {<Quiz7/>}/>
                    <Route path='quiz8' element = {<Quiz8/>}/>
                    <Route path='quiz9' element = {<Quiz9/>}/>
                    <Route path='quiz10' element = {<Quiz10/>}/>
                    <Route path='colorchange' element = {<ColorChange/>}/>
                    <Route path='quizresult' element = {<QuizResult/>}/>






                </Routes>
                {/*<AppFooter/>*/}
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
