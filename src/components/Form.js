import React, { useState } from 'react'
import Error from './Error';

const Form = ({ setBusqueda }) => {


    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);
    console.log(termino)

    const buscarImagenes = e => {
        e.preventDefault()
        //Validar
        if (termino.trim() === '') {
            setError(true)
            console.log('campo vacio')
            return
        }
        setError(false);
        //Enviar los datos al componente principal
        setBusqueda(termino)
    }

    return (
        <div>
            <form
                onSubmit={buscarImagenes}
            >
                <div className="row">
                    <div className="form-group col-md-8">
                        <input
                            type='text'
                            className="form-control form-control-lg"
                            placeholder="Busca una imágen, Ej: Fútbol o Perros"
                            onChange={e => setTermino(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                            type='submit'
                            className="btn btn-danger btn-lg btn-block"
                            value="buscar"
                        />
                    </div>
                </div>
                {error ? <Error mensaje='Agregar busqueda' /> : null}
            </form>
        </div>
    )
}

export default Form;
