
export const addTodo = title => {
    return {
        type: 'ADD_TODO',
        payload: title
    };
}

export const removeTodo = id => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    };
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    };
}

export const toggleAll = () => {
    return {
        type: 'TOGGLE_ALL'
    };
}

export const clearCompleted = () => {
    return {
        type: 'CLEAR_COMPLETED'
    };
}

export const startEdit = id => {
    return {
        type: 'START_EDIT',
        payload: id
    }
}

export const endEdit = (id, text) => {
    return {
        type: 'END_EDIT',
        payload: { id, text }
    }
}

export const cancelEdit = () => {
    return {
        type: 'CANCEL_EDIT'
    };
}