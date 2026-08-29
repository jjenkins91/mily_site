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
      </div>
    </>
  );
}
export default Home;
