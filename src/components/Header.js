function Header(props) {

    function handleKeyUp(e) {
        if (e.key === 'Enter' && props.createTodo(e.target.value)) {
            e.target.value = null;
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