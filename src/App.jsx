import "./App.css";
import Home from "./components/Home/Home";
import Nosotros from "./components/Nosotros/Nosotros";
import FT from "./components/FormaTrabajar/FT";
import SyE from "./components/SyE/SyE";
import SyE2 from "./components/SyE2/SyE2";
import Ayuda from "./components/Ayuda/Ayuda";
import Preguntas from "./components/Preguntas/Preguntas";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Home />
      <Nosotros/>
      <FT/>
      <SyE/>
      <SyE2/>
      <Ayuda/>
      <Preguntas/>
      <Footer/>
    </>
  );
}

export default App;
