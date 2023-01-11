// Title : PseudoCoding
// Date : 1/11/2023
// Author : Franklin Miranda
// Description : PseudoCoding is used to descriptively explain coding solutions without writing executable code

// Pseudocoding for Intersection Function that takes an array of arrays and returns an array of elements that are present in all the arrays
// Intersection that takes a parameter arrays
function intersection(arrays) {
  // First declare a results array that will hold the elements present across all the arrays
  const result = [];
  // Next pop one of the arrays of the arrays argument to compare against the other arrays
  const poppedArr = arrays.pop();
  // Next I want to loop over the popped array
  poppedArr.forEach((el) => {
    // Inside that loop I want to use a reduce function to count how many times each element occurs in  the arrays in the array argument
    const total = arrays.reduce((total, element) => {
      if (element.includes(el)) {
        total++;
      }
      return total;
      // I want to return the total out of the reduce function
    }, 0);

    // If the total returned from reduce is equal to the arrays argument length, then I want to push the current element into the results variable
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


