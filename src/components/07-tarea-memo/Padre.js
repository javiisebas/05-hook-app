import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

const Padre = () => {

    // Mal pensado si pusieramos números como states porque estos nunca cambian, es por eso que únicamente son constantes
    const numeros = [2, 4, 6, 8, 10]; 
    // Lo que si que cambia es el total o valor inicial. El cual se modificará a través de setValor en la función incrementar
    const [valor, setValor] = useState(0);

    /* Genero el useCallBack que tiene un callback y un array como parámetro de entrada. El callback tiene un parámetro de 
    entrada que es el salto y en el arreglo encontramos las dependencias */

    const incrementar = useCallback((num) => {
        setValor(_valor => _valor + num)
    }
        , [setValor])

    // const incrementar = (num) => {
    //     setValor(valor + num)
    // }


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {
                numeros.map(num => (
                    <Hijo
                        key={num}
                        numero={num}
                        incrementar={incrementar}
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}

export default Padre
