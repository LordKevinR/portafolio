import { Card } from "../components/Card";
import { BackgroundGradient } from "./ui/background-gradient";

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
        <div className="w-full lg:col-span-2">
          <BackgroundGradient className="bg-zinc-900">
            <Card
              image1={"img/indicencias1.webp"}
              image2={"img/gradiente.webp"}
              title={"Manejo de Incidencias"}
              height={"h-[35rem]"}
              desc={`Proyecto que tuvo como objetivo administrar las incidencias
                    del día a día en el departamento de mantenimiento del hospital
                    donde trabajaba. La aplicación no busca sustituir el sistema
                    interno de incidencias del hospital, sino complementarse con
                    el personal y reemplazar los mensajes de WhatsApp, ya que a
                    menudo se pierden en la comunicación diaria.`}
              size={"max-w-xs"}
            />
          </BackgroundGradient>
        </div>
        <div className="lg:flex lg:flex-col h-full gap-4 justify-between">
          <BackgroundGradient className="bg-zinc-900">
            <Card
              image1={"img/incidencias.webp"}
              image2={"img/gradiente.webp"}
              title={"Tecnologías utilizadas"}
              height={"h-[16.5rem]"}
              desc={".NET MAUI, ASP.NET, Entity Framework Core y SQL Server "}
              size={"max-w-xs"}
            />
          </BackgroundGradient>

          <BackgroundGradient className="bg-zinc-900">
            <Card
              image1={"img/incidencias.webp"}
              image2={"img/gradiente.webp"}
              title={"Background Overlays"}
              height={"h-[17rem]"}
              desc={
                "This card is for some special elements, like displaying background gifs on hover only."
              }
              size={"max-w-xs"}
            />
          </BackgroundGradient>
        </div>
      </div>

      <div className="lg:grid mt-4 lg:grid-cols-3 gap-4">
        <div className="lg:flex lg:flex-col h-full gap-4 justify-between">
          <BackgroundGradient className="bg-zinc-900">
            <Card
              image1={"img/resonancia1.webp"}
              image2={"img/gradiente2.webp"}
              title={"Tecnologías utilizadas"}
              height={"h-[16.5rem]"}
              desc={".NET MAUI, ASP.NET, Entity Framework Core y SQL Server "}
              size={"max-w-xs"}
            />
          </BackgroundGradient>

          <BackgroundGradient className="bg-zinc-900">
            <Card
              image1={"img/resonancia3.webp"}
              image2={"img/gradiente2.webp"}
              title={"Background Overlays"}
              height={"h-[17rem]"}
              desc={
                "This card is for some special elements, like displaying background gifs on hover only."
              }
              size={"max-w-xs"}
            />
          </BackgroundGradient>
        </div>
        <div className="w-full lg:col-span-2">
          <BackgroundGradient className="bg-zinc-900">
            <Card
              image1={"img/resonancia2.webp"}
              image2={"img/gradiente2.webp"}
              title={"Manejo de Incidencias"}
              height={"h-[35rem]"}
              desc={`Proyecto que tuvo como objetivo administrar las incidencias
                    del día a día en el departamento de mantenimiento del hospital
                    donde trabajaba. La aplicación no busca sustituir el sistema
                    interno de incidencias del hospital, sino complementarse con
                    el personal y reemplazar los mensajes de WhatsApp, ya que a
                    menudo se pierden en la comunicación diaria.`}
              size={"max-w-xs"}
            />
          </BackgroundGradient>
        </div>
      </div>
      <div className="lg:grid mt-4 lg:grid-cols-3 gap-4">
        <div className="w-full lg:col-span-2">
          <BackgroundGradient className="bg-zinc-900">
            <Card
              image1={"img/parqueos4.webp"}
              image2={"img/gradiente3.webp"}
              title={"Manejo de Incidencias"}
              height={"h-[35rem]"}
              desc={`Proyecto que tuvo como objetivo administrar las incidencias
                    del día a día en el departamento de mantenimiento del hospital
                    donde trabajaba. La aplicación no busca sustituir el sistema
                    interno de incidencias del hospital, sino complementarse con
                    el personal y reemplazar los mensajes de WhatsApp, ya que a
                    menudo se pierden en la comunicación diaria.`}
              size={"max-w-xs"}
            />
          </BackgroundGradient>
        </div>
        <div className="lg:flex lg:flex-col h-full gap-4 justify-between">
          <BackgroundGradient className="bg-zinc-900">
            <Card
              image1={"img/parqueos2.webp"}
              image2={"img/gradiente3.webp"}
              title={"Tecnologías utilizadas"}
              height={"h-[16.5rem]"}
              desc={".NET MAUI, ASP.NET, Entity Framework Core y SQL Server "}
              size={"max-w-xs"}
            />
          </BackgroundGradient>

          <BackgroundGradient className="bg-zinc-900">
            <Card
              image1={"img/parqueos1.webp"}
              image2={"img/gradiente3.webp"}
              title={"Background Overlays"}
              height={"h-[17rem]"}
              desc={
                "This card is for some special elements, like displaying background gifs on hover only."
              }
              size={"max-w-xs"}
            />
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
