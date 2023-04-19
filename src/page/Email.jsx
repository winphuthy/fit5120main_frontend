import './DigitalService.css'
import settingEmail from "../const/DigitalService/SettingEmail.json";
import React from "react";
import SwiperModified from "../components/swiper/SwiperModified";

export const Email = () => {

    const insertCard = (
        <div className='insertCard'>
            <h2>Info on setting up emails:</h2>
            <p>We will provide detailed instructions to help users set up their email account details on
                this page, including choosing an email service provider, registering a new email account,
                setting a password, creating an email address, and logging into their email account.</p>
        </div>
    )

    return (
        <SwiperModified insertCard={insertCard} cardContent={settingEmail}/>
    )
}