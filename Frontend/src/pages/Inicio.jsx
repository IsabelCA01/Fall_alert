import '../styles/inicio.css';

const Index = () => {
  return (
    <div className="container">
      <div className="background">
          <h1 className="backgroundtext">Monitor de caídas y movimietos bruscos</h1>
      </div>
      <hr class="linea">
      </hr>
      <div className='content'>
        
        <div>
        <p><span>Fall Alert</span> es el nuevo sistema de monitoreo de caídas y de movimientos bruscos de pacientes. Pensado principalmente para paciente pediátricos y geriátricos, pero aplicable a todas las necesidades.</p>
        <p>
          En está página podrás realizar el monitoreo de los pacientes. Para ello, deberás dirigirte a la pestaña "Mediciones" para ver los datos de los pacientes en tiempo real, verificar el estado del botón de encendido, y recibir alertas en caso de que se produzca una caída o un movimiento brusco.
        </p>
        <p>Si entrás a la pestaña "Sensor", podrás visualizar el historial de los datos tomados por el sensor. Y si entras a la pestaña "Botón", podrás verificar si el sensor se encuentra encendido o apagado. </p>
        </div>
      </div>
        <div className='personas'>
        </div>
      <hr class="linea">
      </hr>
    </div>
  );
};

export default Index;