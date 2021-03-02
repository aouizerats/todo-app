
function Footer(props) {

    function handleClearCompleted(e) {
        props.setState({...props.state, todos: props.state.todos.filter(t => !t.completed)});
    }

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{props.state.todos.length}</strong> items left</span>
            <button className="clear-completed" onClick={handleClearCompleted}>Clear completed</button>
        </footer>
    );
}

export default Footer;