
function Header({ title, createTodo, reload }) {

    function handleKeyUp(e) {
        if (e.key === 'Enter' && createTodo(e.target.value.trim())) {
            e.target.value = null;
        }
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <button onClick={reload}>Reload</button>
            <div>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={handleKeyUp} />
            </div>
        </header>
    );
}

export default Header;