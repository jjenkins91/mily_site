import "./Ayuda.css"

function Ayuda(){
    return(
        <>
        <div className="ayuda-container">
        <h2 className="ayuda-title">En que podemos ayudarte?</h2>
        <h3 className="ayuda-questions">Podemos acompanarte si estas atravsesando:</h3>
        <ul>
            <li className="ayuda-list">Dificultades en tu relaciones;</li>
            <li className="ayuda-list">Problemas familiares;</li>
            <li className="ayuda-list">Cambios importantes en tu vida;</li>
            <li className="ayuda-list">Dificultades emocionales;</li>
            <li className="ayuda-list">Problemas de autoestima;</li>
            <li className="ayuda-list">Estres;</li>
            <li className="ayuda-list">Dificultades en la adaptacion;</li>
            <li className="ayuda-list">Conflictos de pareja;</li>
            <li className="ayuda-list">Situaciones relacionales con la adolescencia.</li>
        </ul>
        <h3 className="ayuda-statement">
            No tienes que tener todas las respuestas
            para pedir ayuda.
        </h3>
        </div>


        </>
    );
}
export default Ayuda;