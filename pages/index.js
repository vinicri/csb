import Link from "next/link";
import { useEffect, useState } from "react";
import { getTodos } from "../api";

export default function IndexPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setError(null);
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (e) {
      setError(e);
    }
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
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>Aut</a>
      </Link>
    </div>
  );
}
