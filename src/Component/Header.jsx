import { useState } from "react";

const Header = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    addTodo({
      id: Date.now(),
      text: newTodoText,
      completed: false,
      priority: "low", // Default priority
    });
    setNewTodoText("");
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
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain`}
        ></button>
      </form>
    </div>
  );
};

export default Header;
