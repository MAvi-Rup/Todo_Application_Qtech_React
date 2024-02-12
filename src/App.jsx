import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Component/Features/Filter";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Counter from "./Component/Todo/Counter";
import Todolist from "./Component/Todo/Todolist";

function App() {
  const storedItems = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(storedItems || []);
  const [filter, setFilter] = useState("all");
  const localStorageKey = "todos";

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos, localStorageKey]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    return todo.priority === filter;
  });

  return (
    <div className="grid place-items-center bg-slate-300 h-screen px-6 font-sans">
      <Navbar />
      <Counter todos={filteredTodos} />
      <div className=" w-full max-w-2xl rounded-lg bg-slate-200 px-5">
        <Header addTodo={addTodo} />
        <Todolist
          todos={filteredTodos}
          toggleCompleted={toggleCompleted}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
        <Filter todos={filteredTodos} />
      </div>
    </div>
  );
}

export default App;
