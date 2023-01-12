// Title : PseudoCoding
// Date : 1/12/2023
// Author : Franklin Miranda
// Description : Pseudocode is an informal high-level description of a computer program or algorithm

// Function Pluralize - This takes a string and pluralizes the string

// Define Pluralize that takes a string as a parameter
function pluralize(string) {
  // Inside Pluralize concatenate the string with the string 's'
  string = string += 's';
  // Return the string parameter
  return string;
}

// Invoke Pluralize with a string argument
console.log(pluralize('apple'));

// Function Map - Map function replicated the array iteration method map and accepts a callback and a array

// Define map that takes a callback and array parameters
function map(call, arr) {
  // Define a result variable that will hold the modified array
  const result = [];
  // Set up a for loop that will loop over the array parameter
  for (let i = 0; i < arr.length; i++) {
    // Inside the loop the callback will be called with the current array element passed in as a argument
    // The returned result will be pushed into the result array
    result.push(call(arr[i]));
  }
  // Return the result variable
  return result;
}

// Declare a array of numbers
const num = [1, 2, 3, 4, 5];
// Invoke the map function with a inline function as a callback and the array of numbers, both passed in as parameters
console.log(
  map((input) => {
    return input * 2;
  }, num)
);

// Function Filter - That replicates the array iteration method filter

// Declare filter function that accepts a callback and a array as parameters
function filter (call, arr) {
  // Declare a result array 
    const result = []
      // Loop over the array parameter with a for loop
    for (let i = 0; i < arr.length; i++) {
    // Control Flow to perform a true false check on the return of the callback with the current array element passed in
         // If the control flow statement returns true the current element will be pushed into the result array
   if (call(arr[i]) === true) {result.push(arr[i])}
    }
      // result array will be returned 
    return result 
}

// Declare a test array 
const test = [13, 42, 1, 35, 67, 8, 92]
// Define the callback for the filter function
function tester (input) {
    if (input > 50) {return true}
    else {return false}
}
// Invoke the filter function with test and tester passed as arguments and console.log() the result
console.log(filter(tester, test))