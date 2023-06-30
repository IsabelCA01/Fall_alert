import { useEffect, useState } from "react";
import CardAlarm from "./CardAlarm";



const StateAla = () => {
  const [estala, setEstala] = useState();

  const fetchSensorData = async () => {
    const response = await fetch("http://localhost:4000/api/v1/server/alarma");
    const data = await response.json();
    setEstala(data.alarma);
  };

  useEffect(() => {
    fetchSensorData();
    const intervalId = setInterval(fetchSensorData, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div style={{flexBasis: "50%"}}>
      <CardAlarm estado={estala} />
    </div>
  );
};

export default StateAla