export const sortByCompleted = (asc = true) => (a, b) => {
  return (asc ? 1 : -1) * (a.completed - b.completed);
};

export const sortById = (asc = true) => (a, b) => {
  return (asc ? 1 : -1) * (a.id - b.id);
};

export const sortByTitle = (asc = true) => (a, b) => {
  return asc ? a.title > b.title : a.title < b.title;
};
