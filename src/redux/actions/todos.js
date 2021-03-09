import axios from "axios";

export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const END_EDIT = 'END_EDIT';

const BASE_URL = 'http://localhost:8000/todos';

export const loadTodos = () => {
    return dispatch => {
        axios.get(BASE_URL)
            .then(response => dispatch({
                type: LOAD_TODOS,
                payload: response.data
            }))
            .catch(error => console.log(error));
    };
}

export const addTodo = title => {
    return dispatch => {
        axios.post(BASE_URL, { title: title, completed: false })
            .then(response => dispatch({
                type: ADD_TODO,
                payload: response.data
            }))
            .catch(error => console.log(error));
    };
}

export const removeTodo = id => {
    return dispatch => {
        axios.delete(BASE_URL + `/${id}`)
            .then(response => dispatch({
                type: REMOVE_TODO,
                payload: id
            }))
            .catch(error => console.log(error));
    };
}

export const toggleTodo = (id, completed) => {
    return dispatch => {
        axios.patch(BASE_URL + `/${id}`, { completed: !completed })
            .then(response => dispatch({
                type: TOGGLE_TODO,
                payload: { id, completed }
            }))
            .catch(error => console.log(error));
    };
}

export const toggleAll = () => {
    return {
        type: TOGGLE_ALL
    };

    // return (dispatch, getState) => {
    //     const todos = getState().todos;
    //     const completed = todos.todos.every(t => t.completed);
    //     axios.all(todos.todos.filter(t => t.completed === completed).map(t => axios.patch(BASE_URL + `/${t.id}`, { completed: !completed })))
    //         .then(response => dispatch({
    //             type: TOGGLE_ALL,
    //             payload: completed
    //         }))
    //         .catch(error => console.log(error));
    // }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    };

    // return (dispatch, getState) => {
    //     const todos = getState().todos;
    //     axios.all(todos.todos.filter(t => t.completed).map(t => axios.delete(BASE_URL + `/${t.id}`)))
    //         .then(axios.spread, () => dispatch({
    //             type: CLEAR_COMPLETED
    //         }))
    //         .catch(error => console.log(error));
    // };
}

export const endEdit = (id, text) => {
    return dispatch => {
        axios.patch(BASE_URL + `/${id}`, { title: text })
            .then(response => dispatch({
                type: END_EDIT,
                payload: { id, text }
            }))
            .catch(error => console.log(error));
    };
}