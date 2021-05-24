import React, {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App() {
  

  //citas inciales

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales = [];
  }
  const [citas,guardarCitas] = useState(citasIniciales);

  // manejo del local storage con useffect
  useEffect( () => {
    localStorage.setItem( 'citas', JSON.stringify( citas ) );
}, [citas] )
  // toma las citas previas y la actual
  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ])
  };
  //funcion para eliminar citas
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita=> cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  const titulo = citas.length === 0 ? 'No appointments' : 'Current appointments';

  return (
    <div className="App">
      <Fragment>
        <h1>Pet appointments</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario
              crearCita={crearCita}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita =>(
                <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
                />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
      
    </div>
  );
}

export default App;
