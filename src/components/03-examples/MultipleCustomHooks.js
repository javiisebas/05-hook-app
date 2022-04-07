import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1)

    // Cuando cambie el estado counter, cambiará la url y por lo tanto activará el useEffect de useFetch
    const { data, loading, error } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)

    // If data exist !data=false y !!data=true, por lo que ejecuta la sentencia
    const { author, quote } = !!data && data[0] // Se ejecutará solo cuando loading=true

    return (
        <div>
            <h1>BrakingBad Quotes</h1>
            <hr />
            {loading ?
                (<div className="alert alert-info text-center">
                    Cargando...
                </div>)
                :
                (<blockquote className='blockquote text-right'>
                        <p className=''>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>)
            }
            {/* Tomamos la lógica de useCounter y hacemos uso del método increment */}
            <button onClick={increment} className='btn btn-primary'>
                Siguiente quote
            </button>
        </div>
    )
}

export default MultipleCustomHooks
