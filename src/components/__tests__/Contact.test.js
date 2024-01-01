import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";

describe("group similar test together", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("beforeEach");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After each");
  // });
  it("test contact header", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading"); // use another keyword to find instead of heading// this quering
    expect(heading).toBeInTheDocument();
  });
  it("test text", () => {
    render(<Contact />);
    const submit = screen.getByText("Submit"); // check all get suggestion
    expect(submit).toBeInTheDocument();
  });
  it("test multiple", () => {
    render(<Contact />);
    const textbox = screen.getAllByRole("textbox"); // check all get suggestion
    //   console.log(textbox);
    //   console.log(textbox.length);
    expect(textbox.length).toBe(2); // try not to be; check for tobeTruthy
  });
});
// it is aliase for test so it  = test ; it used for readblity e.g it("should have 2 button")
