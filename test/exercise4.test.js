const isEven = require("../excercise/exercise4");

test("checking if a number is even", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(7)).toBe(false);
  expect(isEven(0)).toBe(true);
});
