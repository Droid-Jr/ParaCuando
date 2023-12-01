import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { TbUserSquareRounded } from "react-icons/tb";
function NavBar() {
  const [login, setLogin] = useState(true);
  return (
    <nav className="flex justify-between items-center bg-black text-white h-[71px] md:px-8 px-4">
      <Link to="/">
        <img src="../../../public/imgs/nabvar/icon-logo.svg" alt="" />
      </Link>
      <div className="flex gap-6 font-sans items-center py-4 text-sm">
        <Link className="text-blue-600 flex gap-3">
          <img
            className="w-5"
            src="../../../public/imgs/nabvar/Vector.svg"
            alt=""
          />
          <p>Crear publicacion</p>
        </Link>
        {login ? <FaRegHeart className="text-2xl"/> : <Link to="/login">Log In</Link>}
        {login ? (
          <span>
            <TbUserSquareRounded className="inline text-3xl" /> <p className="inline"> @Hola_KoKy</p>
          </span>
        ) : (
          <Link to="/register">Sign Up</Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
