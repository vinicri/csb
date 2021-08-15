import { sortByCompleted, sortByTitle, sortById } from "./operations";

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  }
];

describe("operations tests", () => {
  it("should pass", () => {});

  it("should sort by completed ascending", () => {
    todos.sort(sortByCompleted());

    todos.forEach((todo, index) => {
      if (index < 2) {
        expect(todo.completed).toBeFalsy();
      } else {
        expect(todo.completed).toBeTruthy();
      }
    });
  });

  it("should sort by completed descending", () => {
    todos.sort(sortByCompleted(false));

    todos.forEach((todo, index) => {
      if (index < 2) {
        expect(todo.completed).toBeTruthy();
      } else {
        expect(todo.completed).toBeFalsy();
      }
    });
  });

  it("should sort by title ascending", () => {
    todos.sort(sortByTitle());

    const expectedIdOrder = [1, 4, 3, 2];
    console.log(todos);

    todos.forEach((todo, index) => {
      expect(todo.id).toBe(expectedIdOrder[index]);
    });
  });

  it("should sort by title descending", () => {
    todos.sort(sortByTitle(false));

    const expectedIdOrder = [2, 3, 4, 1];

    todos.forEach((todo, index) => {
      expect(todo.id).toBe(expectedIdOrder[index]);
    });
  });

  it("should sort by id ascending", () => {
    todos.sort(sortById());

    const expectedIdOrder = [1, 2, 3, 4];

    todos.forEach((todo, index) => {
      expect(todo.id).toBe(expectedIdOrder[index]);
    });
  });

  it("should sort by id descending", () => {
    todos.sort(sortById(false));

    const expectedIdOrder = [4, 3, 2, 1];

    todos.forEach((todo, index) => {
      expect(todo.id).toBe(expectedIdOrder[index]);
    });
  });
});
