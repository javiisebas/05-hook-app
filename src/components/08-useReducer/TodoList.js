import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {

    // handleToggleTodo y handleDeleteTodo es lógica de TodoApp, por eso entra como propiedad
    return (
        <ul className='list-group list-group-flush'>
            {todos.map((todo, i) => (
                <TodoListItem
                    key={todo.id}
                    i={i}
                    todo={todo}
                    handleToggle={handleToggleTodo}
                    handleDeleteTodo={handleDeleteTodo} />
            ))}
        </ul>
    )
}

export default TodoList