import React from 'react'
import { useForm } from '../../hooks/useForm';


const TodoAdd = ({ handleAddTodo }) => {

    // MUY IMPORTANTE QUE CADA COMPONENTE TENGA SU PROPIA LÓGICA Y SOLO SU PROPIA LÓGICA <- IDEA PRINCIPAL DE LOS COMPONENTES

    /* useForm devuelve un arreglo cuya primera posición es el estado, además tomo como parámetro inicial lo que definimos
    dentro del hooks como estado, con lo cual, en este caso, podemos desestructura direcrtamente el estado. */
    const [{ descNewTodo }, handleInputChange, handleResetForm] = useForm({ descNewTodo: '' })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (descNewTodo.trim().length <= 1) {
            return;
        }

        handleAddTodo(descNewTodo)
        handleResetForm();
    }

    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='descNewTodo'
                    value={descNewTodo}
                    className='form-control'
                    placeholder='Aprender...'
                    autoComplete='off'
                    onChange={handleInputChange} />

                <button type='submit'
                    className='btn btn-outline-primary mt-3 btn-block'>
                    Agregar
                </button>
            </form>
        </>
    )
}

export default TodoAdd