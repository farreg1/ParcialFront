
import React from 'react'
import Card from './Card'
import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({ name: "", apellido: "", posicion: ""})

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false)

    const handleSubmit = function (e) {
        e.preventDefault();
        validacion()
        console.log(user)

    }
    
    const validacion = () => {
        if (user.name.length > 3 && user.apellido.length && user.name.startsWith(" ") == false ) {
            setShow(true);
            setError(false);

        }else{
            setError(true)
        }
    }

    return (
        <>
            {show ?
                (<Card name={user.name} apellido={user.apellido} posicion={user.posicion} />)

                :

                (
                    <form onSubmit={handleSubmit}>
                        <label >Nombre: </label>
                        <input type="text" value={user.name} onChange={(event) => { setUser({ ...user, name: event.target.value }) }} />
                        <label >Apellido: </label>
                        <input type="text" value={user.apellido} onChange={(event) => { setUser({ ...user, apellido: event.target.value }) }} />
                        <label >Posicion: </label>
                        

                        <select name="" id="" value={user.posicion} onChange={(event) => { setUser({ ...user, posicion: event.target.value }) }}>
                            <option value="">Seleccione</option>
                            <option value="Arquero">Arquero</option>
                            <option value="Defensor">Defensor</option>
                            <option value="Mediocampista">Mediocampista</option>
                            <option value="Delantero">Delantero</option>
                        </select>

                        <button>Enviar</button>
                        {error && 'Coloque la información correspondiente'}
                    </form>
                    
                    

                )}
        </>
    )
}

export default Form