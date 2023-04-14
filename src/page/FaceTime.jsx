import './DigitalCommunication.css';
import {DigitalCommunication} from "./DigitalCommunication";
import React from "react";
import {StepContent} from "../components/StepContent";
import settingFaceTime from "../const/Communication/SettingFaceTime.json";

export const FaceTime = () => {
    return (
        <div className='mainContent'>
            <DigitalCommunication/>
            <div>
                <h2>Info on setting up FaceTime:</h2>
                <p>FFacetime is a video and audio calling platform. It also allows for group calls and group video
                    calls, meaning that multiple people can be connected to the same call at the same time. It is only
                    available on apple devices (e.g. iPhones, iPads, Macbooks). For an alternative if you are not using
                    an Apple device, please reference our “WhatsApp” section for details regarding a similar tool. </p>
            </div>
            <div style={{margin: "30px 0px"}}>
                <StepContent content={settingFaceTime}/>
            </div>
        </div>
    )
}