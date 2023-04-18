import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import picture from '../../images/mainpage.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {Pagination} from "swiper";

export default function SwiperTest() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div className="swiper-container">
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={picture} alt="picture"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={picture} alt="picture"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={picture} alt="picture"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={picture} alt="picture"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={picture} alt="picture"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}