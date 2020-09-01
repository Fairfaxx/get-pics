import React from 'react';
import Imagen from './Imagen';

const ListaImagenes = ({ imagenes }) => {
    return (
        <div className='col-12 row p-5'>
            {imagenes.map(imagen => (
                <Imagen
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    )
}

export default ListaImagenes;
