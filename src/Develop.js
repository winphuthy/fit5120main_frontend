import React from "react";
import SwiperTestTwo from "./components/swiper/SwiperTestTwo";
import settingWhatsApp from './const/Communication/SettingWhatsApp.json';


// import InteractionChart from "./components/InteractionChart";

export function Develop() {
    return (
        <>
            <SwiperTestTwo cardContent={settingWhatsApp}/>
        </>
    )
}
