const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}]

/* Un reducer es una función que recive el state y una acción, y debe retornar un nuevo estado
Por otro lado el reducer no puede ser una función asyncrona, ni tener dependencias externas */
const todoReducer = (state = initialState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload]
    }
    return state
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

const agregarTodoAccion = {
    type: 'agregar',
    payload: newTodo // Argumentos de la acción
}

todos = todoReducer(todos, agregarTodoAccion)

console.log(todos);