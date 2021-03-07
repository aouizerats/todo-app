import { useEffect } from 'react'
import { connect } from 'react-redux';
import { loadTodos, toggleAll } from '../redux/actions/todos'
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, loadTodos, toggleAll }) => {

    useEffect(() => {
        loadTodos();
    }, [])

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"
                onChange={() => toggleAll()}
                checked={todos.every(t => t.completed)} />

            <ul className="todo-list">
                {todos.map(t => <TodoListItem key={t.id} todo={t} />)}
            </ul>
        </section>
    );
}

export default connect(state => state.todos, { loadTodos, toggleAll })(TodoList);