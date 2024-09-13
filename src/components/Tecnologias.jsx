import { Fade } from "react-awesome-reveal";

const Tecnologias = () => {
  return (
    <div id="tecnologias" className="mt-20 pb-36">
      <Fade direction="up">
        <h1 className="text-slate-100 font-bold text-center text-5xl pt-16">
          Tecnologías
        </h1>
      </Fade>
      <Fade direction="up">
        <div className="md:grid max-w-[70rem] text-gray-700 md:grid-cols-2 w-[95%] lg:w-[80%] rounded-lg mx-auto mt-16 text-center gap-4 p-4">
          <article className="md:mt-10">
            <h2 className="text-2xl text-slate-300 font-bold mb-4">
              Front<span className="text-indigo-400">-End</span>
            </h2>
            <ul className="leading-10 text-slate-300 font-semibold">
              <li>React</li>
              <li>React Native</li>
              <li>Angular</li>
              <li>NET MAUI</li>
              <li>Flutter</li>
              <li>TailWindCss</li>
              <li>JavaScript</li>
              <li>Responsive Design</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </article>

          <article className="mt-10">
            <h2 className="text-2xl text-slate-300 font-bold mb-4">
              Back<span className="text-indigo-400">-End</span>
            </h2>

            <ul className="leading-10 text-slate-300 font-semibold">
              <li>C#</li>
              <li>.NET</li>
              <li>Entity Framework Core</li>
              <li>SQL Server</li>
              <li>ASP.NET</li>
              <li>Dart</li>
              <li>php</li>
              <li>MySQL</li>
            </ul>
          </article>
        </div>
      </Fade>
    </div>
  );
};

export default Tecnologias;

// import { AnimatedTooltip } from "./ui/animated-tooltip";
// const people = [
//   {
//     id: 1,
//     name: "John Doe",
//     designation: "Software Engineer",
//     image:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   },
//   {
//     id: 2,
//     name: "Robert Johnson",
//     designation: "Product Manager",
//     image:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     designation: "Data Scientist",
//     image:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     designation: "UX Designer",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 5,
//     name: "Tyler Durden",
//     designation: "Soap Developer",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   },
//   {
//     id: 6,
//     name: "Dora",
//     designation: "The Explorer",
//     image:
//       "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
//   },
// ];

// export default function Tecnologias() {
//   return (
//     <div className="max-w-[75rem] mx-auto">
//       <h1 className="text-slate-100 font-bold text-center  mt-60 text-5xl pt-16">
//         Tecnologías
//       </h1>

//       <div className="flex justify-between">
//         <div>
//           <h1 className="text-slate-100 font-bold text-center mb-10 text-5xl pt-16">
//             Frontend
//           </h1>
//           <div className="flex flex-row items-center justify-center mb-10 w-full">
//             <AnimatedTooltip items={people} />
//           </div>
//         </div>
//         <div>
//           <h1 className="text-slate-100 font-bold text-center mb-10 text-5xl pt-16">
//             Backend
//           </h1>
//           <div className="flex flex-row items-center justify-center mb-10 w-full">
//             <AnimatedTooltip items={people} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
