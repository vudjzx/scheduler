import React, {Fragment,useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
const Formulario = ({crearCita}) => {

    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }
    const [error, setError] = useState(false);
    // extraer valores
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    //onsubmit
    const submitCita = e =>{
        e.preventDefault();
        if(mascota.trim() === '' || propietario.trim() === '' ||fecha.trim() === '' ||hora.trim() === '' ||sintomas.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        cita.id = uuidv4();

        //crear cita
        crearCita(cita);

        // reiniciar formulario
        actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
        });

    }

    return ( 
        <Fragment>
            <h1>Create appointment</h1>
            {error 
            ?
            <p className="alerta-error">All fields are required</p>
            :null}

            <form 
            onSubmit={submitCita}
            >
                <label>Pet name</label>
                <input 
                type="text"
                name="mascota"
                className="u-full-width"
                onChange={actualizarState}
                value={mascota}
                />
                
                <label>Owner</label>
                <input 
                type="text"
                name="propietario"
                className="u-full-width"
                onChange={actualizarState}
                value={propietario}
                />

                <label>Date</label>
                <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
                />

                <label>Time</label>
                <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
                />

                <label>Symptoms</label>
                <textarea 
                name="sintomas" 
                className="u-full-width"
                onChange={actualizarState}
                value={sintomas}
                ></textarea>

                <button 
                type="submit"
                className="button-primary u-full-width">Add</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;