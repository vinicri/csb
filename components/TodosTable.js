export default function TodosTable({ todos }) {
  return (
    <table className="w-full">
      <tr key="header">
        <th>userId</th>
        <th>title</th>
        <th>completed</th>
      </tr>
      {todos.map((todo, index) => (
        <tr key={todo.id} className={`${index % 2 === 0 ? "bg-gray-200" : ""}`}>
          <td>{todo.userId}</td>
          <td>{todo.title}</td>
          <td>{todo.completed.toString()}</td>
        </tr>
      ))}
    </table>
  );
}
