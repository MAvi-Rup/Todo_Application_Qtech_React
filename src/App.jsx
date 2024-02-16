import { useEffect, useState } from "react";
import Filter from "./Component/Features/Filter";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Counter from "./Component/Todo/Counter";
import Todolist from "./Component/Todo/Todolist";

function App() {
  const storedItems = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(storedItems || []);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  //Toggle Function
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
  //Delete Function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Filter Function
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return todo.priority === filter;
  });

  return (
    <div className="bg-slate-300">
      <Navbar />
      <div className="grid place-items-center bg-slate-300 h-screen font-sans">
        <Counter todos={todos} />
        <div className=" w-full max-w-2xl rounded-lg bg-slate-200 px-5">
          <Header addTodo={addTodo} />
          <Todolist
            todos={filteredTodos}
            toggleCompleted={toggleCompleted}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
          <Filter todos={filteredTodos} setFilter={setFilter} />
        </div>
      </div>
    </div>
  );
}

export default App;
