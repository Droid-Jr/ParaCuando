import React from "react";

function Footer() { 
  return (
    <div className="lg:bg-Fondomd bg-Fondo bg-no-repeat bg-cover bg-center  flex items-center justify-center h-2/4 md:h-[488px]">
      <div className="w-[90%] relative flex justify-center md:w-1/2">
        <input
          className="p-2 border rounded-3xl w-[100%]"
          type="text"
          placeholder="¿koky un favor?"
        />
        <button className="absolute top-3 right-2 z-50" >
          <img src="../../../public/imgs/Footer/lupa.svg" alt="" />{" "}
        </button>
      </div>
    </div>
  );
}

export default Footer;
