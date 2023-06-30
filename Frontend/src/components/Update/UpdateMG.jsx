import './Update.css';

export const ModalUpdate1= ({closeModalUpdate, idToUpdate}) => {
    return (
        <div className='modalBack'>
            <div>
                <div>
                <button className='closeBtn' onClick={() => {closeModalUpdate(false);}}>X</button>
                </div>
                <div >
                <h2>Modificar valor</h2>
                </div>
                <div>
                    <form onSubmit={
                        ev => {
                            ev.preventDefault();
                            const userInputx = ev.target.valuex.value;
                            const userInputz = ev.target.valuez.value;
                            const userInputy = ev.target.valuey.value;
                            const requestOptions = {
                                method: 'PUT',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({ aceleracionX: userInputx, aceleracionY:userInputy, aceleracionZ: userInputz, id: idToUpdate})
                            };
                            fetch('http://localhost:4000/api/v1/server/sensor', requestOptions)
                                .then(response => console.log (response.status));
                                closeModalUpdate(false)
                        }}>
                        <input type="string" name="valuex" placeholder='Ingresar el valor de x' required/>
                        <input type="string" name="valuey" placeholder='Ingresar el valor de y' required/>
                        <input type="string" name="valuez" placeholder='Ingresar el valor de z' required/>
                        <div className='btnsup'>
                            <button className='btnup' type="submit">Modificar</button>
                            <button className='btnup'  button onClick={() => closeModalUpdate(false)}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)}

export default ModalUpdate1