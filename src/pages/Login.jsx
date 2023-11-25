import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/user.slice";
import axios from "axios";
export function Fields() {
  return (
    <>
      <div className="absolute bg-paraCuando top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-black to-black"></div>
      <img
        src="../../public/imgs/login/LOGO.svg"
        alt=""
        className="w-[5.375rem] h-[5rem]  sm:h-[8rem] sm:w-[8rem] md:h-[11.773125rem] lg:h-[15.773125rem] lg:w-[15.8625rem] lg:flex-1"
      />
    </>
  );
}

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const login = (data) => {
    axios
      .post(`http://localhost:4000/login`, data)
      .then((res) => {
        dispatch(setUser(res.data));
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        toast.success("terminos aceptados");
        setTimeout(() => {
          navigate("/");
        }, 1200);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
  return (
    <div className="h-full w-full px-4 flex flex-col items-center py-8 lg:flex-row gap-8 sm:gap-12 sm:px-12 lg:px-0 lg:gap-0">
      <Fields />
      <div className="lg:flex-1">
        <form
          onSubmit={handleSubmit(login)}
          className="h-[35rem] relative px-[2.4rem]  lg:w-[34.8125rem] lg:h-[35rem] border w-full rounded-xl flex flex-col justify-center gap-7 bg-opacity-70 md:h-[38rem] md:w-[32rem]
        text-white bg-black lg:gap-4 md:gap-7 py-8 md:py-12 lg:pb-[30px] lg:pr-[68px] lg:[pt-42px] lg:pl-[52px] "
        >
          <img
            src="../../public/imgs/login/Group 296.svg"
            alt=""
            className="absolute -top-[3rem] right-0 w-8"
          />
          <h2 className="text-3xl font-bold md:text-4xl lg:text-[2rem]">
            ¡Hola!{" "}
          </h2>
          <p className="text-justify lg:text-sm">
            Inicie sesion con los datos que ingreso durante su registro
          </p>
          <span className="flex flex-col lg:text-base gap-1">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email")}
              placeholder="john.doe@gmail.com"
              className="h-[48px] lg:h-[53px] rounded-md bg-transparent border-2 pl-3"
            />
            <label htmlFor="password" className="font-bold">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password")}
              placeholder="********"
              className="h-[48px] lg:h-[53px] rounded-md bg-transparent border-2 pl-3"
            />
          </span>
          <li className="text-xs md:text-base text-[#D9D9D9] font-light lg:mb-2">
            ¿Olvidaste tu Contraseña? &nbsp;
            <a href="" className="underline text-[#F3F243]">
              Recuperala aquí
            </a>
          </li>
          <button
            type="submit"
            className="h-[48px] lg:h-[53px] bg-[#F3F243] rounded-md text-black font-bold"
          >
            Iniciar sesion
          </button>
          <a href="" className="text-center text-[#F3F243] underline">
            O crea una cuenta Aqui
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
