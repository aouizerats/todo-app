import classNames from "classnames";

function TodoListItem({ editing, todo, submitTodo, removeTodo, startEdit, endEdit, updateEdit }) {

    function handleSubmit(e) {
        var val = editing.text.trim();
        if (val) {
            todo.title = val;
            submitTodo(todo);
            endEdit();
        } else if (editing.id) {
            removeTodo(todo);
        }
    }

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }

        if (e.key === 'Escape') {
            endEdit();
        }
    }

    function handleChange(e) {
        if (editing.id === todo.id) {
            updateEdit(e.target.value);
        }
    }

    function handleToggle(e) {
        todo.toggle();
        submitTodo(todo);
    }

    return (
        <li className={classNames({
            completed: todo.completed,
            editing: editing.id === todo.id,
        })}>
            <div className="view">
                <input key={todo} className="toggle" type="checkbox" checked={todo.completed} onChange={handleToggle} />
                <label onDoubleClick={() => startEdit(todo)}>{todo.title}</label>
                <button className="destroy" onClick={() => removeTodo(todo)} />
            </div>
            <input className="edit" value={editing.text} onKeyUp={handleKeyUp} onBlur={handleSubmit} onChange={handleChange} />
        </li>
    );
}

export default TodoListItem;