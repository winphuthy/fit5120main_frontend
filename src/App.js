import './App.css';
import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./templates/modules/components/navBar/NavBar";
import HomePage from "./page/HomePage";
import {DigitalService} from "./page/DigitalService";
import { Commnication } from './page/Communication';
import {GetInvolved} from "./page/GetInvolved";
import {AvoidScam} from "./page/AvoidScam";
import {About} from "./page/About";
import {Error} from "./page/Error";
import {Develop} from "./Develop";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='digitalservice' element={<DigitalService/>}/>
                    <Route path='digitalcommunication' element={<Commnication/>}/>
                    <Route path='getinvolved' element={<GetInvolved/>}/>
                    <Route path='avoidingscam' element={<AvoidScam/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='*' element={<Error/>}/>
                    <Route path='develop' element={<Develop/>}/>
                </Routes>
                {/*<AppFooter/>*/}
            </BrowserRouter>
        </div>
    );
}

export default App;
