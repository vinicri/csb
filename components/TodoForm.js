import React, { useState } from "react";

export default function TodoForm({ initialValues, onClose, onSubmit }) {
  const submit = (e) => {
    e.preventDefault();
    if (values.title && !isNaN(parseInt(values.userId, 10))) {
      onSubmit(values);
      setValues({
        userId: "",
        title: "",
        completed: false
      });
    }
  };
  const [values, setValues] = useState({
    userId: "",
    title: "",
    completed: false
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  return (
    <form className="flex flex-col" onSubmit={submit}>
      <label className="pt-2">
        userId:
        <input
          className="rounded border border-gray-200 pt-2 ml-2"
          type="number"
          name="userId"
          value={values.userId}
          onChange={handleChange}
        />
      </label>
      <label className="pt-2">
        title:
        <input
          className="rounded border border-gray-200 p-2 ml-2"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </label>
      <label className="pt-2">
        completed:
        <input
          type="checkbox"
          name="completed"
          checked={values.completed}
          onChange={(e) =>
            handleChange({
              target: { name: e.target.name, value: e.target.checked }
            })
          }
        />
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
