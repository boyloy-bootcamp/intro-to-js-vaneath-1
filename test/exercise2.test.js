const calculateRectangleArea = require("../excercise/exercise2");

test("calculating area of a rectangle", () => {
  expect(calculateRectangleArea(5, 3)).toBe(15);
  expect(calculateRectangleArea(8, 2)).toBe(16);
  expect(calculateRectangleArea(0, 10)).toBe(0);
});
