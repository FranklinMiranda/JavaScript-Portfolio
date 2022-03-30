// Callbacks and Higher Order Functions
console.log(new Date());

function eitherCallback(callback1, callback2) {
  // ADD CODE HERE Ask question on slack
  return (value, index, array) => {
    return callback1(value, index, array) || callback2(value, index, array);
  };
}

// Uncomment these to check your work!
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

// Create your own reduce function that accepts an array a callback and an initial value and returns a single value
function reduce(array, callback, total) {
  if (Array.isArray(array)) {
    if (total === undefined) {
      total = 0;
    }
    for (let i = 0; i < array.length; i++) {
      total = callback(total, array[i]);
    }
    return total;
  }
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); // should log 8

// Intersection - construct a function that compares input arrays and returns a new array with elements found in all of the inputs

function intersection(arrays) {
  let testArray = arrays.pop();

  arrays.forEach(test);
  function test(array, index, arrays) {
    const testArray1 = [];
    array.forEach(test1);
    function test1(value, index, array) {
      if (testArray.includes(value)) {
        testArray1.push(value);
      }
    }
    testArray = testArray1;
  }
  return testArray;
}

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
