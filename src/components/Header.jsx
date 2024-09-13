import { Email } from "./logos/Email";
import { Spotlight } from "../components/ui/Spotlight";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const words = [
    {
      text: ".NET",
      className: "text-2xl text-indigo-400 font-black",
    },
    {
      text: "Fullstack",
      className: "text-2xl text-indigo-400 font-black",
    },
    {
      text: "&",
      className: "text-2xl text-indigo-400 font-black",
    },
    {
      text: "Mobile",
      className: "text-2xl text-indigo-400 font-black",
    },
    {
      text: "Developer.",
      className: "text-2xl text-slate-300 font-black",
    },
  ];

  return (
    <div id="header" className="max-w-[75rem] mx-auto">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="-top-[15%] left-[50%]" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      <div className="lg:flex lg:justify-evenly items-center mt-10 md:mt-64 mb-64">
        <Fade duration={2000}>
          <div className="border md:w-[15rem] md:h-[15rem] w-[10rem] h-[10rem] mb-5 lg:mb-0 mx-auto lg:mx-0 rounded-full flex justify-center items-center overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="img/Fotomia.png"
              alt="imagen mia"
            />
          </div>
        </Fade>

        <div className="flex flex-col">
          <Fade direction="down">
            <h1 className="font-black text-5xl text-center lg:text-start text-slate-300">
              Kevin Sánchez <span className="text-indigo-400 ">-</span>{" "}
              Portafolio
            </h1>
          </Fade>

          <div className="mt-16 md:mt-0">
            <div className="flex justify-center lg:justify-start">
              <TypewriterEffectSmooth words={words} />
            </div>
          </div>

          <Fade direction="up">
            <div className="w-full place-items-center">
              <p className="text-white  text-center lg:text-start font-bold text-xl">
                Transformo ideas en{" "}
                <span className="text-indigo-400">soluciones digitales.</span>
              </p>
              <p className="text-white  text-center lg:text-start font-bold text-xl">
                <span className="text-indigo-400"> Escribiendo código</span> que
                impulsa la innovación.
              </p>
            </div>
          </Fade>

          <Fade direction="right">
            <section className="flex flex-wrap gap-5 text-white mt-10 lg:justify-start justify-center animate__shakeX animate__animated animate__delay-1s">
              <div className="social-links">
                <a
                  id="linkedin"
                  className="social-btn flex-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/kevinsanchezdev/"
                >
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  id="github"
                  className="social-btn flex-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/LordKevinR"
                >
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  <span>Github</span>
                </a>

                <a id="twitter" className="social2-btn flex-center">
                  <Email />
                  <span>Kevinadonis0123@gmail.com</span>
                </a>
              </div>
            </section>
          </Fade>
        </div>
      </div>

      {/* <p className="grid md:mt-[25rem] mt-28 lg:mt-20 animate-bounce place-items-center text-5xl ">
          <FlechaAbajo/>
          </p> */}
    </div>
  );
};

export default Header;
