import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../redux/actions/todos'

function Footer() {

    const todos = useSelector(state => state.todos.todos);
    const dispacth = useDispatch();

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todos.length}</strong> items left</span>
            <button className="clear-completed" onClick={() => dispacth(clearCompleted())}>Clear completed</button>
        </footer>
    );
}

export default Footer;