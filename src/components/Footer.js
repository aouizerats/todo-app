
function Footer(props) {
    return (
        <footer class="footer">
            <span class="todo-count"><strong>{props.todos.length}</strong> items left</span>
            <button class="clear-completed" onClick={() => props.clearCompleted()}>Clear completed</button>
        </footer>
    );
}

export default Footer;