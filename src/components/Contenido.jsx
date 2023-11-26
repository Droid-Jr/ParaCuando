import json from '../json/homeCon.json';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Contenido_Populares() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="w-full relative">
      <Slider ref={sliderRef} {...settings}>
        {json.map((valor, index) => (
          <div key={index} className="w-299 h-239">
            <img src={valor.img} alt="" className="w-full h-full object-cover" />
            <p>
              {
                valor.title
              }
            </p>
          </div>
        ))}
      </Slider>

      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white">
        {'>'}
      </button>
    </div>
  );
}
