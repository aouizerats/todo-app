import { useContext } from "react";
import { TodosContext } from "../providers/TodosContext";
import TodoListItem from "./TodoListItem";

function TodoList() {

    const context = useContext(TodosContext);

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={() => context.toggleAll()} checked={context.todos.every(t => t.completed)} />
            <ul className="todo-list">
                {context.todos.map(t => <TodoListItem key={t.id} todo={t} />)}
            </ul>
        </section>
    );
}

export default TodoList;