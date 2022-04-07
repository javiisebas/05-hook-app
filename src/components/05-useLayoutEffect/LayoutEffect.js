import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

const LayoutEffect = () => {

    const { counter, increment } = useCounter(1)

    const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
    const { quote } = !!data && data[0]

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])


    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p ref={pTag} className=''>{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button onClick={increment} className='btn btn-primary'>
                Siguiente quote
            </button>
        </div>
    )
}

export default LayoutEffect
