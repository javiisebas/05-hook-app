import React from 'react'

const TodoListItem = React.memo(({ i, todo, handleToggleTodo, handleDeleteTodo }) => {

    // handleToggleTodo y handleDeleteTodo es lógica de TodoApp, por eso entra como propiedad
    return (
        <li className='list-group-item'>
            <p className={`${todo.done && 'complete'}`}
                onClick={() => handleToggleTodo(todo.id)}>
                {i + 1}- {todo.desc}
            </p>
            <button onClick={() => handleDeleteTodo(todo.id)}
                className='btn btn-danger'>
                Borrar
            </button>
        </li>
    )
})

export default TodoListItem