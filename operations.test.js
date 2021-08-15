import {
  sortByCompleted,
  sortByTitle,
  sortById,
  deleteSelected,
  addTodo,
  setCompleted,
  editTodo
} from "./operations";

const data = [
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
  let todos = [];
  beforeEach(() => {
    todos = [...data];
  });

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

  it("should delete all todos and keep original array intact", () => {
    const result = deleteSelected(todos, [1, 2, 3, 4]);
    expect(result.length).toBe(0);
    expect(todos.length).toBe(4);
  });

  it("should add a new todo and keep original array intact", () => {
    const newTodo = {
      id: 5,
      title: "hello hello",
      completed: false
    };

    const results = addTodo(todos, newTodo);
    expect(todos.length).toBe(4);
    expect(results.length).toBe(5);
    expect(results.find((i) => i.id === 5)).toBe(newTodo);
  });

  it("should edit a todo and keep original array intact", () => {
    const editedTodo = {
      id: 4,
      title: "hello hello",
      completed: false
    };

    const results = editTodo(todos, editedTodo);
    expect(todos.length).toBe(4);
    expect(results.length).toBe(4);
    expect(results.find((i) => i.id === 4).title).toBe("hello hello");
    expect(todos.find((i) => i.id === 4).title).toBe("et porro tempora");
  });

  it("should set todo completed", () => {
    const result = setCompleted(todos, 2, true);
    todos.forEach((i, index) => {
      if (i.id !== 2) {
        expect(i).toEqual(result[index]);
      } else {
        expect(i.title).toBe(result[index].title);
        expect(i.completed).toBe(false);
        expect(result[index].completed).toBe(true);
      }
    });
  });
});
