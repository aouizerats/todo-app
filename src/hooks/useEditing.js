import { useState } from 'react';

export function useEditing() {

    const [state, setState] = useState({ id: undefined, text: "" });

    function startEdit(item) {
        if (!item.completed)
            setState({ ...state, id: item.id, text: item.title });
    }

    function cancelEdit() {
        setState({ ...state, id: undefined, text: "" });
    }

    function endEdit(item, text) {
        if (item.id === state.id) {
            item.title = text;
            cancelEdit();
        }
    }

    function updateEdit(item, text) {
        if (item.id === state.id) {
            setState({ ...state, text: text });
        }
    }

    function isEditing(item) {
        return item.id === state.id;
    }

    return { editText: state.text, startEdit, cancelEdit, endEdit, updateEdit, isEditing };
}