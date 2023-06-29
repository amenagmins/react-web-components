import { useRef } from "react";
import "./feedback.css";

export const Feedback = () => {
  const buttonsRef = useRef();
  const questionRef = useRef();
  const thanksRef = useRef();

  const handleClick = (opt) => {
    // ga('send', 'event', 'Encuesta', 'satisfaccion', opt);
    showGracias();
  };

  const showGracias = () => {
    buttonsRef.current.style.display = "none";
    questionRef.current.style.display = "none";
    thanksRef.current.style.display = "block";
  };

  return (
    <div className="feedback-site">
      <div className="feedback-container">
        <h2 id="h2pregunta" ref={questionRef}>
          ¿Le ha servido de ayuda esta página?
        </h2>
        <div id="divButtons" ref={buttonsRef} className="feedback-buttons">
          <ul>
            <li>
              <button className="" onClick={() => handleClick("si")}>
                Sí <span>esta pagina es util</span>
              </button>
            </li>
            <li>
              <button className="" onClick={() => handleClick("no")}>
                No <span>esta pagina no sirve</span>
              </button>
            </li>
          </ul>
        </div>
        <div
          id="divGracias"
          ref={thanksRef}
          className="feedback-success"
          role="alert"
          hidden=""
        >
          <p>Gracias por sus comentarios.</p>
        </div>
      </div>
    </div>
  );
};
