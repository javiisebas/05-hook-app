import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

const FocusScreen = () => {

    // Generamos referencia para poder hacer seguimiento de valores, elementos, ...
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <div>
            <h1>Focus screen</h1>
            <hr />

            <input type="text"
                ref={inputRef}
                className='form-control'
                placeholder='Nombre' />

            <button className='btn btn-outline-primary mt-5'
                onClick={handleClick}>
                Focus
            </button>

        </div>

    )
}

export default FocusScreen
