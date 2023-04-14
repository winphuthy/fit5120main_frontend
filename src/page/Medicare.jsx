import './DigitalService.css'
import {StepContent} from "../components/StepContent";
import settingMedicare from "../const/DigitalService/SettingMedicare.json";
import React from "react";

export const Medicare = () => {
    return (
        <div className='maincontent'>
            <div>
                <h2>Info on setting up medicare:</h2>
                <p>We will provide users with detailed information on how to create a medical insurance account,
                    including guidance on registering for an account, selecting a plan, and applying for
                    insurance. In addition, we will also introduce users to the basics of medical insurance,
                    such as how medical insurance works, its limitations, and requirements.</p>
            </div>
            <div style={{margin: "30px 0px"}}>
                <StepContent content={settingMedicare}/>
            </div>
        </div>
    )
}