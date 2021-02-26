import TodoListItem from "./TodoListItem";

function TodoList(props) {

    const allCompleted = props.state.todos.every(t => t.completed);

    function handleToggleAll(e) {
        props.state.todos.forEach(t => t.completed = !allCompleted);
        props.setState({ ...props.state });
    }

    return (
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" onChange={handleToggleAll} checked={allCompleted} />
            <ul class="todo-list">
                {props.state.todos.map(t => <TodoListItem todo={t} state={props.state} setState={props.setState} />)}
            </ul>
        </section>
    );
}

export default TodoList;