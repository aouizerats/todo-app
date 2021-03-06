import { useDispatch, useSelector } from 'react-redux';
import { toggleAll } from '../redux/actions/todos'
import TodoListItem from "./TodoListItem";

function TodoList() {

    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"
                onChange={(e) => dispatch(toggleAll())}
                checked={todos.every(t => t.completed)} />

            <ul className="todo-list">
                {todos.map(t => <TodoListItem key={t.id} todo={t} />)}
            </ul>
        </section>
    );
}

export default TodoList;