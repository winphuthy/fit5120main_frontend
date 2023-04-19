import './DigitalCommunication.css';
import settingZoom from "../const/Communication/SettingZoom.json";
import React from "react";
import SwiperModified from "../components/swiper/SwiperModified";

export const Zoom = () => {
    const insertCard = (
        <div className='insertCard'>
            <h2>Info on setting up Zoom:</h2>
            <p>Zoom is a video conferencing platform that enables users to hold group calling sessions. It can
                be used for video and audio meetings, screen sharing, recording, and just simply chatting. Zoom
                is most commonly used for conference calls, but is also oftentimes used for large family calls,
                especially for including overseas family members.</p>
        </div>
    )

    return (
        <SwiperModified insertCard={insertCard} cardContent={settingZoom}/>
    )

}