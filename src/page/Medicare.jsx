import './DigitalService.css'
import settingMedicare from "../const/DigitalService/SettingMedicare.json";
import React from "react";
import SwiperModified from "../components/swiper/SwiperModified";

export const Medicare = () => {

    const insertCard = (
        <div className='insertCard'>
            <h2>Info on setting up medicare:</h2>
            <p>We will provide users with detailed information on how to create a medical insurance account,
                including guidance on registering for an account, selecting a plan, and applying for
                insurance. In addition, we will also introduce users to the basics of medical insurance,
                such as how medical insurance works, its limitations, and requirements.</p>
        </div>
    )

    return (
        <SwiperModified insertCard={insertCard} cardContent={settingMedicare}/>
    )
}