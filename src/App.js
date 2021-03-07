import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <section className="todoapp">
      <Header title="todos" />
      <TodoList />
      <Footer />
    </section>
  );
}

export default App;
