import StateBtn from '../components/Boton/dataBoton';
import '../styles/mediciones.css';

const Esbotonpage= () => {
  return (
    <div className="mediciones">
      <h1 className="tituloDatos">Último estado del Botón</h1>
      <div className="sensors-container">
        <StateBtn/>
      </div>
      <div>
      <hr className="linea"></hr>
      </div>
    </div>
  );
};

export default Esbotonpage;