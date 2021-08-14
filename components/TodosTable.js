export default function TodosTable({
  todos,
  toggleCompleted,
  selected,
  toggleSelected,
  updateSortBy
}) {
  return (
    <table className="w-full">
      <tr key="header">
        <th>
          <span>userId</span>
          <button
            className="p-1 rounded bg-gray-200 m-1"
            onClick={() => updateSortBy("idAsc")}
          >
            A
          </button>
          <button
            className="p-1 rounded bg-gray-200 m-1"
            onClick={() => updateSortBy("idDesc")}
          >
            D
          </button>
        </th>
        <th>
          <span>title</span>
          <button
            className="p-1 rounded bg-gray-200 m-1"
            onClick={() => updateSortBy("titleAsc")}
          >
            A
          </button>
          <button
            className="p-1 rounded bg-gray-200 m-1"
            onClick={() => updateSortBy("titleDesc")}
          >
            D
          </button>
        </th>
        <th>
          <span>completed</span>
          <button
            className="p-1 rounded bg-gray-200 m-1"
            onClick={() => updateSortBy("completedAsc")}
          >
            A
          </button>
          <button
            className="p-1 rounded bg-gray-200 m-1"
            onClick={() => updateSortBy("completedDesc")}
          >
            D
          </button>
        </th>
      </tr>
      {todos.map((todo, index) => (
        <tr
          key={todo.id}
          className={`${
            index % 2 === 0 ? "bg-gray-200" : ""
          } hover:bg-gray-300 cursor-pointer`}
        >
          <td>
            <input
              type="checkbox"
              className="mx-1"
              checked={!!selected[todo.id]}
              onChange={(e) => toggleSelected(e, todo.id)}
            />
            <span>{todo.userId}</span>
          </td>
          <td>{todo.title}</td>
          <td>
            <input
              className="mr-1"
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => toggleCompleted(e, todo.id)}
            />
            <span>{todo.completed.toString()}</span>
          </td>
        </tr>
      ))}
    </table>
  );
}
