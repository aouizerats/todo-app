import { useContext } from 'react';
import { TodosContext } from "../providers/TodosContext";

function Footer() {

    const context = useContext(TodosContext);

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{context.todos.length}</strong> items left</span>
            <button className="clear-completed" onClick={context.clearCompleted}>Clear completed</button>
        </footer>
    );
}

export default Footer;