<<<<<<< HEAD
import { Fields } from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
function Register({ setUser }) {
  const { register, handleSubmit } = useForm();
  const registerNew = (data) => {
    axios
      .post("http://localhost:9000/register", data)
      .then((res) => {
        // setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
=======
// import { Fields } from "./Login";
import axios from "axios";
import { Fields } from "../pages/Login";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const {register , handleSubmit} = useForm()
  const registers = (data) => {
    axios.post(`http://localhost:4000/register`, data)
      .then(res => {
        console.log(res.data);
        toast.success("Registro Exitoso");
       setTimeout(() => {
        navigate("/login");
       }, 1200);
      })
      .catch(err => {
        console.error("Error:", err);
      });
  };
  
  
>>>>>>> 2d65d3802abab807c4501f254cf9ae9d746cae6e

  return (
    <div className="h-full text-white font-semibold px-4 flex flex-col items-center gap-8 py-8 lg:flex-row sm:gap-12 sm:px-12 sm:py-12 sm:justify-center lg:px-24 md:py-0">
      <Fields />
      <form
<<<<<<< HEAD
        onSubmit={handleSubmit(registerNew)}
        className="relative h-full border w-full rounded-xl flex flex-col justify-center gap-2 px-12 bg-opacity-70 bg-black lg:flex-1 sm:h-4/5 lg:gap-4 md:gap-4"
=======
         onSubmit={handleSubmit(registers)}
        className="relative h-full border w-full rounded-xl flex flex-col justify-center gap-2 px-12 bg-opacity-70 bg-black lg:flex-1 sm:h-4/5 lg:gap-2 md:gap-4 2xl:gap-4"
>>>>>>> 2d65d3802abab807c4501f254cf9ae9d746cae6e
      >
        <img
          src="../../public/imgs/login/Group 296.svg"
          alt=""
          className="absolute top-0 right-0 w-8 m-4"
        />
        <h2 className="text-2xl font-bold md:text-5xl">Todos votamos :D </h2>
        <p className="text-justify">Registrarte, valida tu voto.</p>
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          type="email"
         
          {...register("email")}
          id="email"
          {...register("email")}
          placeholder="john.doe@gmail.com"
          className="p-3 rounded-md bg-transparent border-2"
        />
        <span className="flex gap-2">
          <span className="w-full">
<<<<<<< HEAD
            <label htmlFor="username" className="font-bold">
              Nombre
            </label>
            <input
              type="text"
              {...register("username")}
              
              id="username"
=======
            <label htmlFor="username" className="font-bold">Nombre</label>
            <input
              type="text"
              name="username"
              id="username"
              {...register("username")}
>>>>>>> 2d65d3802abab807c4501f254cf9ae9d746cae6e
              placeholder="John Doe"
              className="p-3 rounded-md bg-transparent border-2 w-full"
            />
          </span>
          <span className="w-full">
<<<<<<< HEAD
            <label htmlFor="lastname" className="font-bold">
              Apellido
            </label>
            <input
              type="text"
          
              {...register("lastname")}
              id="lastname"
=======
            <label htmlFor="lastname" className="font-bold">Apellido</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              {...register("lastname")}
>>>>>>> 2d65d3802abab807c4501f254cf9ae9d746cae6e
              placeholder="John Doe"
              className="p-3 rounded-md bg-transparent border-2 w-full"
            />
          </span>
        </span>
        <label htmlFor="password" className="font-bold">
          Contraseña
        </label>
        <input
          type="password"
          {...register("password")}
          id="password"
          {...register("password")}
          placeholder="********"
          className="p-3 rounded-md bg-transparent border-2"
        />
        <li className="text-xs">
          Las Contraseñas deben tener mayusculas, minusculas y numeros
        </li>
<<<<<<< HEAD
        <button className="p-3 bg-[#F3F243] rounded-md text-black font-bold my-4">
          Crear Cuenta
        </button>
=======
        <button
          type="submit"
          className="p-3 bg-[#F3F243] rounded-md text-black font-bold my-4"
        >Rregister </button>
>>>>>>> 2d65d3802abab807c4501f254cf9ae9d746cae6e
        <a href="" className="text-center text-[#F3F243] underline">
          O inicia sesion
        </a>
      </form>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default Register;
