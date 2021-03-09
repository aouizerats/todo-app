import { useContext } from "react";
import { TodosContext } from "../providers/TodosContext";

function Header({ title }) {

    const context = useContext(TodosContext);

    function handleKeyUp(e) {
        if (e.key === 'Enter' && context.addTodo(e.target.value.trim())) {
            e.target.value = null;
        }
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <button >Reload</button>
            <div>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={handleKeyUp} />
            </div>
        </header>
    );
}

export default Header;

// onClick={reload}