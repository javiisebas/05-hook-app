import React from 'react'

const BtnIncrement = React.memo(({ increment }) => {
    console.log('HOLA :)');
    return (
        <button className='btn btn-outline-primary'
            onClick={() => { increment(5) }}>Incrementar</button>
    )
})

export default BtnIncrement