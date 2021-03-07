
export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const END_EDIT = 'END_EDIT';

export const loadTodos = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(todos =>
                dispatch({
                    type: LOAD_TODOS,
                    payload: todos
                })
            );
    };
}

export const addTodo = title => {
    return {
        type: ADD_TODO,
        payload: title
    };
}

export const removeTodo = id => {
    return {
        type: REMOVE_TODO,
        payload: id
    };
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
}

export const toggleAll = () => {
    return {
        type: TOGGLE_ALL
    };
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    };
}

export const endEdit = (id, text) => {
    return {
        type: END_EDIT,
        payload: { id, text }
    }
}