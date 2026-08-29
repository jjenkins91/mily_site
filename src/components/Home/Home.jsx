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
            <h1 className="title">PUNTO EQUILIBRIO<br/>
                NÜA PSICOLOGÍA</h1>
        </div>
        <hr className="divider"/>
        <div className="vision-container">
        <h2 className="vision">Comprender  -  Sanar  -  Avanzar</h2>
        </div>
      </div>
    </>
  );
}
export default Home;
