import { sum } from "../sum";

test("test sum", () => {
  // first arg is description of test
  const result = sum(3, 4);
  expect(result).toBe(5); // this is called assertion; test with different case
});
