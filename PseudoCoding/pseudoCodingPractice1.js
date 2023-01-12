// Title : PseudoCoding 1
// Date : 1/12/2023
// Author : Franklin Miranda
// Description : Pseudocode is an informal high-level description of a computer program or algorithm

// Function eitherCallback - Filters an array with two callbacks and only returns results that pass either callback

// Define eitherCallback that takes two calls as parameters
function eitherCallback(call1, call2) {
  // return a anonymous function
  return function (input) {
    // return the result of callback1 or callback 2

    return call1(input) || call2(input);
  };
}

// Define filterArray function that takes a array and a callback
function filterArray(arr, call) {
  // Define a result array that will hold the filtered result
  const result = [];
  // Loop over the array
  for (let i = 0; i < arr.length; i++) {
    // A if statement tests if true is returned from calling the callback on the current array element
    if (call(arr[i] === true)) {
      // If true the current element will be pushed into the result array
      result.push(arr[i]);
    }
  }
  // Return the result array
  return result;
}

const arrOfNum = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
const inSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNum, inSqRtOrOver100));
