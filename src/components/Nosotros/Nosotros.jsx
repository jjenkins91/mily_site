import "./Nosotros.css";

function Nosotros() {
    return (
        <>
            <h2 className="nosotros-title">¿Quiénes somos?</h2>

            <div className="nosotros-container">
                <img className="nosotros-image" src="nosotros.jpeg" alt="" />

                <p className="nosotros-summary">
                    Somos un centro psicológico dedicado a
                    <br />
                    brindar acompañamiento profesional en
                    <br />
                    un espacio seguro, respetuoso y
                    <br />
                    confidencial. Nuestro propósito es
                    <br />
                    acompañarte en el proceso de
                    <br />
                    comprender lo que estás viviendo,
                    <br />
                    desarrollar recursos personales y
                    <br />
                    favorecer tu bienestar.
                </p>
            </div>
        </>
    );
}

export default Nosotros;