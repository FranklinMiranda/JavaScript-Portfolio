// Title : PseudoCoding
// Date : 1/11/2023
// Author : Franklin Miranda
// Description : PseudoCoding is used to descriptively explain coding solutions without writing executable code

// Pseudocoding for Intersection Function that takes an array of arrays and returns an array of elements that are present in all the arrays
// Define Intersection Function that takes a parameter arrays
function intersection(arrays) {
  // Declare a result empty array that will hold the elements present across all the arrays
  const result = [];
  // Next pop one of the arrays of the arrays argument to compare against the other arrays
  const poppedArr = arrays.pop();
  // Next loop over the popped array
  poppedArr.forEach((el) => {
    // Inside that loop use a reduce function to count how many times each element occurs in the arrays in the array argument
    const total = arrays.reduce((total, element) => {
      if (element.includes(el)) {
        total++;
      }
      return total;
      // Return the total out of the reduce function
    }, 0);

    // If the total returned from reduce is equal to the arrays argument length, then push the current element into the results variable
    if (total === arrays.length) {
      result.push(el);
    }
  });

  // Return the result variable from the Intersection Function
  return result;
}

// Declare three arrays that contain numbers
const arr1 = [1, 3, 5, 7];
const arr2 = [4, 3, 9, 7];
const arr3 = [42, 3, 19, 7, 8];
// Function Intersection Invocation
console.log(intersection([arr1, arr2, arr3]));

// Pseudocode for a Constructed forEach Function
// First declare the function forEach that accepts a call and arr
function forEach(call, arr) {
  // Inside the function body loop over the arr
  for (let i = 0; i < arr.length; i++) {
    // Inside the loop perform the call on each element in the arr
    console.log(call(arr[i]));
  }
}

// Declare a call function to pass into the forEach
function call(num) {
  return num * 2;
}
// Declare an arr to pass into the forEach
const arr = [2, 3, 4, 5];

forEach(call, arr);

// Pseudocode for Once Function using closure
// Declare my once function
function once() {
  // Inside once declare a count variable
  let count = 0;
  // Declare the anonymous function returned from once, that accepts an input
  return function (input) {
    // An if statement checks if count is equal to one, then return a string
    if (count === 1) {
      return 'This function has been invoked once!';
    }
    // Otherwise Increment Count by 1
    count++;
    // Return Input * 2
    return input * 2;
  };
}

// Declare a variable and assign it to the invocation of once
const operation = once();
// Invoke the variable with the assigned returned function and input parameter passed
console.log(operation(3));
console.log(operation(3));

// Pseudocode for Once Function with inline call passed in
// Declare function once with a call parameter passed in
function onces(call) {
  // Declare a counter variable and set it equal to 0
  let counter = 0;
  // return a anonymous function that accepts a input parameter
  return function (input) {
    // The anonymous function has a if statement that checks if counter is equal to one and returns a string
    if (counter === 1) {
      return 'This function has been invoked once!';
    }
    // Then increment counter by one
    counter++;
    // then return call with input passed in as a parameter
    return call(input);
  };
}

// Declare a variable assigned to the invocation of once with a inline function passed in as the parameter
const multiplyByTwo = onces((input) => {
  return input * 2;
});
// Invoke the variable with a input parameter passed in
console.log(multiplyByTwo(2));
console.log(multiplyByTwo(2));

// Pseudocoding for Symmetric Differences Function
// Declare symmetric function that accepts two arrays as parameters
function symmetric(arr1, arr2) {
  // Declare a results array
  const result = [];
  // Loop over the first argument array
  arr1.forEach((el) => {
    // In the loop use includes method to check if each element being looped over is present in the second array
    // Push any element not present in the second array into the results array
    if (!arr2.includes(el)) {
      result.push(el);
    }
  });

  // In the loop use includes method to check if each element being looped over is present in the first array
  // Push any element not present in the first array into the results array
  arr2.forEach((el) => {
    if (!arr1.includes(el)) {
      result.push(el);
    }
  });

  // Return results array
  return result;
}

// Declare two arrays to pass into the symmetric differences function
const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 6, 7, 8, 9];

// Invoke function symmetric and console.log() the return value
console.log(symmetric(array1, array2));
