import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IndexPage from "./index";
import React, { useEffect } from "react";
import axios from "axios";

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

jest.mock("axios", () => jest.fn());

describe("test todo list page", () => {
  beforeEach(() => {
    axios.mockClear();
  });

  it("renders with get todos button", () => {
    render(<IndexPage />);
    screen.getByRole("button", { name: "Get todos" });
  });

  it("renders list of todos after click", async () => {
    axios.mockResolvedValueOnce({ data: todos });
    render(<IndexPage />);
    const button = screen.getByRole("button", { name: "Get todos" });
    userEvent.click(button);
    await waitFor(() => {
      const rows = screen.queryAllByRole("row");
      expect(rows.length).toBe(11);
    });
    expect(axios).toBeCalledTimes(1);
  });

  it("renders error message", async () => {
    axios.mockRejectedValueOnce({});
    render(<IndexPage />);
    const button = screen.getByRole("button", { name: "Get todos" });
    userEvent.click(button);
    await waitFor(() => {
      screen.getByTestId("error-message");
    });
    expect(axios).toBeCalledTimes(1);
  });
});
