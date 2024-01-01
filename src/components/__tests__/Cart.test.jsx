import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { Restaurent } from "../Restaurent";
import mock_data from "./mock_details.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
// Integration testing

// create mock fetch function to use fetch function as it is browser provides

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock_data);
    },
  });
});
it("should add in cart", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Restaurent />
        </BrowserRouter>
      </Provider>
    );
  });
  //   add testid attribute to eleemnt which we want to find by getBytestId
  const searchButton = screen.getByRole("button", { name: "Add To Cart" });
  fireEvent.click(searchButton);
  const cart = screen.getByText("Cart 1 items"); // check by regex pattern
  expect(cart).toBeInTheDocument();
});
