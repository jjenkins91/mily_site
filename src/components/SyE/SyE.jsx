import "./SyE.css";

function SyE() {
  return (
    <>
      <div id="servicios" className="SyE-container">
        <h2 className="SyE-title">Servicios y Especialidades</h2>

        <div className="servicios-especialidades">

          <div className="s-y-e">
            <div>
              <h3 className="header-title">
                Psicología
                <br />
                Individual
              </h3>

              <p className="SyE-summary2">
                Espacios de
                <br />
                acompañamiento
                <br />
                psicológico
                <br />
                individual para
                <br />
                adolescentes y
                <br />
                adultos.
              </p>
            </div>
          </div>

          <div className="s-y-e">
            <div>
              <h3 className="header-title">Terapia de pareja</h3>

              <p className="SyE-summary">
                Un espacio para
                <br />
                trabajar
                <br />
                comunicación,
                <br />
                conflictos y
                <br />
                dinámica de
                <br />
                pareja.
              </p>
            </div>
          </div>

          <div className="s-y-e">
            <div>
              <h3 className="header-title">
                Orientación
                <br />
                familiar
              </h3>

              <p className="SyE-summary2">
                Acompañamiento
                <br />
                para situaciones
                <br />
                relacionadas con
                <br />
                la dinámica y
                <br />
                convivencia
                <br />
                familiar.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default SyE;