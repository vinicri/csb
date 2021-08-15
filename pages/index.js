import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getTodos } from "../api";
import TodosTable from "../components/TodosTable";
import TodoForm from "../components/TodoForm";
import produce from "immer";
import React from "react";
import {
  addTodo,
  setCompleted,
  sortByCompleted,
  sortById,
  sortByTitle
} from "../operations";

const sortByMap = {
  completedAsc: sortByCompleted(),
  completedDesc: sortByCompleted(false),
  titleAsc: sortByTitle(),
  titleDesc: sortByTitle(false),
  idAsc: sortById(),
  idDesc: sortById(false)
};

export default function IndexPage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState({});
  const [filter, setFilter] = useState("");

  const [sortBy, setSortBy] = useState("titleAsc");

  const toggleCompleted = (e, id) => {
    setTodos(setCompleted(todos, id, e.target.checked));
  };

  const handleAdd = (newTodo) => {
    const list = produce(addTodo(todos, newTodo), (draft) => {
      draft.sort(sortByMap[sortBy]);
    });

    setTodos(list);
  };

  const toggleSelected = (e, id) => {
    e.persist();
    setSelected(
      produce(selected, (draft) => {
        if (e.target.checked) {
          draft[id] = true;
        } else {
          delete draft[id];
        }
      })
    );
  };

  const deleteSelected = () => {
    const selectedIds = Object.keys(selected).map((i) => parseInt(i));

    const newTodos = todos.filter((i) => {
      return !selectedIds.includes(i.id);
    });

    setTodos(newTodos);
    setSelected({});
  };

  const getData = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await getTodos();
      console.log(sortBy);
      setTodos(
        response.data.sort((a, b) => {
          return a.completed - b.completed || (a.title > b.title ? 1 : -1);
        })
      );
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const anySelected = Object.keys(selected).length > 0;

  const updateSortBy = (by) => {
    if (by !== sortBy && sortByMap[by]) {
      setTodos(
        produce(todos, (draft) => {
          draft.sort(sortByMap[by]);
        })
      );
      setSortBy(by);
    }
  };

  const filteredTodos = useMemo(() => {
    if (!filter) {
      return todos;
    } else {
      const regex = new RegExp(filter, "i");
      return todos.filter((i) => {
        return regex.test(i.title);
      });
    }
  }, [todos, filter]);

  return (
    <div className="p-5">
      <button
        className="rounded bg-gray-600 text-white text-lg p-3 w-full mb-3"
        onClick={getData}
      >
        Get todsd
      </button>
      <input
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
        className="rounder border border-gray-200 text-lg p-3 w-full"
      />
      {loading ? <div>Loading...</div> : null}
      {error ? (
        <div>
          <p>Error loading the Todos list. Try again.</p>
          <p>{error.message}</p>
        </div>
      ) : null}
      {anySelected && (
        <button
          className="rounded bg-gray-200 text-gray-800 p-2 mb-3 hover:bg-gray-300"
          onClick={deleteSelected}
        >
          Delete selected todos
        </button>
      )}
      <TodoForm onSubmit={handleAdd} />
      {todos.length > 0 ? (
        <TodosTable
          updateSortBy={updateSortBy}
          todos={filteredTodos}
          toggleCompleted={toggleCompleted}
          selected={selected}
          toggleSelected={toggleSelected}
        />
      ) : null}
    </div>
  );
}
