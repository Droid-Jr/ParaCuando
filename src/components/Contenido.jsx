import json from "../json/homeCon.json";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from 'swiper/modules';


export default function Contenido_Populares() {
  return (
    <div className=" w-full px-16 py-8 ">
      <h1>Populares en Bolivia</h1>
      <p>Los mejores Hoteles de Bolivia</p>

      <Swiper navigation={true} modules={[Navigation]} className="grid gap-4 " slidesPerView={3} loop={true} spaceBetween={30}>
        {json.map((valor, index) => (
          <SwiperSlide>
            <div key={index} className=" border-2 ">
              <img src={valor.img} alt="" className="" />
              <p>{valor.title}</p>
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
