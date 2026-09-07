import "./Home.css";
import Navbar from "../NavBar/Navbar";
function Home() {
  return (
    <>
      <div className="header-container">
        <Navbar />
        <div className="logo-container">
          <img className="logo" src="penp.png" alt="penpLogo" />
        </div>
        <div className="title-container">
          <h1 className="title">
            PUNTO EQUILIBRIO
            <br />
            NÜA PSICOLOGÍA
          </h1>
        </div>
        <hr className="divider" />
        <div className="vision-container">
          <h2 className="vision">Comprender - Sanar - Avanzar</h2>
        </div>
        <a
    className="whatsapp-button"
    href="https://wa.me/19891363?text=Hola%2C%20me%20gustaría%20agendar%20una%20cita."
    target="_blank"
    rel="noopener noreferrer"
>
    <img
        src="/whatsapp_logo.png"
        alt="WhatsApp"
    />
</a>
      </div>
    </>
  );
}
export default Home;
