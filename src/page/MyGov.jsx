import './DigitalService.css'
import settingMyGov from "../const/DigitalService/SettingMyGov.json";
import React from "react";
import SwiperModified from "../components/swiper/SwiperModified";

export const MyGov = () => {

    const insertCard = (
        <div className='insertCard'>
            <h2>Info on setting up myGov:</h2>
            <p>Mygov is an online service platform provided by the Australian government to facilitate people's
                access to various government services, including taxation and centrelink, among others. The platform
                offers a wide range of features, and we will provide detailed instructions on how to register for a
                mygov account and explain how to use the various functions available on the platform.</p>
        </div>
    )

    return (
        <SwiperModified insertCard={insertCard} cardContent={settingMyGov}/>

    )
}