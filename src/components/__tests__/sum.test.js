import { sum } from "../sum";

test("check sum", () => {
  const result = sum(3, 4);
  expect(result).toBe(4);
});
