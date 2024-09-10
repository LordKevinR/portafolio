import "./App.css";
import Header from "./components/Header";
import Tecnologias from "./components/Tecnologias";
import Contacto from "./components/Contacto";
import Freelancer from "./components/Freelancer";
import Navbar from "./components/Navbar";
import Headroom from "react-headroom";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

function App() {
  return (
    <BackgroundBeamsWithCollision className={"flex flex-col"}>
      <div className="px-2">
        <Headroom className="z-[15] relative">
          <Navbar />
        </Headroom>
        <Header />
        <Freelancer />
        <Tecnologias />
        <Contacto />
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export default App;
