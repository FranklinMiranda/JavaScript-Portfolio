// Title : Callbacks and Higher Order Functions
// Date : 1/10/2023
// Author : Franklin Miranda
// Description : Callbacks are functions passed into other functions. The function that accepts the callback is the Higher Order Function.

// Sort Method used with a numerical compare function
// The Sort Method is the Higher Order Function and the numSort Function is the Callback
const numArr = [1, 2, 5, 4, 7, 8];
function numSort(a, b) {
  return a - b;
}

console.log(numArr.sort(numSort));

// Array Iteration Methods utilize callbacks and higher order functions to iterate over arrays
// forEach Higher Order Method takes a callback and performs it on each element in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((element, index, array) => {
  array[index] = element + element;
});
console.log(arr);

// map Higher Order Method takes a callback and performs it on each element in the array and returns a new array
arr = arr.map((el) => {
  return el * 2;
});
console.log(arr);

// filter Method takes a callback are creates a new array with the elements that pass the callback
arr = arr.filter((el) => {
  return el > 10;
});
console.log(arr);

// reduce Method runs on an array and returns a single value
const result = arr.reduce((total, el) => {
  total += el;
  return total;
}, 0);
console.log(result);

// reduceRight Method runs on an array and returns a single value working from right to left
const resultRight = arr.reduceRight((total, el) => {
  total += el;
  return total;
}, 0);
console.log(resultRight);

// every Method checks if every element in the Array passes the callback and returns true or false
const test = arr.every((el) => {
  return el % 2 === 0;
});
console.log(test);

// some Method checks if some elements in the Array pass the callback and returns true or false
const someTest = arr.some((el) => {
  return el > 30;
});
console.log(someTest);

// indexOf Method searches an array for an element value and returns it position
console.log(arr.indexOf(36));

// lastIndexOf Method searches an array for the last occurrence of an element and returns its position
console.log(arr.lastIndexOf(36));

// find Method returns the value of the first element to pass the callback
console.log(
  arr.find((el) => {
    return el > 18;
  })
);

// findIndex Method returns the index of the first element in an array to pass the callback
console.log(
  arr.findIndex((el) => {
    return el > 18;
  })
);

// Array.from Method returns an array from any object with a length property or any iterable object
const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(alphabet);

// Array.keys Method returns an Array Iterator object from the keys of a array
const keys = alphabet.keys();
for (let key of keys) {
  //console.log(key)
}

// Array.entries Method creates a array iterator object that contains key value pairs
const entries = alphabet.entries();
for (let entry of entries) {
  //console.log(entry)
}

// Array.includes checks if a element is present in an array
console.log(alphabet.includes('A'));

const call = (el) => {
  return el * 2;
};

const higherOrder = (call, array) => {
  for (let value of array) {
    console.log(call(value));
  }
};

higherOrder(call, arr);
