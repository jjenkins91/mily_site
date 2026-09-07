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
                        ¿Necesito tener un diagnóstico para
                        <br/>
                        acudir a terapia?
                    </li>

                    <p className="preguntas-answers">
                        No necesariamente. Puedes solicitar
                        <br/>
                        orientación psicológica ante diferentes
                        <br/>
                        situaciones personales, familiares o
                        <br/>
                        emocionales.
                    </p>

                    <li className="preguntas-list">
                        ¿Cuánto dura una sesión?
                    </li>

                    <p className="preguntas-answers">
                        Aproximadamente 60 minutos.
                    </p>

                    <li className="preguntas-list">
                        ¿La atención es confidencial?
                    </li>

                    <p className="preguntas-answers">
                        Sí, la atención psicológica se desarrolla
                        <br/>
                        respetando la confidencialidad y las normas
                        <br/>
                        profesionales aplicables.
                    </p>

                    <li className="preguntas-list">
                        ¿Cómo puedo reservar una cita?
                    </li>

                    <p className="preguntas-answers">
                        Puedes hacerlo de manera rápida mediante
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