import React from "react";
import "./about.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';




function About(){
    return <div className="aboutbox">
        <Swiper
      spaceBetween={50}
      slidesPerView={1.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide id="slide">Swipe to see inputs</SwiperSlide>
      <SwiperSlide id="slide2">Slide 2</SwiperSlide>
      <SwiperSlide id="slide3">Slide 3</SwiperSlide>
      <SwiperSlide id="slide4">Slide 4</SwiperSlide>
    </Swiper>
    </div>
}


export default About