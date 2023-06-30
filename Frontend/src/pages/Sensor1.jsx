import AlldataSensor1  from "../components/AlldataSensor1/AlldataSensor1";

const Sensor1page = () => {
  return (
    <div className="mediciones">
      <h1 className="tituloDatos">Datos del Sensor</h1>
      <div className="sensors-container">
        <AlldataSensor1 />
      </div>
      <div>
      <hr className="linea"></hr>
      </div>
    </div>
  );
};

export default Sensor1page;