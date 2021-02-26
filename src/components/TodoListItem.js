import classNames from "classnames";

function TodoListItem(props) {

    function handleSubmit(e) {
        var val = props.state.editText.trim();
        if (val) {
            props.todo.title = val;
            props.setState({ ...props.state, editing: undefined, editText: "" });
        } else if (props.editing) {
            handleRemove(e);
        }
    }

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }

        if (e.key === 'Escape') {
            props.setState({ ...props.state, editing: undefined, editText: "" });
        }
    }

    function handleChange(e) {
        if (props.state.editing === props.todo.id) {
            props.setState({ ...props.state, editText: e.target.value });
        }
    }

    function handleToggle(e) {
        props.todo.toggle();
        props.setState({ ...props.state });
    }

    function handleEdit(e) {
        if (!props.todo.completed)
            props.setState({ ...props.state, editing: props.todo.id, editText: props.todo.title });
    }

    function handleRemove(e) {
        props.setState({ ...props.state, todos: props.state.todos.filter(t => t !== props.todo) });
    }

    return (
        <li className={classNames({
            completed: props.todo.completed,
            editing: props.state.editing === props.todo.id,
        })}>
            <div class="view">
                <input key={props.todo} class="toggle" type="checkbox" checked={props.todo.completed} onClick={handleToggle} />
                <label onDoubleClick={handleEdit}>{props.todo.title}</label>
                <button class="destroy" onClick={handleRemove} />
            </div>
            <input class="edit" value={props.state.editText} onKeyUp={handleKeyUp} onBlur={handleSubmit} onChange={handleChange} />
        </li>
    );
}

export default TodoListItem;