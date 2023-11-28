import json from "../json/homeCon.json";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper/modules';

export default function Contenido_Populares() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16  ">
      <h1 className="text-BLACK-LIGHT font-roboto text-[24px] font-medium mt-[10px]">Populares en Bolivia</h1>
      

      <p className="font-roboto font-normal text-[16px] leading-6 text-graydark w-    [222px] mt-[-8px]">Los mejores Hoteles de Bolivia</p>

      <div className="mb-[100px] mt-[50px] w-[964px] h-[464px]">
      

      <Swiper navigation={true} loop={true}  modules={[Navigation]} className="grid gap-4 " slidesPerView={1.3} spaceBetween={15} breakpoints={{
        640: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}>
        {json.map((valor, index) => (
          <SwiperSlide key={index}>

            <div className="w-full sm:w-[299px] h-[454px] border-2 rounded-2xl ">
              
              <img src={valor.img} alt="" className="h-[239px] sm:w-[299px] w-full object-cover rounded-tl-2xl rounded-tr-2xl overflow-hidden " />

              <div className="p-6">
                  <div className="mt-[-18px]"><p className="font-roboto font-normal text-[20px] text-black text-left ">{valor.title}</p>
                  

                    <p className="mt-[-2px] text-[15px]">{valor.datos}</p>

                    <p className="mt-[60px] text-blue-500"><a href="#">{valor.url}</a></p>

                  </div>

                  <div className="flex items-center mt-[20px]"> {/*div para img y texto del logo de votos*/}
                    <img src={valor.logo} alt="" className="w-[15.33px] h-[15.33px]  "/>
                    <p className="px-1 text-black font-bold text-[14px]" >{valor.votos}</p>
                    
                  </div>
              </div>
            </div>
          </SwiperSlide>
          
        ))}
      </Swiper>
      </div>



      {/*segundo slides*/}

{/* 
      <div className=" mt-[50px] mb-[30px]">
      <h1 className="text-BLACK-LIGHT font-roboto text-[24px] font-medium mt-[10px]">Sugerencias en Para Ti</h1>

      <p className="font-roboto font-normal text-[16px] leading-6 text-graydark w-    [222px] mt-[-8px]">Publicaciones que podrias apoyar</p>
      <Swiper navigation={true} modules={[Navigation]} className="grid gap-4 " slidesPerView={1.3} spaceBetween={15} breakpoints={{
        640: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}>
        {json.map((valor, index) => (
          <SwiperSlide key={index}>

            <div className="w-full sm:w-[299px] h-[454px] border-2 rounded-2xl ">
              
              <img src={valor.img} alt="" className="h-[239px] sm:w-[299px] w-full object-cover rounded-tl-2xl rounded-tr-2xl overflow-hidden " />

              <div className="p-6">
                  <div className="mt-[-18px]"><p className="font-roboto font-normal text-[20px] text-black text-left ">{valor.title}</p>

                    <p className="mt-[-2px] text-[15px]">{valor.datos}</p>

                    <p className="mt-[60px] text-blue-500"><a href="#">{valor.url}</a></p>

                  </div>

                  <div className="flex items-center mt-[20px]">
                    <img src={valor.logo} alt="" className="w-[15.33px] h-[15.33px]  "/>
                    <p className="px-1 text-black font-bold text-[14px]" >{valor.votos}</p>
                  </div>
              </div>
            </div>
          </SwiperSlide>
          
        ))}
      </Swiper>

      </div>*/}
    </div>
  );
}
