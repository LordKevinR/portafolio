import { Fade } from "react-awesome-reveal";

const Tecnologias2 = () => {
  return (
    <div id="tecnologias" className="mt-20 pb-36">
      <Fade direction="up">
        <h1 className="text-slate-100 font-bold text-center text-5xl pt-16">
          Tecnologías
        </h1>
      </Fade>
      <Fade direction="left">
        <p className="text-gray-300 text-center mt-40 text-4xl font-bold">
          Frontend
        </p>
        <div className=" mx-auto mt-10 lg:flex justify-center gap-10 grid grid-cols-3">
          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">React</p>
            <img className="mt-1" src={"img/react.webp"} width={50} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl whitespace-nowrap">
              React Native
            </p>
            <img className="-mt-1" src={"img/reactnative.svg"} width={75} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">Angular</p>
            <img className="-mt-1" src={"img/Angular.png"} width={65} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">Javascript</p>
            <img
              className="mt-1 rounded-lg"
              src={"img/JavaScript.png"}
              width={50}
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">TypeScript</p>
            <img className="mt-1 rounded-lg" src={"img/ts.png"} width={50} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">TailwindCSS</p>
            <img className="mt-1" src={"img/tailwind.png"} width={75} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">Bootstrap</p>
            <img className="" src={"img/bootstrap.png"} width={70} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">HTML</p>
            <img className="mt-1 rounded-lg" src={"img/html.png"} width={50} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">CSS</p>
            <img className="mt-1" src={"img/css.png"} width={50} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">NET Maui</p>
            <img className="" src={"img/maui.webp"} width={43} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">Flutter</p>
            <img className="mt-1" src={"img/flutter.png"} width={40} />
          </div>
        </div>
      </Fade>
      <Fade direction="right">
        <p className="text-gray-300 text-center mt-40 text-4xl font-bold">
          Backend
        </p>
        <div className="mx-auto mt-10 lg:flex justify-center gap-10  grid grid-cols-3">
          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">C#</p>
            <img className="mt-1" src={"img/csharp.png"} width={45} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl whitespace-nowrap">
              Visual Basic
            </p>
            <img className="mt-1 rounded-lg" src={"img/vb.png"} width={55} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">.NET</p>
            <img className="mt-1" src={"img/net.webp"} width={50} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl whitespace-nowrap">
              EF Core
            </p>
            <img
              className="mt-1 rounded-full"
              src={"img/EFCore.png"}
              width={53}
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl whitespace-nowrap">
              SQL Server
            </p>
            <img className="mt-1" src={"img/sqls.png"} width={53} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl whitespace-nowrap">
              ASP.NET
            </p>
            <img className="mt-1 rounded-full" src={"img/asp.png"} width={50} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl">Dart</p>
            <img className="mt-1" src={"img/dart.png"} width={50} />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-gray-300 font-bold text-xl whitespace-nowrap">
              Visual Studio
            </p>
            <img className="mt-2 rounded-lg" src={"img/vs.png"} width={50} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Tecnologias2;
