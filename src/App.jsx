import "./App.css";
import Header from "./components/Header";
import Tecnologias from "./components/Tecnologias";
import Freelancer from "./components/Freelancer";
import Navbar from "./components/Navbar";
import Headroom from "react-headroom";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import Experiencia from "./components/Experiencia";

function App() {
  return (
    <BackgroundBeamsWithCollision className={"flex flex-col"}>
      <div className="px-2 w-full">
        <Headroom className="z-[15] relative">
          <Navbar />
        </Headroom>
        <Header />
        <Experiencia />
        <Freelancer />
        <Tecnologias />
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default App;
