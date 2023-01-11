// Title : PseudoCoding
// Date : 1/11/2023
// Author : Franklin Miranda
// Description : PseudoCoding is used to descriptively explain coding solutions without writing executable code

// Pseudocoding for Intersection Function that takes an array of arrays and returns an array of elements that are present in all the arrays
// Intersection that takes a parameter array
function intersection(arrays) {
  // First declare a results array that will hold the elements present across all the arrays
  const result = [];
  // Next pop one of the arrays of the arrays argument to compare against the other arrays
  const poppedArr = arrays.pop();
  // Next loop over the popped array
  poppedArr.forEach((el) => {
    // Inside that loop I want to use a reduce function to count how many times each element occurs in the arrays in the array argument
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
  // Declare the anonymous function returned from once, that accepts a input
  return function (input) {
    // An if statement checks if counter is equal to zero, then returns a string
    if (count === 1) {
      return 'This function has been invoked once!';
    }
    // Otherwise Increment Counter by 1
    count++;
    // Return Input * 2
    return input * 2;
  };
}

// Declare a variable and assign it to the invocation of once
const operation = once();
// Invoke the variable with the assigned result
console.log(operation(3));
