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
import{Questionnaire} from './page/Questinnaire'
import{QuizPage} from './page/QuizPage'




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
                    <Route path='quizpage' element={<QuizPage/>}/>
                    <Route path='questionnaire' element = {<Questionnaire/>}/>








                </Routes>
                {/*<AppFooter/>*/}
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
