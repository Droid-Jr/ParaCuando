export function Fields() {
  return (
    <>
      <div className="absolute bg-paraCuando top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-black to-black"></div>
      <img
        src="../../public/imgs/login/LOGO.svg"
        alt=""
        className="sm:w-1/5 lg:flex-1 lg:h-2/5"
      />
    </>
  );
}

function Login() {
  return (
    <div className="h-full text-white font-semibold px-4 flex flex-col items-center gap-8 py-8 lg:flex-row sm:gap-12 sm:px-12 sm:py-12 sm:justify-center lg:px-24">
      <Fields />
      <form
        action="/"
        className="relative h-full border w-full rounded-xl flex flex-col justify-center gap-2 px-12 bg-opacity-70 bg-black lg:flex-1 sm:h-4/5 lg:gap-4"
      >
        <img
          src="../../public/imgs/login/Group 296.svg"
          alt=""
          className="absolute top-0 right-0 w-8 m-4"
        />
        <h2 className="text-3xl font-bold">¡Hola! </h2>
        <p className="text-justify">
          Inicie sesion con los datos que ingreso durante su registro
        </p>
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
          ¿Olvidaste tu Contraseña? &nbsp;
          <a href="" className="underline text-[#F3F243]">
            Recuperala aquí
          </a>
        </li>
        <input
          type="submit"
          value="Iniciar sesion"
          className="p-3 bg-[#F3F243] rounded-md text-black font-bold my-4"
        />
        <a href="" className="text-center text-[#F3F243] underline">
          O crea una cuenta Aqui
        </a>
      </form>
    </div>
  );
}

export default Login;
