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

// Function once - accepts a callback and performs it once

// Define once function that accepts a callback parameter
function once(call) {
  // Declare a counter variable set to 0
  let counter = 0;
  // return a anonymous function that accepts a input parameter
  return function (input) {
    // If counter variable is not equal to 0 then return a string
    if (counter !== 0) {
      return 'This function has been invoked once!';
    }
    // Else return the callback with input passed in as an argument
    else {
      counter++;
      return call(input);
    }
  };
}

// Define a variable and set it equal to the invocation of once with a inline callback passed in as argument
const multiplyByFour = once((input) => {
  return input * 4;
});
// Invoke the variable and console.log the result
console.log(multiplyByFour(4));
// Invoke the variable to confirm that it only invokes once
console.log(multiplyByFour(4));

// Function after - uses closure to save a counter and only triggers the callback after a number of times

// Define function after that takes a threshold and callback parameter
function after(threshold, call) {
  // Define a counter variable
  let counter = 0;
  // Return a anonymous function that accepts a input parameter
  return function (input) {
    // if counter >= threshold then return the callback with the input passed in
    if (counter >= threshold) {
      return call(input);
    }
    // else return a string
    else {
      counter++;
      return 'The threshold of invocations has not been reached yet!';
    }
  };
}

// Define a variable that is assigned to the evaluated result of after with a threshold and inline call function
const exponent = after(5, (input) => {
  return input * input;
});
// Console.log the invocations of the variable until the callback with result is returned
console.log(exponent(3));

// Function saveOutput - A password protected function that saves the result of a callback and returns the result object when a password is provided

// Define saveOutput that accepts a callback and password parameter
function saveOutput(call, password) {
  // Declare a empty object that will save results
  const result = {};
  // return an anonymous function that accepts a input

  return function (input) {
    // If the input is equal to the password then the result object will be returned
    if (input === password) {
      return result;
    }
    // Else the returned result of the callback with input passed in will be saved on the result object with the input as the key and the return as the value
    else {
      result[input] = call(input);
      return 'Result saved';
    }
  };
}

// Declare a multiply variable and assign to the saveOutput function invoked
const multiply = saveOutput((input) => {
  return input * 2;
}, '12345');
// Invoke the multiply variable with a input
console.log(multiply(5));
// Invoke the multiply variable with the password
console.log(multiply('12345'));

// Function cycleIterator - cycles through an array and returns each element ad infinitum

// Define cycleIterator that accepts a array parameter
function cycleIterator(arr) {
  // Declare a counter variable set equal to 0
  let counter = 0;
  // Return a anonymous function
  return function () {
    // If counter === arr.length then set counter to 0
    if (counter === arr.length) {
      counter = 0;
    }
    // Increment counter by one
    counter++;
    // return array at index counter minus 1
    return arr[counter - 1];
  };
}

// Declare a array that contains the elements to cycle through
const threeDayWeekend = ['Friday', 'Saturday', 'Sunday'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay());


