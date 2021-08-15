import { render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";
import React from "react";

const todo = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false
};

describe("test TodoItem component", () => {
  it("renders", () => {
    render(<TodoItem todo={todo} />);
    expect(screen.getByText(todo.title)).toBeDefined();
  });
});
