import './App.css';

import { useState, useEffect } from 'react'
import { Todo } from "./models/Todo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function createTodo(title) {
    const todo = Todo.create(title);
    if (todo) {
      setTodos([...todos, todo]);
      return true;
    }
    return false;
  }

  function removeTodo(todo) {
    setTodos(todos.filter(t => t != todo));
  }

  function toggleTodo(todo) {
    todo.toggle();
    setTodos([...todos]);
  }

  function clearCompleted() {
    setTodos(todos.filter(t => !t.completed));
  }

  useEffect(() => {
    async function fetchTodos() {
      await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTodos(json.map(i => new Todo(i.userId, i.id, i.title, i.completed))));
    }

    fetchTodos();
  }, []);

  return (
    <section class="todoapp">
      <Header title="todos" createTodo={createTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      <Footer todos={todos} clearCompleted={clearCompleted} />
    </section>
  );
}

export default App;
