import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper/modules';
import { CiHeart } from "react-icons/ci";
import { LuArrowRightCircle } from "react-icons/lu";
import json from "../json/homeCon.json";

export default function Contenido_Populares() {
  return (
    <div className="md:px-8 flex justify-center items-center">
      <div className="container mx-auto p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <h1 className="text-BLACK-LIGHT font-roboto text-[24px] font-medium mt-[10px]">Populares en Bolivia</h1>
        <p className="font-roboto font-normal text-[16px] leading-6 text-graydark w-[222px] mt-[-8px]">Los mejores Hoteles de Bolivia</p>

        <div className="mb-[100px] mt-[50px] w-full md:w-[964px] relative">
          {/* Ocultar icono de navegación en dispositivos móviles */}
          <LuArrowRightCircle
            className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer mr-[-75px] w-[51.63px] h-[51.63px] mt-[26px]"
            color="#2958B6"
            size={50}
            onClick={() => {
              const swiper = document.querySelector('.swiper-container').swiper;
              swiper.slideNext();
            }}
          />

          <Swiper
            navigation={{
              nextEl: '.custom-next',
            }}
            loop={true}
            modules={[Navigation]}
            className="grid gap-4 swiper-container "
            slidesPerView={1.3}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {json.map((valor, index) => (
              <SwiperSlide key={index} className="w-full sm:w-[299px]">
                <div className="h-[454px] border-2 rounded-2xl">
                  <img
                    src={valor.img}
                    alt=""
                    className="h-[239px] w-full object-cover rounded-tl-2xl rounded-tr-2xl overflow-hidden"
                  />
                  <div className="p-6">
                    <div className="mt-[-18px]">
                      <p className="font-roboto font-normal text-[20px] text-black text-left">{valor.title}</p>
                      <p className="mt-[-2px] text-[15px]">{valor.datos}</p>
                      <p className="mt-[60px] text-blue-500"><a href="#">{valor.url}</a></p>
                    </div>
                    <div className="flex items-center mb-[2px]">
                      <img src={valor.logo} alt="" className="w-[15.33px] h-[15.33px]" />
                      <p className="px-1 text-black font-bold text-[14px]">{valor.votos}</p>
                    </div>
                    <div className="flex items-start justify-end ">
                      <div className="bg-gray-300 px-[1.5px] border-2 border-solid border-white rounded-full mt-[-190px] w-[49px] h-[49px] flex items-center justify-center">
                        <CiHeart color="white" size={50} className="w-[26px] h-[22px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> 
      
    </div>
  );
}
