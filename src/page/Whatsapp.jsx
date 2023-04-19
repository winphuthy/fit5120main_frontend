import './DigitalCommunication.css';
import settingWhatsApp from "../const/Communication/SettingWhatsApp.json";
import React from "react";
import SwiperModified from "../components/swiper/SwiperModified";

export const Whatsapp = () => {
    const insertCard = (
        <div className='insertCard'>
            <h2>Info on setting up WhatsApp:</h2>
            <p>WhatsApp is a messaging app that allows users to send text messages, voice messages, photos, videos,
                and documents, as well as make voice and video calls, to other users who have the app installed on
                their smartphones. WhatsApp can be used for personal and business communication, as well as for
                group chats and broadcasting messages to multiple users.</p>
        </div>
    )

    return (
        <SwiperModified insertCard={insertCard} cardContent={settingWhatsApp}/>
    )

}