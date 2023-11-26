import HomeImg from "../../../public/imgs/hotels/Frame.svg";
function HomeCarrusel() {
  return (
    <div className="relative z-40 w-full h-96 flex flex-col items-center justify-center gap-4   ">
      <img src={HomeImg} alt="" />
      <input type="text" placeholder="¿Que quieres ver en tu ciudad?" className="w-[90%] md:w-[30rem] p-3 rounded-3xl" />
      <span className="flex gap-4 text-xs md:text-base">
        <button className="bg-white  px-2 rounded-3xl">Marcas y tiendas</button>
        <button className="bg-white px-2 rounded-3xl">Artistas y conciertos</button>
        <button className="bg-white py-2 px-2 rounded-3xl">torneos</button>
      </span>
    </div>
  );
}

export default HomeCarrusel;
