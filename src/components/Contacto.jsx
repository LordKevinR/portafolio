import { Linkedin } from "./logos/Linkedin";
import { GitHub } from "./logos/Github";
import { EmailDos } from "./logos/EmailDos";

const Contacto = () => {
  return (
    <div id="contacto" className="  pt-16 pb-36">
      <h1 className="text-5xl text-slate-300 font-black pb-20 text-center">
        Contacto
      </h1>
      <section className="grid grid-cols-3 m-auto max-w-xs gap-y-12">
        <a
          target="_blank"
          rel="noreferrer"
          className="text-5xl pl-12 hover:scale-105 duration-200 hover:transition-all hover:duration-200"
          href="https://www.linkedin.com/in/kevin-adonis-s%C3%A1nchez-rodr%C3%ADguez-7097b71a6/"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-slate-300 font-bold mt-1.5 col-span-2 hover:scale-105 duration-200 hover:transition-all hover:duration-200"
          href="https://www.linkedin.com/in/kevin-adonis-s%C3%A1nchez-rodr%C3%ADguez-7097b71a6/"
        >
          Mi LinkedIn
        </a>

        {/* <a target='_blank' className='text-5xl pl-12 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.instagram.com/lordkevin.r/"><Instagram/></a>
                <a target='_blank' className='text-2xl text-slate-300 font-bold mt-1.5 col-span-2 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.instagram.com/lordkevin.r/">lordkevin.r</a> */}

        <a
          target="_blank"
          rel="noreferrer"
          className="text-5xl pl-12 hover:scale-105 duration-200 hover:transition-all hover:duration-200"
          href="https://github.com/LordKevinR"
        >
          <GitHub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-2xl text-slate-300 font-bold mt-1.5 col-span-2 hover:scale-105 duration-200 hover:transition-all hover:duration-200"
          href="https://github.com/LordKevinR"
        >
          LordKevinR
        </a>

        <p className="text-5xl pl-12">
          <EmailDos />
        </p>
        <p className="text-2xl font-bold text-slate-300 mt-1.5 col-span-2 break-words md:break-normal">
          kevinadonis0123@gmail.com
        </p>
      </section>
    </div>
  );
};

export default Contacto;
