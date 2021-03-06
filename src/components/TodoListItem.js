import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, removeTodo, startEdit, endEdit, cancelEdit } from '../redux/actions/todos'
import classNames from "classnames";

function TodoListItem({ todo }) {

    const [editText, setEditText] = useState("");
    const editId = useSelector(state => state.todos.edit);
    const editor = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        setEditText(todo.title);

        if (editor.current) {
            editor.current.focus();
            editor.current.setSelectionRange(0, editor.current.value.length)
        }
    }, [editId === todo.id])

    function handleSubmit(e) {
        var val = editText.trim();
        if (val) {
            dispatch(endEdit(todo.id, editText));
        } else if (editId === todo.id) {
            dispatch(removeTodo(todo.id));
        }
    }

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }

        if (e.key === 'Escape') {
            dispatch(cancelEdit());
        }
    }

    return (
        <li className={classNames({
            completed: todo.completed,
            editing: editId === todo.id,
        })}>
            <div className="view">
                <input key={todo} className="toggle" type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))} />
                <label onDoubleClick={() => dispatch(startEdit(todo.id))}>{todo.title}</label>
                <button className="destroy" onClick={() => dispatch(removeTodo(todo.id))} />
            </div>
            <input className="edit"
                ref={editor}
                value={editText}
                onKeyUp={handleKeyUp}
                onBlur={handleSubmit}
                onChange={e => setEditText(e.target.value)} />
        </li>
    );
}

export default TodoListItem;