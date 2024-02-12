import { useState } from "react";

const Todolist = ({ todos, toggleCompleted, editTodo, deleteTodo }) => {
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEdit = (id, text) => {
    setEditText(text);
    setEditId(id);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    editTodo(id, editText);
    setEditText("");
    setEditId(null);
  };

  return (
    <>
      <ul className="divide-y divide-gray-200">
        {todos.map((todo) => (
          <li key={todo?.id} className="flex items-center py-2">
            <input
              type="checkbox"
              checked={todo?.completed}
              onChange={() => toggleCompleted(todo.id)}
              className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500"
            />
            {editId === todo?.id ? (
              <form
                onSubmit={(e) => handleEditSubmit(e, todo?.id)}
                className="flex-grow mx-4"
              >
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                  placeholder="Edit task"
                  className="border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 w-full"
                />
              </form>
            ) : (
              <span
                className={`flex-grow  xs:text-sm ${
                  todo?.completed ? "line-through" : ""
                }`}
              >
                {todo?.text}
              </span>
            )}

            <div className="flex justify-end text-right md:ml-1.5">
              {todo?.completed ? (
                <span className="ml-2 text-green-500 font-bold xs:text-sm">
                  Completed
                </span>
              ) : (
                <span className="ml-2 text-red-500 font-bold xs:text-sm">
                  Incompleted
                </span>
              )}
            </div>

            {!todo?.completed ? (
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="ml-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                <img
                  className=" h-6"
                  src="./images/edit.png"
                  alt=""
                  srcSet=""
                />
              </button>
            ) : (
              <button
                disabled
                onClick={() => handleEdit(todo.id, todo.text)}
                className="ml-2 px-3 py-1 bg-blue-200 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                <img
                  className=" h-6"
                  src="./images/edit.png"
                  alt=""
                  srcSet=""
                />
              </button>
            )}

            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              <img
                className=" h-6"
                src="./images/cancel.png"
                alt=""
                srcSet=""
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
