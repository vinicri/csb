export default function TodoItem({ todo }) {
  return (
    <div>
      <div className="p-2">{todo.title}</div>
    </div>
  );
}
