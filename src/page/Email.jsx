import './DigitalService.css'
import {StepContent} from "../components/StepContent";
import settingEmail from "../const/DigitalService/SettingEmail.json";
import React from "react";

export const Email = () => {
    return (
        <div className='maincontent'>
            <div>
                {/*{content}*/}
                <h2>Info on setting up emails:</h2>
                <p>We will provide detailed instructions to help users set up their email account details on
                    this page, including choosing an email service provider, registering a new email account,
                    setting a password, creating an email address, and logging into their email account.</p>
            </div>
            <div style={{margin: "30px 0px"}}>

                <StepContent content={settingEmail}/>
            </div>
        </div>
    )
}