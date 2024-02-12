import { useState } from "react";

const Header = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");
  const [priority, setPriority] = useState("");

  const handleChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    addTodo({
      id: Date.now(),
      text: newTodoText,
      completed: false,
      priority: priority,
    });
    setNewTodoText("");
    setPriority("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-slate-200 px-5 py-5 rounded-md"
      >
        <img className=" h-8" src="./images/notes.png" alt="" />
        <input
          type="text"
          className="w-full mx-4 text-lg px-5 py-2 border-none outline-none rounded text-black-400"
          value={newTodoText}
          onChange={handleChange}
        />
        <select
          value={priority}
          className=" w-1/4 mx-4 text-lg px-5 py-2 border-none outline-none rounded text-black-400"
          onChange={handlePriorityChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">
          <img
            className=" ml-3 h-7 w-7"
            src="./images/plus.png"
            alt=""
            srcSet=""
          />
        </button>
      </form>
    </div>
  );
};

export default Header;
