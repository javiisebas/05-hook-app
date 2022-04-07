import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm';
import UserContext from './UserContext';


const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

  const [{ name, email }, handleInputChange] = useForm({
    name: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      id: new Date().getTime(),
      name,
      email
    }

    setUser(newUser)

  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form">
          <input type="text"
            name='name'
            value={name}
            autoComplete='false'
            placeholder='Nombre'
            onChange={handleInputChange}
            className="form-control" />
        </div>

        <div className="form">
          <input type="text"
            name='email'
            value={email}
            autoComplete='false'
            placeholder='Email'
            onChange={handleInputChange}
            className="form-control" />
        </div>

        <button className='btn btn-block btn-outline-success w-100'
          type='submit'>Login</button>

      </form>

    </div>
  )
}

export default LoginScreen