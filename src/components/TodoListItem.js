import classNames from "classnames";
import { useEffect, useRef, useState } from 'react'

function TodoListItem({ todo, removeTodo, editing }) {

    const [reload, setReload] = useState(false);
    const editor = useRef();

    useEffect(() => {
        if (editor.current) {
            editor.current.focus();
            editor.current.setSelectionRange(0, editor.current.value.length)
        }

    }, [editing.isEditing(todo)])

    function handleSubmit(e) {
        var val = editing.editText.trim();
        if (val) {
            editing.endEdit(todo, val);
        } else if (editing.isEditing(todo)) {
            removeTodo(todo);
        }
    }

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }

        if (e.key === 'Escape') {
            editing.cancelEdit();
        }
    }

    function handleToggle(e) {
        todo.toggle();
        setReload(!reload);
    }

    return (
        <li className={classNames({
            completed: todo.completed,
            editing: editing.isEditing(todo),
        })}>
            <div className="view">
                <input key={todo} className="toggle" type="checkbox" checked={todo.completed} onChange={handleToggle} />
                <label onDoubleClick={() => editing.startEdit(todo)}>{todo.title}</label>
                <button className="destroy" onClick={() => removeTodo(todo)} />
            </div>
            <input className="edit"
                ref={editor}
                value={editing.editText}
                onKeyUp={handleKeyUp}
                onBlur={handleSubmit}
                onChange={e => editing.updateEdit(todo, e.target.value)} />
        </li>
    );
}

export default TodoListItem;