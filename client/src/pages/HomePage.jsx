import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>

  <section className="flex justify-center items-center px-1">
    <header className="bg-zinc-700 p-10">
      <h1 className="text-5xl py-2 font-bold">Registro Universidad Nacional Autonoma de Honduras</h1>
      <p className="text-md text-slate-400">
        Binvenido al Sistema de registro de la Universidad Nacional Autonoma de Honduras
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/login"
      >
        Inicio de Sesión
      </Link>
    </header>
  </section>
  </>
  );
}

export default HomePage;
