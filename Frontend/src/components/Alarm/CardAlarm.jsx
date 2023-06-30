import "../Boton/boton.css";

const CardAlarm = ({ estado }) => {
  let estadoTexto = "";
  if (estado === true) {
    estadoTexto = "Alerta detectada. Ve a chequear al paciente.";
  } else if (estado === false) {
    estadoTexto = "Sin alerta";
  }

  return (
    <div className="container1">
      <div className="titlestate">
        <h1>Estado del Paciente:</h1>
      </div>
      <div className="state">
        <h1>{estadoTexto}</h1>
      </div>
    </div>
  );
};

export default CardAlarm;