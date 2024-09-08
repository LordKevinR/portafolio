import "./App.css";
import Header from "./components/Header";
import Tecnologias from "./components/Tecnologias";
import Contacto from "./components/Contacto";
import Freelancer from "./components/Freelancer";
import Navbar from "./components/Navbar";
import Headroom from "react-headroom";

function App() {
  return (
    <div className="px-2">
      <Headroom className="z-[15] relative">
        <Navbar />
      </Headroom>
      <Header />
      <Freelancer />
      <Tecnologias />
      <Contacto />
    </div>
  );
}

export default App;
