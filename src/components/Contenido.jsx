import json from "../json/homeCon.json";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper/modules';
import { CiHeart } from "react-icons/ci";



export default function Contenido_Populares() {
  return (
    <div className=" ">{/**flex items-center justify-center se distorciona */}
      <div className="">
      <h1 className="text-BLACK-LIGHT font-roboto text-[24px] font-medium mt-[10px]">Populares en Bolivia</h1>
      

      <p className="font-roboto font-normal text-[16px] leading-6 text-graydark w-[222px] mt-[-8px]">Los mejores Hoteles de Bolivia</p>

      <div className="mb-[100px] mt-[50px] w-[964px] h-[464px] ">
      

        <Swiper navigation={true} loop={true}  modules={[Navigation]} className="grid gap-4 " slidesPerView={1.3} spaceBetween={10} breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}>
          {json.map((valor, index) => (
            <SwiperSlide key={index}>

              <div className="w-full sm:w-[299px] h-[454px] border-2 rounded-2xl ">
                
                <img src={valor.img} alt="" className="h-[239px] sm:w-[299px] w-full object-cover rounded-tl-2xl rounded-tr-2xl overflow-hidden " />

                <div className="p-6">
                    <div className="mt-[-18px]"><p className="font-roboto font-normal text-[20px] text-black text-left ">{valor.title}</p>
                    

                      <p className="mt-[-2px] text-[15px]">{valor.datos}</p>

                      <p className=" mt-[60px]  text-blue-500"><a href="#">{valor.url}</a></p>

                    </div>

                    <div className="flex items-center mb-[2px]"> {/*div para img y texto del logo de votos*/}
                      <img src={valor.logo} alt="" className="w-[15.33px] h-[15.33px]  "/>
                      <p className="px-1 text-black font-bold text-[14px]" >{valor.votos}</p>  
                    </div>

                    {/*PAra el corazo  incons */}
                    <div class="flex items-start justify-end ">
                    <div class="bg-gray-300 px-[1.5px] border-2 border-solid border-white rounded-full mt-[-190px] w-[49px] h-[49px] flex items-center justify-center">
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
