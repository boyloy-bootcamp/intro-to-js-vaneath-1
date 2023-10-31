/**
 * Exercise 5: Find the Smallest Number
Problem Statement:

Write a function findSmallest that takes an array of numbers as input and returns the 
smallest number in the array.

example:
let numbers1 = [4, 2, 7, 1, 9];
let numbers2 = [10, 20, 5, 3, 30];

let smallest1 = findSmallest(numbers1);
let smallest2 = findSmallest(numbers2);

console.log(smallest1); // Output: 1
console.log(smallest2); // Output: 3

 */

function findSmallest(numbers) {
  let smallest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;

  // return Math.min(...numbers);
}

module.exports = findSmallest;
