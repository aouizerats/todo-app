const initalState = {
    todos: [],
    edit: undefined
};

const todosReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const title = action.payload;
            return {
                ...state,
                todos: [...state.todos, { title: title, completed: false, id: new Date().getMilliseconds() }]
            };
        }
        case 'REMOVE_TODO': {
            const id = action.payload;
            return {
                ...state,
                todos: state.todos.filter(t => t.id !== id)
            };
        }
        case 'TOGGLE_TODO': {
            const id = action.payload;
            const todo = state.todos.find(t => t.id === id);
            if (todo)
                todo.completed = !todo.completed;
            return {
                ...state,
                todos: [...state.todos]
            };
        }
        case 'TOGGLE_ALL': {
            const completed = state.todos.every(t => t.completed)
            state.forEach(t => t.completed = !completed);
            return {
                ...state,
                todos: [...state.todos]
            };
        }
        case 'CLEAR_COMPLETED': {
            return {
                ...state,
                todos: state.todos.filter(t => !t.completed)
            };
        }
        case 'START_EDIT': {
            const id = action.payload;
            const todo = state.todos.find(t => t.id === id);
            if (todo.completed) return state;
            return {
                ...state,
                edit: id
            };
        }
        case 'END_EDIT': {
            const { id, text } = action.payload;
            const todo = state.todos.find(t => t.id === id);
            if (todo) todo.title = text;
            return {
                ...state,
                edit: undefined,
            };
        }
        case 'CANCEL_EDIT': {
            return {
                ...state,
                edit: undefined
            }
        }
        default:
            return state;
    }
};

export default todosReducer;