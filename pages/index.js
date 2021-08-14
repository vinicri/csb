import Link from "next/link";
import { useEffect, useState } from "react";
import { getTodos } from "../api";
import TodosTable from "../components/TodosTable";
import TodoForm from "../components/TodoForm";
import produce from "immer";

const sortByCompleted = (asc = true) => (a, b) => {
  return (asc ? 1 : -1) * (a.completed - b.completed);
};

const sortById = (asc = true) => (a, b) => {
  return (asc ? 1 : -1) * (a.id - b.id);
};

const sortByTitle = (asc = true) => (a, b) => {
  return asc ? a.title > b.title : a.title < b.title;
};

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

  const [sortBy, setSortBy] = useState("completedAsc");

  const toggleCompleted = (e, id) => {
    e.persist();
    setTodos(
      produce(todos, (draft) => {
        const found = draft.find((i) => i.id === id);
        found.completed = e.target.checked;
        draft.sort(sortByMap[sortBy]);
      })
    );
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
    //console.log(selectedIds);

    const newTodos = todos.filter((i) => {
      return !selectedIds.includes(i.id);
    });
    // setTodos(
    //   produce(todos, (draft) => {
    //     return draft.filter((i) => !selectedIds.includes(i.id));
    //   })
    // );
    setTodos(newTodos);
    setSelected({});
  };

  const getData = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await getTodos();
      console.log(sortBy);
      setTodos(response.data.sort(sortByMap[sortBy]));
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

  return (
    <div className="p-5">
      <button
        className="rounded bg-gray-600 text-white text-lg p-3 w-full mb-3"
        onClick={getData}
      >
        Get todsd
      </button>
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
      <TodoForm />
      {todos.length > 0 ? (
        <TodosTable
          updateSortBy={updateSortBy}
          todos={todos}
          toggleCompleted={toggleCompleted}
          selected={selected}
          toggleSelected={toggleSelected}
        />
      ) : null}
    </div>
  );
}
