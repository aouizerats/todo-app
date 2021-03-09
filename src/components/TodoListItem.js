import classNames from "classnames";
import { useContext, useEffect, useRef, useState } from 'react'
import { TodosContext } from "../providers/TodosContext";

function TodoListItem({ todo }) {

    const context = useContext(TodosContext);
    const [edit, setEdit] = useState({ editing: false, editText: "" });
    const editor = useRef();

    useEffect(() => {
        if (edit.editing) {
            setEdit({ ...edit, editText: todo.title });

            if (editor.current) {
                editor.current.focus();
                editor.current.setSelectionRange(0, editor.current.value.length)
            }
        }

    }, [edit.editing])

    function handleSubmit(e) {
        var val = edit.editText.trim();
        if (val) {
            todo.title = val;
            setEdit({ ...edit, editing: false, editText: "" });
        } else if (edit.editing) {
            context.removeTodo(todo);
        }
    }

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }

        if (e.key === 'Escape') {
            setEdit({ ...edit, editing: false, editText: "" });
        }
    }

    return (
        <li className={classNames({
            completed: todo.completed,
            editing: edit.editing,
        })}>
            <div className="view">
                <input key={todo} className="toggle" type="checkbox" checked={todo.completed} onChange={() => context.toggleTodo(todo.id)} />
                <label onDoubleClick={() => setEdit({ ...edit, editing: true, editText: todo.title })}>{todo.title}</label>
                <button className="destroy" onClick={() => context.removeTodo(todo)} />
            </div>
            <input className="edit"
                ref={editor}
                value={edit.editText}
                onKeyUp={handleKeyUp}
                onBlur={handleSubmit}
                onChange={e => setEdit({ ...edit, editText: e.target.value })} />
        </li>
    );
}

export default TodoListItem;