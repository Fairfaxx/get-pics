import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ListaImagenes from './components/ListaImagenes';




function App() {

    const [busqueda, setBusqueda] = useState('');
    const [imagenes, setImagenes] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);



    useEffect(() => {
        const getApi = async () => {

            if (busqueda === '') return;

            const imagenesPorPagina = 30;
            const key = '18132008-8cb024b142d86440c0f268262';
            const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

            const response = await fetch(url);
            const result = await response.json();

            setImagenes(result.hits)

            //calcular el total de paginas 
            const calcularTotalPaginas = Math.ceil(result.totalHits / imagenesPorPagina)
            setTotalPaginas(calcularTotalPaginas);
        }

        getApi()


    }, [busqueda])

    //Definir la pagina anterior
    const paginaAnterior = () => {
        const nuevaPaginaActual = paginaActual - 1;

        if (nuevaPaginaActual === 0) return;

        setPaginaActual(nuevaPaginaActual)
    };
    //Definir la pagina siguiente
    const paginaSiguiente = () => {
        const nuevaPaginaActual = paginaActual + 1;
        if (nuevaPaginaActual > totalPaginas) return;
        setPaginaActual(nuevaPaginaActual)
    };

    return (
        <div className="container">
            <div className='jumbotron'>
                <p className='lead text-center'>Buscador de Imágenes</p>

                <Form
                    setBusqueda={setBusqueda}
                />
            </div>
            <div className='row justify-content-center'>
                <ListaImagenes
                    key={imagenes.id}
                    imagenes={imagenes}
                />

                <button
                    type='button'
                    className='btn btn-info mr-1'
                    onClick={paginaAnterior}

                >&laquo; Anterior</button>
                <button
                    type='button'
                    className='btn btn-info'
                    onClick={paginaSiguiente}

                >Siguiente &raquo;</button>
            </div>
        </div>
    );
}

export default App;
