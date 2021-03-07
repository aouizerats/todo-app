import { connect } from 'react-redux';
import { clearCompleted } from '../redux/actions/todos'

const Footer = ({ todos, clearCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todos.length}</strong> items left</span>
            <button className="clear-completed" onClick={() => clearCompleted()}>Clear completed</button>
        </footer>
    );
}

export default connect(state => state.todos, { clearCompleted })(Footer);