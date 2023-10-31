const celsiusToFahrenheit = require("../excercise/exercise3");

test("converting Celsius to Fahrenheit", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
  expect(celsiusToFahrenheit(100)).toBe(212);
  expect(celsiusToFahrenheit(-40)).toBe(-40);
});
