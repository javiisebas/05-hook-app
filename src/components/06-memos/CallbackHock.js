import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import BtnIncrement from './BtnIncrement';


const CallbackHock = () => {

  const [counter, setCounter] = useState(0);

  const increment = useCallback((step) => {
    setCounter(value => value + step)
  }, [setCounter])

  /* En este caso queremos añadir funcionalidad a un componente, la cual, estamos introciendo como propiedad a este.
  Si la función fuese de este tipo:

    const increment = () => {
      setCounter(counter + 1)
    }

  Cada vez que se modificara la variable de estado counter, se generaría de nuevo increment, con lo cual renderizaría
  de nuevo el componente BtnIncrement. Si este tuviese un proceso pesado, sería muy costoso para el usuario tener que
  renderizarlo cada vez que ejecuta esta funcionalidad, en este caso, incrementar un contar (proceso ligero), es por
  este motivo que hacemos uso de useCallBack, para guardar en memoria una funcionalidad que es setCounter(counter + 1),
  pero que no podemos llamar así porque entonces estaríamos afectando directamente a la variable de estado, es por eso,
  que la llamamos algo tal qué: setCounter(c => c + 1). Este acepta incluso parámetros de entrada */

  return (
    <>
      <h1>Callback Hock: {counter}</h1>
      <hr />

      <BtnIncrement increment={increment} />

    </>
  )
}

export default CallbackHock