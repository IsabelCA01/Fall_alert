import { useEffect, useState } from "react";
import { Card } from '../Card/Card';
import { ModalDelete1 } from "../Delete/DeleteMG";
import { ModalUpdate1 } from "../Update/UpdateMG";

import "./Sensor_1.css"



const Sensor1 = () => {
  const [ax, setAx] = useState();
  const [ay, setAy] = useState();
  const [az, setAz] = useState();
  const [date, setDate] = useState();
  const [_id, set_Id] = useState();
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalUpdate, setOpenModalUpdate] = useState(false)

  const fetchSensorData = async () => {
    const response = await fetch("http://localhost:4000/api/v1/server/sensor");
    const data = await response.json();
    setAx(data.aceleracionX);
    setAy(data.aceleracionY);
    setAz(data.aceleracionZ);
    setDate(data.date);
    set_Id(data._id)
  };

  useEffect(() => {
    fetchSensorData();
    const intervalId = setInterval(fetchSensorData, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div style={{flexBasis: "50%"}}>
      <Card valuex={ax} valuey={ay} valuez={az} date={date} sensorName="GY-85" />
      <div className="botones1">
      <button className="btn1" onClick={() => (setOpenModalUpdate(true))}>
        <p>Modificar Dato</p>
      </button>
      <button className="btn1" onClick={() => (setOpenModalDelete(true))}>
        <p>Borrar Dato</p>
      </button>
      </div>
      <div className="modal1">
        {openModalUpdate && <ModalUpdate1 closeModalUpdate={setOpenModalUpdate} idToUpdate={_id}/>}
        {openModalDelete && <ModalDelete1 closeModalDelete={setOpenModalDelete} idToDelete={_id}/>}
      </div>
    </div>
  );
};

export default Sensor1