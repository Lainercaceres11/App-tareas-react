import React, { useState } from 'react';
import '../styles/formulario.css'
import { v4 as uuidv4 } from 'uuid';

function Formulario (props){

    const [input, setInput] = useState(""); 

    const manejarEnvio = e => {
        e.preventDefault();
        console.log("Enviando formulario");
        const TareaNueva ={
            id: uuidv4(),
            texto: input,
            completada: false
        
        }

       props.onSubmit(TareaNueva);
    }

    const manejarCambio = e =>{
        setInput(e.target.value);
    }
    return(
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input 
            className='tarea-input'
            placeholder='Escribe una tarea'
            type="text"
            name='texto'
            onChange={manejarCambio}

            
            />

            <button className='tarea-boton'>Agregar tarea</button>
        

        </form>

    );
};

export default Formulario;