import './cardStyles.css';

export const Card = ({valuex, valuey, valuez, date, sensorName}) => {
    return (
        <div className="card">
            <div>
            <h1 className='title2Card'>Sensor {sensorName}</h1>
            </div>
            <div className='textCard'>
                <div className='valorCard'>
                    <h2><span>Valores del sensor:</span></h2>
                    <h2>X: {valuex}</h2>
                    <h2>Y: {valuey}</h2>
                    <h2>Z: {valuez}</h2>
                </div>  
                <div className='infoCard'>
                    <h3><span>Fecha:</span></h3>
                    <h3>{date}</h3>
                </div>  
            </div>
        </div>
    )
}

export default Card