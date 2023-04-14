import './DigitalCommunication.css';
import {StepContent} from "../components/StepContent";
import settingZoom from "../const/Communication/SettingZoom.json";
import React from "react";
import {DigitalCommunication} from "./DigitalCommunication";

export const Zoom = () => {
    return (
        <div className='mainContent'>
            <DigitalCommunication/>
            <div>
                <div>
                    <h2>Info on setting up Zoom:</h2>
                    <p>Zoom is a video conferencing platform that enables users to hold group calling sessions. It can
                        be used for video and audio meetings, screen sharing, recording, and just simply chatting. Zoom
                        is most commonly used for conference calls, but is also oftentimes used for large family calls,
                        especially for including overseas family members.</p>
                    <p>Step 1: On your Web browser, navigate to the top of it, and click the “+”icon to open a new
                        tab </p>
                    <p>Step 2: Within the empty address bar at the top of the tab, enter the following link:
                        “https://www.zoom.us/DOWNLOAD ”. </p>
                </div>
                <div style={{margin: "30px 0px"}}>
                    <StepContent content={settingZoom}/>
                </div>
            </div>
        </div>
    )
}