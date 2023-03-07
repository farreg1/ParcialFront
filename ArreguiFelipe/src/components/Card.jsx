import React from 'react'


const Card = ({ name, posicion, apellido }) => {

    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <div>
            <h4>Informacion del jugador</h4>
            <p>El jugador {name + " " + apellido} juega de: {posicion}</p>
            <p>Fecha de inscripcion: {`${day+5}/${month + 1}/${year}`}</p>
        </div>
    )
}

export default Card