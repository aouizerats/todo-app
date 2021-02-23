import TodoListItem from "./TodoListItem";

function TodoList(props) {
    return (
        <section class="main">
            <input class="toggle-all" type="checkbox" />
            <ul class="todo-list">
                {props.todos.map(t => <TodoListItem todo={t} removeTodo={props.removeTodo} toggleTodo={props.toggleTodo}/>)}
            </ul>
        </section>
    );
}

export default TodoList;