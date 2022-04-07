import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setCoords] = useState({
        x: 0, y: 0
    });
    const { x, y } = coords

    useEffect(() => {

        // Función que tomará el event y extraerá la posición del mouse (e) => {}
        const mouseMove = ({ x, y }) => {
            setCoords({ x, y })
        }

        // Mientras que esté montado queremo que este escuchando al movimiento del ratón
        window.addEventListener('mousemove', mouseMove)

        return () => {
            // Una vez se desmonta eliminamos la escucha, si no, cada vez que se vuelva a montar, generará un nuevo listener
            window.removeEventListener('mousemove', mouseMove)
            // Nos quedaremos sin memoria si no eliminamos la escucha
        };
    }, []);

    return (
        <>
            <h4>x:{x} y:{y}</h4>
        </>
    )
}

export default Message
