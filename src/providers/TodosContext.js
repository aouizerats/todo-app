import { createContext, useState } from 'react';

export const TodosContext = createContext({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggleTodo: () => { },
    clearCompleted: () => { },
    toggleAll: () => { }
});

export const TodosContextProvider = (props) => {

    const addTodo = (title) => {
        if (title) {
            setState(state => ({ ...state, todos: [...state.todos, { title: title, completed: false, id: new Date().getMilliseconds() }] }));
            return true;
        }
        return false;
    };

    const removeTodo = (item) => {
        setState(state => ({ ...state, todos: state.todos.filter(i => i !== item) }));
    }

    const toggleTodo = (id) => {
        setState(state => ({ ...state, todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo) }));
    }

    const clearCompleted = () => {
        setState(state => ({ ...state, todos: state.todos.filter(i => !i.completed) }));
    }

    const toggleAll = () => {
        setState(state => {
            const allCompleted = state.todos.every(t => t.completed);
            return ({ ...state, todos: state.todos.map(t => t.completed === !allCompleted ? t : { ...t, completed: !allCompleted }) });
        })
    }

    const [state, setState] = useState({
        todos: [],
        addTodo: addTodo,
        removeTodo: removeTodo,
        toggleTodo: toggleTodo,
        clearCompleted: clearCompleted,
        toggleAll: toggleAll
    });

    return (
        <TodosContext.Provider value={state}>
            {props.children}
        </TodosContext.Provider>
    );
}