import './DigitalCommunication.css';
import {StepContent} from "../components/StepContent";
import settingFaceBook from "../const/Communication/SettingFacebook.json";
import React from "react";
import {DigitalCommunication} from "./DigitalCommunication";

export const Facebook = () => {
    return (
        <div className='mainContent'>
            <DigitalCommunication/>
            <div>
                <h2>Info on setting up FaceBook:</h2>
                <p>Facebook is a social media platform that allows you to create your own personal profile. It will
                    allow you to connect with your families and friends, allowing you to share photos and videos, and
                    view photos and videos by other users. It helps people keep one another updated with what’s going on
                    in their lives. Facebook can also be used as a messaging service to communicate with your facebook
                    friends.</p>
            </div>
            <div style={{margin: "30px 0px"}}>
                <StepContent content={settingFaceBook}/>
            </div>
        </div>
    )
}