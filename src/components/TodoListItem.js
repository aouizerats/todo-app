function TodoListItem(props) {
    return (
        <li>
            <div class="view">
                <input key={props.todo} class="toggle" type="checkbox" checked={props.todo.completed} onClick={() => props.toggleTodo(props.todo)}/>
                <label>{props.todo.title}</label>
                <button class="destroy" onClick={() => props.removeTodo(props.todo)}/>
            </div>
            <input class="edit" />
        </li>
    );
}

export default TodoListItem;