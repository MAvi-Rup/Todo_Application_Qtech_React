import React from "react";

const Counter = ({ todos }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gray-200 rounded-md p-4">
        <h2 className="text-lg font-semibold">All Tasks</h2>
        <p className="text-3xl font-bold">{todos?.length}</p>
      </div>
      <div className="bg-green-200 rounded-md p-4">
        <h2 className="text-lg font-semibold">Completed Tasks</h2>
        <p className="text-3xl font-bold">
          {todos?.filter((todo) => todo.completed)?.length ?? 0}
        </p>
      </div>
      <div className="bg-red-200 rounded-md p-4">
        <h2 className="text-lg font-semibold">Incomplete Tasks</h2>
        <p className="text-3xl font-bold">
          {todos?.filter((todo) => !todo.completed).length}
        </p>
      </div>
    </div>
  );
};

export default Counter;
