import { Timeline } from "../components/ui/timeline";
import { Fade } from "react-awesome-reveal";

export default function Experiencia() {
  const data = [
    {
      title: "2024 - Presente",
      content: (
        <div>
          <div>
            <p className="text-gray-300 text-4xl font-normal">
              Universidad Iberoamericana (Unibe)
            </p>
            <p className="text-gray-300 text-2xl mt-2 font-normal mb-8 ">
              Desarrollador de software e integraciones
            </p>
            <Fade direction="right" duration={750}>
              <div className="text-gray-300 text-xl font-normal mb-8">
                <strong className="flex items-center gap-4">
                  <div className="bg-gray-300 mt-1 w-3 h-3 rounded-full hidden lg:flex"></div>
                  Desarrollo y gestión de la plataforma de Educación Continua:
                </strong>
                <p className="lg:ml-7">
                  Encargado del desarrollo, mantenimiento y mejora de la
                  plataforma de educación continua de la universidad.
                </p>
              </div>
            </Fade>
            <Fade direction="right" duration={750}>
              <div className="text-gray-300 text-xl font-normal mb-8">
                <strong className="flex items-center gap-4">
                  <div className="bg-gray-300 mt-1 w-3 h-3 rounded-full hidden lg:flex"></div>
                  Integración de sistemas y automatización:
                </strong>
                <p className="lg:ml-7">
                  Desarrollo e implementación de integraciones entre nuestra
                  plataforma y sistemas externos, automatizando procesos clave y
                  mejorando la interoperabilidad de las plataformas.
                </p>
              </div>
            </Fade>

            <Fade direction="right" duration={750}>
              <div className="text-gray-300 text-xl font-normal mb-8">
                <strong className="flex items-center gap-4">
                  <div className="bg-gray-300 mt-1 w-3 h-3 rounded-full hidden lg:flex"></div>
                  Desarrollo de software de exoneración de idiomas:
                </strong>
                <p className="lg:ml-7">
                  Diseñé y programé un sistema automatizado para la exoneración
                  de idiomas, basado en los resultados de exámenes, que permite
                  la evaluación eficiente de los estudiantes.
                </p>
              </div>
            </Fade>

            <Fade direction="right" duration={750}>
              <div className="text-gray-300 text-xl font-normal mb-8">
                <strong className="flex items-center gap-4">
                  <div className="bg-gray-300 mt-1 w-3 h-3 rounded-full hidden lg:flex"></div>
                  Entranamiento a desarrolladores junior:
                </strong>
                <p className="lg:ml-7">
                  He participado en entrenamientos y sesiones de desarrollo para
                  los desarrolladores junior, donde he compartido conocimientos
                  y experiencia con otros desarrolladores.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <div>
            <p className="text-gray-300 text-4xl font-normal mb-8 ">
              Desarrollador de software freelancer
            </p>
            <Fade direction="right" duration={750}>
              <div className="text-gray-300 text-xl font-normal mb-8">
                <strong className="flex items-center gap-4">
                  <div className="bg-gray-300 mt-1 w-3 h-3 rounded-full hidden lg:flex"></div>
                  Desarrollo de una app móvil para gestionar incidencias.
                </strong>
                <p className="lg:ml-7">
                  Proyecto que tuvo como objetivo administrar las incidencias
                  del día a día en el departamento de mantenimiento del hospital
                  donde trabajaba. La aplicación no busca sustituir el sistema
                  interno de incidencias del hospital, sino complementarse con
                  el personal y reemplazar los mensajes de WhatsApp, ya que a
                  menudo se pierden en la comunicación diaria.
                </p>
              </div>
            </Fade>
            <Fade direction="right" duration={750}>
              <div className="text-gray-300 text-xl font-normal mb-8">
                <strong className="flex items-center gap-4">
                  <div className="bg-gray-300 mt-1 w-3 h-3 rounded-full hidden lg:flex"></div>
                  Creación de sistemas para clientes universitarios.
                </strong>
                <p className="lg:ml-7">
                  Estos son proyectos para demostración y van desde un
                  administrador de turnos, un contador de entradas y salidas de
                  un parqueo, un simulador de recargas de tarjetas del metro,
                  entre otros.
                </p>
              </div>
            </Fade>

            <Fade direction="right" duration={750}>
              <div className="text-gray-300 text-xl font-normal mb-8">
                <strong className="flex items-center gap-4">
                  <div className="bg-gray-300 mt-1 w-3 h-3 rounded-full hidden lg:flex"></div>
                  Capacitación y asesoramiento a otros desarrolladores o
                  estudiantes de programación.
                </strong>
                <p className="lg:ml-7">
                  Estuve capacitando algunos estudiantes que requerian mejorar
                  su nivel de programación
                </p>
              </div>
            </Fade>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="experiencia" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
