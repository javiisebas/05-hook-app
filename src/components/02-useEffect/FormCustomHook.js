import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'


const FormCustomHook = () => {

    const initInputs = {
        name: '',
        email: '',
        password: ''
    }

    const [formValues, handleInputChange] = useForm(initInputs)
    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
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
            </div>

            <div className='form-group'>
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

            <div className='form-group'>
                <input
                    type="password"
                    name='password'
                    className='form-control'
                    placeholder='Password'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type='submit' className='btn btn-primary'>Enviar</button>

        </form>
    )
}

export default FormCustomHook