import TodoListItem from "./TodoListItem";
import { useState } from "react";

function TodoList({ todos, removeTodo, submitTodo, toggleAll }) {

    const [editing, setEditing] = useState({
        id: undefined,
        text: ""
    });

    function startEdit(todo) {
        if (!todo.completed)
            setEditing({ ...editing, id: todo.id, text: todo.title });
    }

    function endEdit() {
        setEditing({ ...editing, id: undefined, text: "" });
    }

    function updateEdit(text) {
        setEditing({ ...editing, text: text });
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll} checked={todos.every(t => t.completed)} />
            <ul className="todo-list">
                {todos.map(t => <TodoListItem key={t.id} editing={editing} todo={t}
                    submitTodo={submitTodo}
                    removeTodo={removeTodo}
                    startEdit={startEdit}
                    endEdit={endEdit}
                    updateEdit={updateEdit} />)}
            </ul>
        </section>
    );
}

export default TodoList;