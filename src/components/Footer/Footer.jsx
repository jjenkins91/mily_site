import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="logo-name">
          <img className="footer-logo" src="penp2.jpeg" alt="" />
          <p className="footer-name">
            PUNTO
            <br />
            EQUILIBRIO
            <br />
            NÜA
            <br />
            PSICOLOGÍA
          </p>
        </div>

        <div className="contact-schedule">
          <div className="email">
            <p className="contact-schedule-title">E-mail</p>
            <p className="contact-schedule-items">
              puntoequilibrio.nuapsicologia@gmail.com
            </p>
          </div>

          <div className="horario">
            <p className="contact-schedule-title">Horario de atención</p>
            <p className="contact-schedule-items">
              Lunes a sábado: 9:00 - 18:00
            </p>
          </div>
        </div>

        <hr />

        <div className="social">
          <div>
            <p className="follow-us">Síguenos</p>
          </div>

          <div>
            <a
              href="https://www.facebook.com/profile.php?id=61594015839460"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src="facebook.png" alt="Facebook" />
            </a>

            <a
              href="https://www.instagram.com/puntoequilibrio.nuapsicologia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon"
                src="instagram.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}

export default Footer;
