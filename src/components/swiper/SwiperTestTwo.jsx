import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles2.css";

// import required modules
import {Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import {SlideCard} from "./SlideCard";

/*const cardContent = [
    {
        "id": 1,
        "content": "Step 2: Please click on the green rectangle that says: “Create new account”.      ",
        "image": "communication/image35.png"
    },
    {
        "id": 1,
        "content": "Step 2: Please click on the green rectangle that says: “Create new account”.      ",
        "image": "communication/image35.png"
    },
    {
        "id": 1,
        "content": "Step 2: Please click on the green rectangle that says: “Create new account”.      ",
        "image": "communication/image35.png"
    }
]*/

export default function SwiperTestTwo(prop) {

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {prop.cardContent.map((item) => (
                    <div key={item.id}>
                        <SwiperSlide>
                            <SlideCard input={item}/>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </>
    );
}
