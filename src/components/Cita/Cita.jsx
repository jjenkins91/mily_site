import "./Cita.css";

function Cita() {
  return (
    <>
      <div className="cita-container">
        <p className="cita-title">
          Comienza hoy to camino hacia el bienestar emocional
        </p>
        <p className="cita-statement">
          Da el primer paso hacia una vida más
          <br />
          equilibrada con el respaldo de profesionales
          <br />
          de la psicología. Recibe orientación especializada,
          <br />
          aclara tus inquietudes y encuentra estrategias que
          <br />
          te ayuden a fortalecer tu bienestar y alcanzar
          <br />
          una vida más tranquila y saludable.
        </p>
        <ul>
          <li className="cita-list">
            Madalidades de atención presencial y psicológica 100 % online
          </li>
          <li className="cita-list">
            Profesionales de la psicología certificados y colegiados
          </li>
          <li className="cita-list">
            ⁠Primera sesión gratuita y sin compromiso
          </li>
        </ul>
        <a
          href="https://wa.me/18049891363?text=Hola%2C%20me%20gustaría%20agendar%20una%20prueba%20gratuita."
          className="myButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar prueba gratuita!
        </a>
      </div>
    </>
  );
}
export default Cita;
