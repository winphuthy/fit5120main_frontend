import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// CSS
import "./styles2.css";

// import required modules
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper";
import {SlideCard} from "./SlideCard";

export default function SwiperModified(props) {

    let insert;
    if (props.insertCard) {
        insert = <SwiperSlide>{props.insertCard}</SwiperSlide>;
    } else {
        insert = <></>;
    }

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
                {insert}
                {props.cardContent.map((item, index) => (
                    <div key={index}>
                        <SwiperSlide>
                            <SlideCard index={index} input={item}/>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </>
    );
}
