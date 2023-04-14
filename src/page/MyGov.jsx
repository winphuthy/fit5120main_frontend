import './DigitalService.css'
import {StepContent} from "../components/StepContent";
import settingMyGov from "../const/DigitalService/SettingMyGov.json";
import React from "react";

export const MyGov = () => {
    return (
        <div className='maincontent'>
            <div>
                <h2>Info on setting up myGov:</h2>
                <p>Mygov is an online service platform provided by the Australian government to facilitate people's
                    access to various government services, including taxation and centrelink, among others. The platform
                    offers a wide range of features, and we will provide detailed instructions on how to register for a
                    mygov account and explain how to use the various functions available on the platform.</p>
            </div>
            <div style={{margin: "30px 0px"}}>
                <StepContent content={settingMyGov}/>
            </div>
        </div>
    )
}