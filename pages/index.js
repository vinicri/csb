import Link from "next/link";
import { useEffect, useState } from "react";
import { getTodos } from "../_api";

export default function IndexPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData();
  }, []);

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

  if (error) {
    return (
      <div>
        <p>Oops! Error getting todos list.</p>
        <button onClick={getData}>Try again</button>
        <p>{error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (todos.length === 0) {
    return (
      <div>
        No todos yet. Start creating one <Link>here</Link>
      </div>
    );
  }
  return (
    <div>
      {todos.map((todo) => (
        <div></div>
      ))}
    </div>
  );
}
