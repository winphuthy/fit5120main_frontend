import './DigitalCommunication.css';
import {StepContent} from "../components/StepContent";
import settingWhatsApp from "../const/Communication/SettingWhatsApp.json";
import React from "react";
import {DigitalCommunication} from "./DigitalCommunication";

export const Whatsapp = () => {
    return (
        <div className='mainContent'>
            <DigitalCommunication/>
            <div>
                {/*{content}*/}
                <h2>Info on setting up WhatsApp:</h2>
                <p>WhatsApp is a messaging app that allows users to send text messages, voice messages, photos, videos,
                    and documents, as well as make voice and video calls, to other users who have the app installed on
                    their smartphones. WhatsApp can be used for personal and business communication, as well as for
                    group chats and broadcasting messages to multiple users.</p>
            </div>
            <div style={{margin: "30px 0px"}}>

                <StepContent content={settingWhatsApp}/>
            </div>
        </div>
    )
}