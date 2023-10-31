const variableManipulation = require("./../excercise/exercise1");

test("swapping variables a and b", () => {
  let a = 5;
  let b = 10;

  let result = variableManipulation(a, b);

  expect(result[0]).toBe(10);
  expect(result[1]).toBe(5);
});
