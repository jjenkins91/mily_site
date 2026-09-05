import "./Preguntas.css"

function Preguntas(){
    return(
        <>
        <div className="preguntas-container">
            <div className="preguntas-title">
                <h2>Preguntas
                    <br/>
                     Frecuentes</h2>
                <hr className="preguntas-line" />
            </div>
            <div className="preguntas-section">
                <ul>
                    <li className="preguntas-list">
                    Necesito tener un diagnostico para
                        <br/>
                        acudir a terapia?
                    </li>
                    <p className="preguntas-answers">
                        No necesariamente. Puedes solicitar
                        <br/>
                        orientacion psicologica ante diferentes
                        <br/>
                        situaciones personales, familiares o
                        <br/>
                        emocionales.
                    </p>
                    <li className="preguntas-list">
                        Cuanto dura una sesion?
                    </li>
                    <p className="preguntas-answers">
                    Aproximadamente 60 minutos.
                    </p>
                    <li className="preguntas-list">
                        La atencion es confidencial?
                    </li>
                    <p  className="preguntas-answers">
                    Si, la atencion psicologica se desarrolla
                        <br/>
                        respetando la confidencialidad y la normas
                        <br/>
                        profesionales aplicables.
                    </p>
                    <li className="preguntas-list">
                        Como puedo reservar una cita?
                    </li>
                    <p  className="preguntas-answers">
                    Puedes hacerlo de manera rapida mediante
                        <br/>
                        WhatsApp
                    </p>
                </ul>
            </div>
        </div>
        </>
    );
}
export default Preguntas;