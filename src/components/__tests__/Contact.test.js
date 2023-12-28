import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";

test("test contact header", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading"); // use another keyword to find instead of heading// this quering
  expect(heading).toBeInTheDocument();
});
test("test text", () => {
  render(<Contact />);
  const submit = screen.getByText("Submit"); // check all get suggestion
  expect(submit).toBeInTheDocument();
});
test("test multiple", () => {
  render(<Contact />);
  const textbox = screen.getAllByRole("textbox"); // check all get suggestion
  //   console.log(textbox);
  //   console.log(textbox.length);
  expect(textbox.length).toBe(2);
});
