import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'


const MemoHook = () => {

    const { counter, increment } = useCounter(1000)
    const [show, setShow] = useState(true)

    // Cade vez que cambie un estado se ejecutaría la función procesoPesado
    // Para que no sea así hacemos uso de useMemo, ejecutará la función unicamente cuando cambie el estado counter
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    // memoProcesoPesado es el return de procesoPesado, que se actualizará cada vez que counter se mofifique

    /* En el primer render de la aplicación se guarda en memoria y se rederiza memoProcesoPesado, dado que depende
    de una variable de estado (counter), si esta cambia se volverá a ejecutar y renderizar. Lo cual sigue el comportamiento
    que estamos buscando. Por otro lado, tenemos otra variable de estado (show), si alteramos su estado, se volverían a 
    renderizar todas las variables de estado, en su defecto, también el proceso pesado. Lo cual puede suponer un gran uso
    de la memoria. Es por ese motivo que usamos useMemo, para guardar el proceso en memoria y si cambia el parámetro de
    dependecia (en este caso 'counter'), se ejecutará y renderizará este proceso */

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />

            <p>{memoProcesoPesado}</p>

            <button onClick={increment} className="btn btn-outline-primary">+1</button>

            <button onClick={() => setShow(!show)} className="btn btn-outline-primary ml-3">
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default MemoHook