import React from "react";

export default function TodoForm({ initialValues, onClose }) {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex flex-col" onSubmit={submit}>
      <label className="pt-2">
        userId:
        <input
          className="rounded border border-gray-200 pt-2 ml-2"
          type="number"
          name="userId"
        />
      </label>
      <label className="pt-2">
        title:
        <input
          className="rounded border border-gray-200 p-2 ml-2"
          type="text"
          name="title"
        />
      </label>
      <label className="pt-2">
        completed:
        <input type="checkbox" name="completed" />
      </label>
      <div className="mt-3">
        <button
          className="rounded bg-gray-200 text-gray-800 p-2 mb-3 hover:bg-gray-300"
          type="submit"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="rounded bg-gray-200 text-gray-800 p-2 mb-3 hover:bg-gray-300 ml-3"
        >
          Close
        </button>
      </div>
    </form>
  );
}
