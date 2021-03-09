import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {

  // const { data, loading, reload } = useApi('https://jsonplaceholder.typicode.com/todos', i => new Todo(i.userId, i.id, i.title, i.completed));
 
  return (
    <section className="todoapp">
      <Header title="todos" />
      <TodoList />
      <Footer />
    </section>
  );
}

export default App;
