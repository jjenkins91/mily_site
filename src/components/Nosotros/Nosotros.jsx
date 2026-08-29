import "./Nosotros.css";

function Nosotros(){
    return(
        <>
        <h2 className="nosotros-title">¿Quiénes somos?</h2>
        <div className="nosotros-container">
            <img className="nosotros-image" src="nosotros.jpeg" alt="" />
            <p className="nosotros-summary">Somos un centro psicologico dedicando a<br/>
               brindar  acompanamiento  profesional  en<br/>
               un  espacio  seguro,  respetuoso  y<br/>
               confidencial.  Nuestro  proposito  es<br/>
               acompanarte  en  el  proceso  de<br/>
               comprender  lo  que  estas  viviendo,<br/>
               desarollar  recursos  personales  y<br/>
               favorecer tu bienestar</p>
        </div>
        </>
    );
}
export default Nosotros;