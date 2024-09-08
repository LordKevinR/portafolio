import React from 'react'

const ProyectosEnProceso = () => {
    return (
        <div id="proyectos" className=" bg-slate-300 mx-auto p-4">

            <h1 className="text-4xl text-gray-700 font-black pb-20 text-center mt-10">Proyectos en <span className="text-indigo-600">Proceso</span></h1>
    
            <div className="md:w-[80%] md:grid md:grid-cols-2 max-w-[100rem] md:gap-16 mt-10 mx-auto ">
              
                  <video controls className="mb-16 hover:scale-105 hover:transition-all hover:duration-300 duration-300" src="src/img/bienesraices.mp4" alt="proyecto blog de cafe" />

                  <div className="col-start-2 col-span-2" >
                    <a className="text-gray-700 hover:text-indigo-600 underline font-bold text-3xl duration-200 hover:transition-all hover:duration-200" target="_blank" href="https://citas-react-vite-tawildcss-more.netlify.app/">Proyecto Bienes Raices</a>
                    <ul className="mt-5 md:mb-0 mb-24 text-gray-700 font-bold text-xl">
                      <li>Tecnologias Usadas:</li>
                      <li>- php</li>
                      <li>- MySql</li>
                      <li>- JavaScript, HTML, CSS</li>
                      <li>- Responsive Desing</li>
                      <li>- POO</li>
                      <li>- CRUD</li>
                      <li>- SASS</li>
                    </ul>
                  </div>


                  <img className="md:mb-16 hover:scale-105 hover:transition-all hover:duration-300 duration-300 mb-10" src="src/img/ReactControlDeGastos.png" alt="proyecto blog de cafe" />

                  <div className="col-start-2 pb-36 col-span-2" >
                    <a className="text-gray-700 hover:text-indigo-600 underline font-bold text-3xl duration-200 hover:transition-all hover:duration-200" target="_blank" href="https://lordkevinrblogdecafeproject.netlify.app/">Proyecto Planificador De Gastos</a>
                    <ul className="mt-5 md:mb-0 text-gray-700 mb-24 font-bold text-xl">
                      <li>Tecnologias Usadas:</li>
                      <li>- React</li>
                      <li>- TailWindCSS</li>
                      <li>- LocalStorage</li>
                      <li>- Responsive Desing</li>
                      <li>- HTML</li>
                      <li>- JavaScript</li>
                    </ul>
                  </div>

            </div>
        </div>
      )
    }
    

export default ProyectosEnProceso