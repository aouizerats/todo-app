import './App.css';

import { useApi } from "./hooks/useApi";
import { useCollection } from "./hooks/useCollection";
import { Todo } from "./models/Todo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {

  const { data, loading, reload } = useApi('https://jsonplaceholder.typicode.com/todos', i => new Todo(i.userId, i.id, i.title, i.completed));
  const todos = useCollection(data, Todo.create);

  return (
    <section className="todoapp">
      <Header title="todos" createTodo={todos.addItem} reload={reload} />
      {loading ? <label>Loading...</label> : <TodoList todos={todos} />}
      <Footer count={todos.collection.length} clearCompleted={todos.clearCompleted} />
    </section>
  );
}

export default App;
