import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import data from "../jsons/data.json";
import HomeCarrusel from "./contenidoCarrussel.jsx/HomeCarrusel";

export default function Carrussel() {
  return (
    <div className="relative">
      <HomeCarrusel/>
      <Swiper
        centeredSlides={true}
        allowTouchMove={false}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination]}
        className="absolute top-0 left-0 h-96 w-full z-0 "
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={item.url}
                alt={item.name}
                loading="lazy"
                className="object-fill w-full h-96 "
              />
            </SwiperSlide>
          );
        })}
        <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-0 z-30"></div>
      </Swiper>
    </div>
  );
}
