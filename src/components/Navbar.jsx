import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="md:flex max-w-[75rem] rounded-3xl bg-gray-900/60 border pt-2 px-10 pb-3 border-slate-500 mt-5 mx-auto md:justify-around 2xl:justify-between text-center md:items-center  backdrop-blur animate__animated animate__fadeInDown">
      <div>
        <Link to="header" spy={true} smooth={true} offset={50} duration={500}>
          <p className="font-bold hover:scale-110 duration-200 hover:rounded-lg hover:transition-all hover:duration-200 text-2xl cursor-pointer text-indigo-400">
            &lt;<span className="text-slate-300">KS</span>/&gt;
          </p>
        </Link>
      </div>

      <div className="md:flex grid gap-3 md:gap-6 ">
        <Link
          to="proyectos"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-bold hover:scale-110 duration-200 cursor-pointer hover:rounded-lg hover:transition-all hover:duration-100 text-2xl text-slate-300"
        >
          Proyectos
        </Link>

        <Link
          to="tecnologias"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-bold hover:scale-110 cursor-pointer duration-200 hover:rounded-lg hover:transition-all hover:duration-100 text-2xl text-indigo-400"
        >
          Tecnologías
        </Link>

        {/* <a href="#sobremi" className="font-bold hover:scale-110 duration-200 hover:rounded-lg hover:transition-all hover:duration-100 text-2xl text-slate-300">Sobre Mi</a> */}

        <Link
          to="contacto"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-bold hover:scale-110 cursor-pointer duration-200 hover:rounded-lg hover:transition-all hover:duration-100 text-2xl text-slate-300"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
