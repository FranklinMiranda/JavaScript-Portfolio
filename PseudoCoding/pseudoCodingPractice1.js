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
    if (call(arr[i]) === true) {
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

// Function Counter - A function that counts invocations of the function

// Define counter that accepts no parameters
function counter() {
  // Define a counter variable set equal to zero
  let counter = 0;
  // Return a anonymous function that accepts no parameters
  return function () {
    // Increments Counter by 1
    counter++;
    // Returns Counter variable
    return counter;
  };
}

// Define variable counter 1 and set it equal to the invocation of the counter function
const counter1 = counter();
// Define variable counter 2 and set it equal to the invocation of the counter function
const counter2 = counter();

// Invoke counter 1 three times
console.log(counter1());
console.log(counter1());
console.log(counter1());

// Invoke counter 2 one time
console.log(counter2());


// Function addByX - a function that returns a function that adds a input by x
// addByX stores the input variable in the outer function and then access it using closure in the inner function

// Define addByX that accepts one input parameter
function addByX(input) {
  // return an anonymous function that accepts a x parameter
  return function (x) {
    // return input + x
    return input + x;
  };
}

// Define addBy function that is set equal to the evaluated result of addByX
const addByTwo = addByX(2);
// console.log() addBy function with a x parameter
console.log(addByTwo(3));

