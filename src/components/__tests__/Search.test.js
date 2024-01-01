import { fireEvent, render, screen } from "@testing-library/react";
import BodyDiv from "../Body";
import mock_data from "./mock_restro_list.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/store";
// Integration testing

// create mock fetch function to use fetch function as it is browser provides

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock_data);
    },
  });
});

it("should have n component after search function click", async () => {
  //   render(<Body />); // fail bcoz fetch is not defined; it is browserlike env not actual broswer and fetch provided by browser
  // render(<Body />); // it will give warning bcoz fetch is used with state; wrap with act(async & await)
  //   await act(async () => {
  //     render(<Body />); // this will fail because of Link
  //   });
  await act(async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BodyDiv />
        </BrowserRouter>
      </Provider>
    );
  });
  //   add testid attribute to eleemnt which we want to find by getBytestId
  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "Gokul" } });
  fireEvent.click(searchButton);
  const rCardItem = screen.getAllByTestId("rCarditem");
  expect(rCardItem.length).toBe(1); // check rCardItembe foreClick and After click and add proper description
});
// added test-watch command like nodeman to track changes
