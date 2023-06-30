import "./cardAllStyles.css"

export const CardAll = ({valuex, valuey, valuez, date}) => {
    return (
        <div className="cardAll">
            <div className="title1CardAll">
            <h1 className="title1Card"> Dato</h1>
            </div>
            <div className='textCardAll'>
                <div className='valorCardAll'>
                    <h2>Valores del sensor:</h2>
                    <p>X: {valuex}</p>
                    <p>Y: {valuey}</p>
                    <p>Z: {valuez}</p>
                </div>  
                <div className='infoCardAll'>
                    <h2>Fecha:</h2>
                    <p> {date}</p>
                </div>  
            </div>
        </div>
    )
   
}

export default CardAll