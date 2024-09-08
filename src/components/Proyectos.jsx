const Proyectos = () => {
  return (
    <div id="proyectos" className="container bg-gray-900 md:w-[80%] mt-36 mx-auto p-4">
        <h1 className="text-4xl text-slate-300 font-black pb-20 text-center mt-10">Curso<span className="text-indigo-600">Lancer</span></h1>

        <div className=" md:grid md:grid-cols-2 max-w-[100rem] pb-24 md:gap-16 mt-10 mx-auto ">
            
              <a target="_blank" href="https://lordkevinrblogdecafeproject.netlify.app/" className="md:mb-16 hover:scale-105 hover:transition-all hover:duration-300 duration-300 mb-10">
               <img  src="src/img/blogcafe.png" alt="proyecto blog de cafe" />
              </a>

              <div className="col-start-2 mt-10 md:mt-0 col-span-2" >

                <a className="text-gray-700 hover:text-indigo-600 underline font-bold text-3xl duration-200 hover:transition-all hover:duration-200" target="_blank" href="https://lordkevinrblogdecafeproject.netlify.app/">Proyecto Blog de Café</a>

                <ul className="mt-5 md:mb-0 text-gray-700 mb-24 font-bold text-xl">
                  <li>Tecnologias Usadas:</li>
                  <li>- Responsive Desing</li>
                  <li>- SASS</li>
                  <li>- Gulp</li>
                  <li>- HTML</li>
                  <li>- CSS</li>
                  <li>- Git</li>
                </ul>

              </div>
            
              <a target="_blank" href="https://citas-react-vite-tawildcss-more.netlify.app/"  className="mb-16 hover:scale-105 hover:transition-all hover:duration-300 duration-300">
              <img className="" src="src/img/veterinaria.png" alt="proyecto blog de cafe" />
              </a>
              <div className="col-start-2 mt-10 md:mt-0 col-span-2" >
                <a className="text-gray-700 hover:text-indigo-600 underline font-bold text-3xl duration-200 hover:transition-all hover:duration-200" target="_blank" href="https://citas-react-vite-tawildcss-more.netlify.app/">Proyecto Citas con React</a>
                <ul className="mt-5 md:mb-0 mb-24 text-gray-700 font-bold text-xl">
                  <li>Tecnologias Usadas:</li>
                  <li>- React</li>
                  <li>- TailWindCSS</li>
                  <li>- LocalStorage</li>
                  <li>- Responsive Desing</li>
                  <li>- HTML</li>
                  <li>- JavaScript</li>
                </ul>
              </div>
            
              <a target="_blank" href="https://lordkevinrmusicalfestivalproject.netlify.app" className="mb-16 hover:scale-105 hover:transition-all hover:duration-300 duration-300">
              <img className="" src="src/img/festival.png" alt="proyecto blog de cafe" />
              </a>
              <div className="col-start-2 mt-10 md:mt-0 col-span-2" >
                <a className="text-gray-700 hover:text-indigo-600 underline font-bold text-3xl duration-200 hover:transition-all hover:duration-200" target="_blank" href="https://lordkevinrmusicalfestivalproject.netlify.app/">Proyecto Rock & EDM Festival</a>
                <ul className="mt-5 mb-24 md:mb-0 text-gray-700 font-bold text-xl">
                  <li>Tecnologias Usadas:</li>
                  <li>- Responsive Desing</li>
                  <li>- JavaScript</li>
                  <li>- SASS</li>
                  <li>- Gulp</li>
                  <li>- HTML</li>
                  <li>- CSS</li>
                  <li>- Git</li>
                </ul>
              </div>
            
            
              <a target="_blank" href="https://lordkevinrfrontstoreproject.netlify.app/" className="mb-16 hover:scale-105 hover:transition-all hover:duration-300 duration-300">
              <img className="" src="src/img/frontend.png" alt="proyecto blog de cafe" />
              </a>
              <div className="col-start-2 mt-10 md:mt-0 col-span-2" >
                <a className="text-gray-700 hover:text-indigo-600 underline font-bold text-3xl duration-200 hover:transition-all hover:duration-200" target="_blank" href="https://lordkevinrfrontstoreproject.netlify.app/">Proyecto FrontEnd Store</a>
                <ul className="mt-5 mb-24 md:mb-0 text-gray-700 font-bold text-xl">
                  <li>Tecnologias Usadas:</li>
                  <li>- Responsive Desing</li>
                  <li>- SASS</li>
                  <li>- Gulp</li>
                  <li>- HTML</li>
                  <li>- CSS</li>
                  <li>- Git</li>
                </ul>
              </div>
            
            

            
        </div>
    </div>
  )
}

export default Proyectos