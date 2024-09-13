import { Card } from "../components/Card";
import { Fade } from "react-awesome-reveal";

const Freelancer = () => {
  return (
    <div id="proyectos" className="max-w-[75rem] mx-auto items-center mt-36">
      <h1 className="text-4xl text-slate-300 font-black pb-5 text-center">
        Proyectos
      </h1>
      <p className="text-2xl text-indigo-400 font-black pb-20 text-center">
        &quot;No se incluyen proyectos de cursos&quot;
      </p>
      <div className="lg:grid lg:grid-cols-3 gap-4">
        <div className="w-full lg:col-span-2 ">
          <Fade>
            <Card
              image1={"img/indicencias1.webp"}
              image2={"img/gradiente.webp"}
              title={"Manejo de Incidencias"}
              height={"mt-5 lg:mt-0 h-[35rem]"}
              desc={`Proyecto que tuvo como objetivo administrar las incidencias
                    del día a día en el departamento de mantenimiento del hospital
                    donde trabajaba. La aplicación no busca sustituir el sistema
                    interno de incidencias del hospital, sino complementarse con
                    el personal y reemplazar los mensajes de WhatsApp, ya que a
                    menudo se pierden en la comunicación diaria.`}
              size={"max-w-xs"}
            />
          </Fade>
        </div>

        <div className="lg:flex lg:flex-col h-full gap-4 justify-between">
          <Fade delay={50}>
            <Card
              image1={"img/incidencias.webp"}
              image2={"img/gradiente.webp"}
              title={"Tecnologías mobile utilizadas"}
              height={"mt-5 lg:mt-0 h-[16.5rem]"}
              desc={".NET MAUI,"}
              size={"max-w-xs"}
            />
          </Fade>
          <Fade delay={100}>
            <Card
              image1={"img/incidencias.webp"}
              image2={"img/gradiente.webp"}
              title={"Tecnologías backend utilizadas"}
              height={"mt-5 lg:mt-0 h-[17rem]"}
              desc={"ASP.NET, Entity Framework Core y SQL Server"}
              size={"max-w-xs"}
            />
          </Fade>
        </div>
      </div>

      <div className="lg:grid mt-4 lg:grid-cols-3 gap-4">
        <div className="lg:flex lg:flex-col h-full gap-4 justify-between">
          <Fade delay={50}>
            <Card
              image1={"img/resonancia1.webp"}
              image2={"img/gradiente2.webp"}
              title={"Tecnologías frontend utilizadas"}
              height={"mt-5 lg:mt-0 h-[16.5rem]"}
              desc={"React, JSX, Vite, Tailwind"}
              size={"max-w-xs"}
            />
          </Fade>
          <Fade delay={100}>
            <Card
              image1={"img/resonancia3.webp"}
              image2={"img/gradiente2.webp"}
              title={"Tecnologías backend utilizadas"}
              height={"mt-5 lg:mt-0 h-[17rem]"}
              desc={".NET con Entity Framework Core y SQL Server."}
              size={"max-w-xs"}
            />
          </Fade>
        </div>
        <div className="w-full lg:col-span-2">
          <Fade>
            <Card
              image1={"img/resonancia2.webp"}
              image2={"img/gradiente2.webp"}
              title={"Manejo de Turnos de Resonancia Magnética"}
              height={"mt-5 lg:mt-0 h-[35rem]"}
              desc={`Proyecto que tuvo como objetivo administrar las incidencias
                    del día a día en el departamento de mantenimiento del hospital
                    donde trabajaba. La aplicación no busca sustituir el sistema
                    interno de incidencias del hospital, sino complementarse con
                    el personal y reemplazar los mensajes de WhatsApp, ya que a
                    menudo se pierden en la comunicación diaria.`}
              size={"max-w-xs"}
            />
          </Fade>
        </div>
      </div>

      <div className="lg:grid mt-4 lg:grid-cols-3 gap-4">
        <div className="w-full lg:col-span-2">
          <Fade delay={50}>
            <Card
              image1={"img/parqueos4.webp"}
              image2={"img/gradiente3.webp"}
              title={"Control de Acceso a Parqueos"}
              height={"mt-5 lg:mt-0 h-[35rem]"}
              desc={`Este es un proyecto muy sencillo que realicé para un grupo de estudiantes 
                universitarios que necesitaban un sistema que simulara la entrada y salida de 
                un estacionamiento, restando los espacios disponibles por cada vehículo que entra 
                y aumentando por cada vehículo que sale. El sistema debe mostrar en tiempo real los 
                espacios de estacionamiento disponibles, actualizando la cantidad por cada entrada 
                y salida de vehículos.`}
              size={"max-w-xs"}
            />
          </Fade>
        </div>
        <div className="lg:flex lg:flex-col h-full gap-4 justify-between">
          <Fade delay={100}>
            <Card
              image1={"img/parqueos2.webp"}
              image2={"img/gradiente3.webp"}
              title={"Tecnologías frontend utilizadas"}
              height={"mt-5 lg:mt-0 h-[16.5rem]"}
              desc={"React, JSX, Vite, Tailwind"}
              size={"max-w-xs"}
            />
          </Fade>

          <Fade>
            <Card
              image1={"img/parqueos1.webp"}
              image2={"img/gradiente3.webp"}
              title={"Tecnologías backend utilizadas"}
              height={"mt-5 lg:mt-0 h-[17rem]"}
              desc={".NET con Entity Framework Core y SQL Server."}
              size={"max-w-xs"}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
