import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IndexPage from "./index";
import React from "react";

jest.mock("axios");

describe("test todo list page", () => {
  it("renders with get todos button", () => {
    render(<IndexPage />);
    screen.getByRole("button", { name: "Get todos" });
  });

  it("renders with get todos button", () => {
    render(<IndexPage />);
    const button = screen.getByRole("button", { name: "Get todos" });
    userEvent.click(button);
  });
});
