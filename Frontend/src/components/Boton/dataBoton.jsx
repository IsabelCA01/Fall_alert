import { useEffect, useState } from "react";
import CardBoton from "./CardBoton";



const StateBtn = () => {
  const [estbtn, setEstbtn] = useState();

  const fetchSensorData = async () => {
    const response = await fetch("http://localhost:4000/api/v1/server/boton");
    const data = await response.json();
    setEstbtn(data.boton);
  };

  useEffect(() => {
    fetchSensorData();
    const intervalId = setInterval(fetchSensorData, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div style={{flexBasis: "50%"}}>
      <CardBoton estado={estbtn} />
    </div>
  );
};

export default StateBtn