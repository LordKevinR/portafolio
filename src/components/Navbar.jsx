import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="md:flex max-w-[75rem] rounded-3xl bg-gray-900/60 border pt-2 px-10 pb-3 border-slate-500 mt-5 mx-auto md:justify-around 2xl:justify-between text-center md:items-center  backdrop-blur animate__animated animate__fadeInDown">
      <div>
        <Link to="header" spy={true} smooth={true} offset={50} duration={500}>
          <p className="font-bold hover:transition-all text-2xl cursor-pointer text-indigo-400">
            &lt;<span className="text-slate-300 hover:text-slate-50">KS</span>
            /&gt;
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
          className="font-bold cursor-pointer hover:transition-all transition-all text-2xl text-slate-300 hover:text-slate-50"
        >
          Proyectos
        </Link>

        <Link
          to="tecnologias"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-bold cursor-pointer hover:transition-all text-2xl text-indigo-400 hover:text-indigo-200"
        >
          Tecnologías
        </Link>

        {/* <a href="#sobremi" className="font-bold hover:transition-all text-2xl text-slate-300 hover:text-slate-50">Sobre Mi</a> */}

        <Link
          to="contacto"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-bold cursor-pointer hover:transition-all text-2xl text-slate-300 hover:text-slate-50"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
