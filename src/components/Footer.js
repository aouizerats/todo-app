
function Footer({ count, clearCompleted }) {
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{count}</strong> items left</span>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
}

export default Footer;