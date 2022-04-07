import React from 'react'

// Si cambiamos un state, rederiza todos los states, para eso guardamos en memoria, aquello que queremos que se no renderize
const Small = React.memo(({ value }) => {
    // En este caso, solo se volverá a renderizar, si cambia el state counter, es decir, el value
    return (
        <small>{value}</small>
    )
})

export default Small