import { Fields } from "./Login";
function Register() {
  return (
    <div className="h-full text-white font-semibold px-4 flex flex-col items-center gap-8 py-8 lg:flex-row sm:gap-12 sm:px-12 sm:py-12 sm:justify-center lg:px-24">
      <Fields />
      <form
        action="/"
        className="relative h-full border w-full rounded-xl flex flex-col justify-center gap-2 px-12 bg-opacity-70 bg-black lg:flex-1 sm:h-4/5 lg:gap-4 md:gap-4"
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
          name="email"
          id="email"
          placeholder="john.doe@gmail.com"
          className="p-3 rounded-md bg-transparent border-2"
        />
        <span className="flex gap-2">
          <span>
            <label htmlFor="nombre" className="font-bold">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="John Doe"
              className="p-3 rounded-md bg-transparent border-2 w-full"
            />
          </span>
          <span>
            <label htmlFor="apellido" className="font-bold">Apellido</label>
            <input
              type="text"
              name="apellido"
              id="apellido"
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
          name="password"
          id="password"
          placeholder="********"
          className="p-3 rounded-md bg-transparent border-2"
        />
        <li className="text-xs">
          Las Contraseñas deben tener mayusculas, minusculas y numeros
        </li>
        <input
          type="submit"
          value="Crear Cuenta"
          className="p-3 bg-[#F3F243] rounded-md text-black font-bold my-4"
        />
        <a href="" className="text-center text-[#F3F243] underline">
          O inicia sesion
        </a>
      </form>
    </div>
  );
}

export default Register;
