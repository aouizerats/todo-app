import './App.css';

import { useState, useEffect } from 'react'
import { Todo } from "./models/Todo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  const [state, setState] = useState({
    todos: [],
    editing: undefined,
    editText: "",
  });

  useEffect(() => {
    async function fetchTodos() {
      await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setState({ ...state, todos: json.map(i => new Todo(i.userId, i.id, i.title, i.completed)) }));
    }

    fetchTodos();
  }, []);

  return (
    <section class="todoapp">
      <Header title="todos" state={state} setState={setState} />
      <TodoList state={state} setState={setState} />
      <Footer state={state} setState={setState} />
    </section>
  );
}

export default App;
