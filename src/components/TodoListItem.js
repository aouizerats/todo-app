import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { toggleTodo, removeTodo, startEdit, endEdit, cancelEdit } from '../redux/actions/todos'
import classNames from "classnames";

const TodoListItem = ({ todo, toggleTodo, removeTodo, endEdit }) => {

    const [editText, setEditText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const editor = useRef();

    useEffect(() => {
        setEditText(todo.title);

        if (editor.current) {
            editor.current.focus();
            editor.current.setSelectionRange(0, editor.current.value.length)
        }
    }, [isEditing])

    function handleSubmit(e) {
        if (isEditing) {
            var val = editText.trim();
            if (val) {
                setIsEditing(false);
                endEdit(todo.id, editText);
            } else {
                removeTodo(todo.id);
            }
        }
    }

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }

        if (e.key === 'Escape') {
            setIsEditing(false);
        }
    }

    return (
        <li className={classNames({
            completed: todo.completed,
            editing: isEditing,
        })}>
            <div className="view">
                <input key={todo} className="toggle" type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id, todo.completed)} />
                <label onDoubleClick={() => setIsEditing(true)}>{todo.title}</label>
                <button className="destroy" onClick={() => removeTodo(todo.id)} />
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

export default connect(null, { toggleTodo, removeTodo, endEdit })(TodoListItem);