import produce from "immer";
/** CRUD operations */

export const addTodo = (todos, todo) => {
  return produce(todos, (draft) => {
    draft.push(todo);
  });
};

export const editTodo = (todos, todo) => {
  return produce(todos, (draft) => {
    const index = todos.findIndex((i) => i.id === todo.id);
    if (index < 0) {
      throw Error("invalid operation");
    }
    draft[index] = todo;
  });
};

export const setCompleted = (todos, id, completed) => {
  return produce(todos, (draft) => {
    const found = draft.find((i) => i.id === id);
    if (!found) {
      throw Error("Invalid id");
    }
    found.completed = completed;
  });
};

export const deleteSelected = (todos, ids) => {
  return todos.filter((todo) => {
    return !ids.includes(todo.id);
  });
};

/** Sort operations */
export const sortByCompleted = (asc = true) => (a, b) => {
  return (asc ? 1 : -1) * (a.completed - b.completed);
};

export const sortById = (asc = true) => (a, b) => {
  return (asc ? 1 : -1) * (a.id - b.id);
};

export const sortByTitle = (asc = true) => (a, b) => {
  const result = a.title > b.title ? 1 : -1;
  return asc ? result : -1 * result;
};

export const twoLevelsSort = (todos, firstSort, secondSort) => {
  return produce(todos, (draft) => {
    draft.sort(firstSort);
  });
};
