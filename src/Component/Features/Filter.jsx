import React from "react";

const Filter = ({ todos, setFilter }) => {
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{todos?.filter((todo) => !todo.completed).length} tasks left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className="cursor-pointer font-bold"
          onClick={() => setFilter("all")}
        >
          All
        </li>
        <li>|</li>
        <li className="cursor-pointer" onClick={() => setFilter("incomplete")}>
          Incomplete
        </li>
        <li>|</li>
        <li className="cursor-pointer" onClick={() => setFilter("completed")}>
          Completed
        </li>
        <li>|</li>
        <li className="cursor-pointer" onClick={() => setFilter("high")}>
          High
        </li>
        <li>|</li>
        <li className="cursor-pointer" onClick={() => setFilter("medium")}>
          Medium
        </li>
        <li>|</li>
        <li className="cursor-pointer" onClick={() => setFilter("low")}>
          Low
        </li>
      </ul>
    </div>
  );
};

export default Filter;
