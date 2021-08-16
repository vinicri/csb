import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getTodos } from "../api";
import TodosTable from "../components/TodosTable";

export default function IndexPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  return (
    <div className="p-5">
      <button
        className="rounded bg-gray-600 text-white text-lg p-3 w-full mb-3"
        onClick={getData}
      >
        Get todos
      </button>
      {loading && <div>Loading...</div>}
      {error && (
        <div>
          <p data-testid="error-message">
            Error loading the Todos list. Try again.
          </p>
        </div>
      )}
      {todos.length > 0 ? <TodosTable todos={todos} /> : null}
    </div>
  );
}
