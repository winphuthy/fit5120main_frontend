import React from "react";
import SwiperModified from "./components/swiper/SwiperModified";
import settingWhatsApp from './const/Communication/SettingWhatsApp.json';


// import InteractionChart from "./components/InteractionChart";

export function Develop() {
    return (
        <>
            <SwiperModified cardContent={settingWhatsApp}/>
        </>
    )
}
