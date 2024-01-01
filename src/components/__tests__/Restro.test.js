import { render } from "@testing-library/react";
import RestrauntCard from "../RestrauntCard";
import mock_data from "./mock_data.json";
it("should test props with mock data", () => {
  render(<RestrauntCard restraurant={mock_data} />); // check other that any element is exists are not
});
