import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todos'

function Header({ title }) {

    const dispatch = useDispatch();

    function handleKeyUp(e) {
        if (e.key === 'Enter') {
            dispatch(addTodo(e.target.value));
            e.target.value = null;
        }
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <div>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={handleKeyUp} />
            </div>
        </header>
    );
}

export default Header;