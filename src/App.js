import './App.css';

import { useState, useEffect } from 'react'
import { Todo } from "./models/Todo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTodos(json.map(i => new Todo(i.userId, i.id, i.title, i.completed))))
        .finally(() => setLoading(false));
    }

    setLoading(true);
    fetchTodos();
  }, [reload]);

  function createTodo(title) {
    const todo = Todo.create(title);
    if (todo) {
      setTodos([...todos, todo]);
      return true;
    }
    return false;
  }

  function clearCompleted() {
    setTodos(todos.filter(t => !t.completed));
  }

  function removeTodo(todo) {
    setTodos(todos.filter(t => t !== todo));
  }

  function submitTodo(todo) {
    setTodos([...todos]);
  }

  function toggleAll() {
    const allCompleted = todos.every(t => t.completed)
    todos.forEach(t => t.completed = !allCompleted);
    setTodos([...todos]);
  }

  return (
    <section className="todoapp">
      <Header title="todos" createTodo={createTodo} reload={() => setReload(!reload)} />
      {loading ? <label>Loading...</label> : <TodoList todos={todos} submitTodo={submitTodo} removeTodo={removeTodo} toggleAll={toggleAll} />}
      <Footer count={todos.length} clearCompleted={clearCompleted} />
    </section>
  );
}

export default App;
