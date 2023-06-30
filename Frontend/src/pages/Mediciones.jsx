import Sensor1  from "../components/Sensor_1/Sensor_1";
import '../styles/mediciones.css';
import StateBtn from "../components/Boton/dataBoton";
import StateAla from "../components/Alarm/DataAlarm";

const Mediciones = () => {
  return (
    <div className="mediciones">
      <div className="sensors-container">
        <StateBtn />
        <StateAla />
        <Sensor1 />
      </div>
      <div>
      <hr className="linea"></hr>
      </div>
    </div>
  );
};

export default Mediciones;
