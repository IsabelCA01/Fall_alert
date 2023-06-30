import "../Delete/Delete.css";

export const ModalDelete1 = ({closeModalDelete, idToDelete}) => {
    const handleDelete = (ev) => {
      ev.preventDefault();
      const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id: idToDelete})
      };
      fetch('http://localhost:4000/api/v1/server/sensor', requestOptions)
        .then(response => console.log (response.status));
      closeModalDelete(false); 
    }
  
    return (
      <div className="modalBack">
        <div>
            <button className="closeBtn" onClick={() => {closeModalDelete(false);}}>X</button>
            </div>
            <div className='titlemo'>
            <h2>¿Quieres borrar el valor?</h2>
            </div>
            <div className="botones1">
        <button className="btndel" onClick={handleDelete}>Borrar</button>
        <button  className="btndel" onClick={() => (closeModalDelete(false))}>Cancelar</button>
        </div>
      </div>  
    )
  }
  
  export default ModalDelete1
  