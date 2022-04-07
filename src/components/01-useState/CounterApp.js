import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    });
    // Quiero tener el objeto state para luego poder desestructurarlo y cambiar solo uno de los estados

    const { counter1, counter2 } = state


    return (
        <>
            <h1>Counter {counter1}</h1>
            <h1>Counter {counter2}</h1>
            <hr />
            <button onClick={() => {
                setState({
                    ...state,
                    counter1: counter1 + 1
                });
            }} className='btn btn-primary'>
                +1
            </button>
        </>
    )
}

export default CounterApp
