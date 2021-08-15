import React from "react";

export default function TodosTable({ todos }) {
  return (
    <table className="w-full">
      <thead>
        <tr key="header">
          <th>userId</th>
          <th>title</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr
            key={todo.id}
            className={`${
              index % 2 === 0 ? "bg-gray-200" : ""
            } hover:bg-gray-300 cursor-pointer`}
          >
            <td>{todo.userId}</td>
            <td>{todo.title}</td>
            <td>{todo.completed.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
