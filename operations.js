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
