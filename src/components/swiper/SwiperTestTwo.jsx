import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles2.css";

// import required modules
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper";
import {SlideCard} from "./SlideCard";

export default function SwiperTestTwo(prop) {

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                keyboard={true}
                mousewheel={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {prop.cardContent.map((item) => (
                    <div key={item.id + 1}>
                        <SwiperSlide>
                            <SlideCard input={item}/>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </>
    );
}
