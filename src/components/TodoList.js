import { useEditing } from "../hooks/useEditing";
import TodoListItem from "./TodoListItem";

function TodoList({ todos }) {

    const editing = useEditing();

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={todos.toggleAll} checked={todos.collection.every(t => t.completed)} />
            <ul className="todo-list">
                {todos.collection.map(t => <TodoListItem key={t.id} editing={editing} todo={t} removeTodo={todos.removeItem} />)}
            </ul>
        </section>
    );
}

export default TodoList;