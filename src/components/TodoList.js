import TodoListItem from "./TodoListItem";

function TodoList(props) {

    const allCompleted = props.state.todos.every(t => t.completed);

    function handleToggleAll(e) {
        props.state.todos.forEach(t => t.completed = !allCompleted);
        props.setState({ ...props.state });
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={handleToggleAll} checked={allCompleted} />
            <ul className="todo-list">
                {props.state.todos.map(t => <TodoListItem key={t.id} todo={t} state={props.state} setState={props.setState} />)}
            </ul>
        </section>
    );
}

export default TodoList;