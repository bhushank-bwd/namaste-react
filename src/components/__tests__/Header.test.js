import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("should have login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button"); // getByText("Login"); -> not good way
  const loginBtnExist = screen.getByRole("button", { name: "Login" }); //  to find among list button
  expect(loginBtnExist).toBeInTheDocument();
});
it("should have login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const cart = screen.getByText("Cart");
  const cart = screen.getByText(/Cart/); // check by regex pattern
  expect(cart).toBeInTheDocument();
});
it("should change login button to logut after click", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByText("Login");
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByText("Logout");

  expect(logoutBtn).toBeInTheDocument();
});
