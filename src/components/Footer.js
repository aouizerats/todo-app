
function Footer(props) {

    function handleClearCompleted(e) {
        props.setState({...props.state, todos: props.state.todos.filter(t => !t.completed)});
    }

    return (
        <footer class="footer">
            <span class="todo-count"><strong>{props.state.todos.length}</strong> items left</span>
            <button class="clear-completed" onClick={handleClearCompleted}>Clear completed</button>
        </footer>
    );
}

export default Footer;