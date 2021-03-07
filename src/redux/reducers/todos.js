import * as actions from '../actions/todos'

const initalState = {
    todos: [],
};

const todosReducer = (state = initalState, action) => {
    switch (action.type) {
        case actions.LOAD_TODOS: {
            const todos = action.payload;
            return {
                ...state,
                todos: todos
            };
        }
        case actions.ADD_TODO: {
            const title = action.payload;
            return {
                ...state,
                todos: [...state.todos, { title: title, completed: false, id: new Date().getMilliseconds() }]
            };
        }
        case actions.REMOVE_TODO: {
            const id = action.payload;
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== id)
            };
        }
        case actions.TOGGLE_TODO: {
            const id = action.payload;
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
            };
        }
        case actions.TOGGLE_ALL: {
            const completed = state.todos.every(t => t.completed);
            return {
                ...state,
                todos: state.todos.map(todo => todo.completed === !completed ? todo : { ...todo, completed: !completed })
            };
        }
        case actions.CLEAR_COMPLETED: {
            return {
                ...state,
                todos: state.todos.filter(t => !t.completed)
            };
        }
        case actions.END_EDIT: {
            const { id, text } = action.payload;
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === id ? { ...todo, title: text } : todo)
            };
        }
        default:
            return state;
    }
};

export default todosReducer;