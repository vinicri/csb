import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "./TodosTable";
import React from "react";
import TodosTable from "./TodosTable";

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
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
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  }
];

describe("test TodosTable component", () => {
  it("renders", () => {
    render(<TodosTable todos={todos} selected={[]} />);
  });

  it("renders 10 rows", () => {
    render(<TodosTable todos={todos} selected={[]} />);
    expect(screen.getAllByRole("row").length).toBe(11);
  });

  it("calls sort function with appropriate params", () => {
    const sort = jest.fn();
    render(<TodosTable todos={todos} selected={[]} updateSortBy={sort} />);
    userEvent.click(screen.getByRole("button", { name: "by-id-ascending" }));
    expect(sort).toBeCalledTimes(1);
    expect(sort).toHaveBeenCalledWith("idAsc");
  });

  it("calls sort title function with appropriate params", () => {
    const sort = jest.fn();
    render(<TodosTable todos={todos} selected={[]} updateSortBy={sort} />);
    userEvent.click(
      screen.getByRole("button", { name: "by-title-descending" })
    );
    expect(sort).toBeCalledTimes(1);
    expect(sort).toHaveBeenCalledWith("titleDesc");
  });
});
