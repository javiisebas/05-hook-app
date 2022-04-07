import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(0)
    const factor = undefined
    return (
        <>
            <h1>Counter with Hooks {counter}</h1>
            <hr />
            <button onClick={() => increment(factor)} className='btn btn-primary'>+1</button>
            <button onClick={reset} className='btn btn-primary'>Reset</button>
            <button onClick={() => decrement(factor)} className='btn btn-primary'>-1</button>
        </>
    )
}

export default CounterCustomHook
