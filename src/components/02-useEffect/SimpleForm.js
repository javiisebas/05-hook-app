import { logRoles } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import './effects.css'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState

    // useEffect tiene como parámetros de entrada un callback y un arreglo
    useEffect(() => {
        console.log('Primer Render');
    }, []) // Solo se ejecuta con el primer render

    useEffect(() => {
        console.log('formState ha cambiado');
    }, [formState]) // Se ejecuta cada vez que el estado cambie

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>

                <input
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='Email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />

            </div>

            {(name === '123') && <Message />}
        </>
    )
}

export default SimpleForm