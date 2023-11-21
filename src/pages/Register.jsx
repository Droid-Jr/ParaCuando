import React from "react";
import axios from "axios";
import { Fields } from "../pages/Login";
import { Toaster, toast } from "sonner";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registers = (data) => {
    axios
      .post(`http://localhost:4000/register`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Registro Exitoso");
        setTimeout(() => {
          navigate("/login");
        }, 1200);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="h-full text-white font-semibold px-4 flex flex-col items-center gap-8 py-8 lg:flex-row sm:gap-12 sm:px-12 sm:py-12 sm:justify-center lg:px-24">
      <Fields />
      <form
        onSubmit={handleSubmit(registers)}
        className="relative  border w-full rounded-xl flex flex-col justify-center gap-2 px-12 bg-opacity-70 bg-black lg:flex-1 lg:gap-2 md:gap-4 py-8 md:py-12 lg:py-16"
      >
        <img
          src="../../public/imgs/login/Group 296.svg"
          alt=""
          className="absolute top-0 right-0 w-8 m-4"
        />
        <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
          Todos votamos :D{" "}
        </h2>
        <p className="text-justify">Registrarte, valida tu voto.</p>
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="john.doe@gmail.com"
          className="p-3 rounded-md bg-transparent border-2"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <span className="flex gap-2">
          <span className="w-full">
            <label htmlFor="username" className="font-bold">
              Nombre
            </label>
            <input
              type="text"
              id="username"
              {...register("username", {
                required: "Name is required",
                maxLength: {
                  value: 20,
                  message: "Max length is 20",
                },
              })}
              placeholder="John Doe"
              className="p-3 rounded-md bg-transparent border-2 w-full"
            />
          {errors.username && <p className="text-red-600">{errors.username.message}</p>}
          </span>
          <span className="w-full">
            <label htmlFor="lastname" className="font-bold">
              Apellido
            </label>
            <input
              type="text"
              id="lastname"
              {...register("lastname", {
                required: "Lastname is required",
                maxLength: {
                  value: 20,
                  message: "Max length is 20",
                },
              })}
              placeholder="John Doe"
              className="p-3 rounded-md bg-transparent border-2 w-full"
            />
          {errors.lastname && <p className="text-red-600">{errors.lastname.message}</p>}
          </span>
        </span>
        <label htmlFor="password" className="font-bold">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Min length is 8",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
              message: "Invalid password",
            },
          })}
          placeholder="********"
          className="p-3 rounded-md bg-transparent border-2"
        />
        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        <li className="text-xs">
          Las Contraseñas deben tener mayusculas, minusculas y numeros
        </li>
        <button
          type="submit"
          className="p-3 bg-[#F3F243] rounded-md text-black font-bold my-4"
        >
          Register{" "}
        </button>
        <a href="" className="text-center text-[#F3F243] underline">
          O inicia sesion
        </a>
      </form>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default Register;
