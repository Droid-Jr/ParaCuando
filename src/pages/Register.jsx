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
    <div className="h-full w-full px-4 flex flex-col items-center py-8 lg:flex-row gap-8 sm:gap-12 sm:px-12 lg:px-0 lg:gap-0">
      <Fields />
      <div className="lg:flex-1 w-full">
        <form
          onSubmit={handleSubmit(registers)}
          className="h-[35rem] relative px-[2.4rem]  lg:w-[34.8125rem] lg:h-[35rem] border w-full rounded-xl flex flex-col justify-center lg:justify-normal gap-4 bg-opacity-70 md:h-[37rem]
        text-white bg-black lg:gap-4 md:gap-7 py-8 md:py-12 lg:pb-[30px] lg:pr-[68px] lg:[pt-42px]lg:pl-[52px]"
        >
          <img
            src="../../public/imgs/login/Group 296.svg"
            alt=""
            className="absolute -top-[3rem] right-0 w-8"
          />
          <h2 className="text-3xl font-bold md:text-4xl lg:text-[2rem]">
            Todos votamos :){" "}
          </h2>
          <p className="text-justify lg:text-sm">
            Registrarte, valida tu voto.
          </p>
          <span className="flex flex-col lg:text-base gap-1">
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
              className="h-[48px] lg:h-[53px] rounded-md bg-transparent border-2 pl-3"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
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
                  className="h-[48px] lg:h-[53px] rounded-md bg-transparent border-2 w-full pl-3"
                />
                {errors.username && (
                  <p className="text-red-600">{errors.username.message}</p>
                )}
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
                  placeholder="Dut Down"
                  className="h-[48px] lg:h-[53px] rounded-md bg-transparent border-2 w-full pl-3"
                />
                {errors.lastname && (
                  <p className="text-red-600">{errors.lastname.message}</p>
                )}
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
              className="h-[48px] lg:h-[53px] rounded-md bg-transparent border-2 pl-3"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            <li className="text-sm md:text-base text-[#D9D9D9] font-light lg:mb-2">
              La contraseña debe tener mayúsculas, minúsculas y números
            </li>
          </span>
          <button
            type="submit"
            className="h-[48px] lg:h-[53px] bg-[#F3F243] rounded-md text-black font-bold"
          >
            Crear Cuenta{" "}
          </button>
          <a href="" className="text-center text-[#F3F243] underline">
            O inicia sesion
          </a>
        </form>
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default Register;
