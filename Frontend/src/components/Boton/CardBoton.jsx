import "./boton.css";

const CardBoton = ({ estado }) => {
  let estadoTexto = "";
  if (estado === true) {
    estadoTexto = "Encendido";
  } else if (estado === false) {
    estadoTexto = "Apagado";
  }

  return (
    <div className="container1">
      <div className="titlestate">
        <h1>Estado:</h1>
      </div>
      <div className="state">
        <h1>{estadoTexto}</h1>
      </div>
    </div>
  );
};

export default CardBoton;