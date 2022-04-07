import React, { useEffect, useReducer } from 'react'
import './style.css';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {

    // Inicia el state con el localStorage todos si existe, si no simplemente define un arreglo vacio
    return JSON.parse(localStorage.getItem('todos') || [])

}


const TodoApp = () => {

    /* Al dispath le mandamos una acción y va a saber a que reducer (fun()) tiene que enviarla .Cuando definimos 
    el initReducer como un arreglo vacio, podemos definirlo a través de init. Digamos que el useReducer es como 
    el useState, devuelve un state y un método para mutarlo (definir uno nuevo). Pero en este caso necesita tener
    una función REDUCER que tiene como parámetro de entrada el state y la acción, para así poder ejecutar el DISPACHER,
    es decir, la función, con la acción que afectará al estado */
    const [todos, dispath] = useReducer(todoReducer, [], init)

    // Cada vez que cambie los todos este se guardará en el localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    const handleAddTodo = (descNewTodo) => {
        const newTodo = {
            id: new Date().getTime(),
            desc: descNewTodo,
            done: false
        }

        dispath({
            type: 'add',
            payload: newTodo
        });
    }

    const handleDeleteTodo = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispath(action)
    }


    const handleToggleTodo = (todoId) => {
        dispath({
            type: 'toggle',
            payload: todoId
        })
    }



    return (
        <div>
            <h1>Todo App - {todos.length}</h1>
            <hr />


            <div className="row">

                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        handleToggle={handleToggleTodo}
                        handleDeleteTodo={handleDeleteTodo} />
                </div>

                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo} />
                </div>

            </div>

        </div>
    )
}

export default TodoApp