const findSmallest = require("../excercise/exercise5");

test("finding the smallest number", () => {
  expect(findSmallest([4, 2, 7, 1, 9])).toBe(1);
  expect(findSmallest([10, 20, 5, 3, 30])).toBe(3);
  expect(findSmallest([100, 200, 300, 400])).toBe(100);
});
