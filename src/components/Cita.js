import React from 'react'
const Cita = ({cita,eliminarCita}) => {


    const {mascota,propietario,fecha,hora,sintomas,id} = cita;
    return ( 
        <div className="cita">
            <p>Pet name: <span>{mascota}</span></p>
            <p>Owner: <span>{propietario}</span></p>
            <p>Date: <span>{fecha}</span></p>
            <p>Time: <span>{hora}</span></p>
            <p>Symptoms: <span>{sintomas}</span></p>
            <button 
            className="button-primary u-full-width"
            onClick={()=>eliminarCita(id)}
            >Delete</button>
        </div>
     );
}
 
export default Cita;