import { Todo } from "../models/Todo";

function Header(props) {

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            const todo = Todo.create(e.target.value.trim());
            if (todo) {
                props.setState({ ...props.state, todos: [...props.state.todos, todo] });
                e.target.value = null;
            }
        }
    }

    return (
        <header class="header">
            <h1>{props.title}</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus onKeyUp={handleKeyUp} />
        </header>
    );
}

export default Header;