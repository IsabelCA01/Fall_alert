import { useEffect, useState } from "react";
import { format } from "date-fns";
import { CardAll } from '../CardAll/CardAll';

const AlldataSensor1 = () => {
  const [data, setData] = useState([]);

  const fetchSensorData = async () => {
    const response = await fetch("http://localhost:4000/api/v1/server/sensor/all");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchSensorData();
    const intervalId = setInterval(fetchSensorData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{flexBasis: "50%"}}>
      {data.map((info) => (
        <CardAll valuex={info.aceleracionX} valuey={info.aceleracionY} valuez={info.aceleracionZ} date={info.date} />
      ))}
    </div>
  );
};

export default AlldataSensor1;
