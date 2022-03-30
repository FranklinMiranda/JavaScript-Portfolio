// Arrays Iteration
console.log(new Date())

// JavaScript Array Iteration operates over every array item
// array.forEach Method calls a callback function on each element in an array

const cars = ["audi", "bmw", "mercedes"];
const carsUpper = [];

cars.forEach(capitalize);

function capitalize(value, i, array) {
  carsUpper.push(value.toUpperCase());
}

console.log(carsUpper);

cars.forEach(replace);

function replace(value, i, array) {
  carsUpper[i] = value;
}
console.log(carsUpper);

// array.map Method creates a new array by performing a function on each array element
console.log(cars);

const cars2 = cars.map(add2);

function add2(value, i, array) {
  return value + 2;
}
console.log(cars2);

// array.filter Method creates a new arry with the array elements that pass a test
console.log(cars);

const cars3 = cars.filter(filterC);

function filterC(value, i, array) {
  return value.startsWith("a");
}
console.log(cars3);

// array.reduce Method runs a function on an array to produce a single value accepts (total, value, index, array) parameters (.reduce can accept an inital value)
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = num.reduce(reducer);

function reducer(total, value, index, array) {
  return total + value;
}
console.log(sum);

// array.reduceRight Method is same as reduce but works right to left
let sumR = num.reduceRight(reducerRight);

function reducerRight(total, value, index, array) {
  return total + value;
}
console.log(sumR);

// array.every Method checks if all array elements pass the test, returns true false
const state = num.every(testFunc);

function testFunc(value, index, array) {
  return value > 100;
}

console.log(state);

// array.some Method checks if some of array elements pass the test, returns a true false
const stateS = num.some(testSome);

function testSome(value, index, array) {
  return value >= 8;
}
console.log(stateS);

// array.indexOf returns the index position of the first occurrence of the specified value
console.log(num.indexOf(8));

// array.lastIndexOf returns the index position of the last occurrence of the specified value
console.log(num.indexOf(9));

// array.find Method searches for the first value that passes the specified test
const value = num.find(finder);

function finder(value, index, array) {
  return value > 3;
}
console.log(value);

// array.findIndex Method finds the index of the first element to pass the test function
console.log(cars);

const indexC = cars.findIndex(testFun);

function testFun(value, index, array) {
  return value === "mercedes";
}
console.log(indexC);

// Array.from returns an array object from any object with a length property
const lengthP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const len = Array.from(lengthP);
console.log(len);

// array.keys returns an Iterator Object with the keys of an array
const cars5 = ["honda", "toyota", "subaru", "kia"];
const keys = cars5.keys();

for (let x of keys) {
  console.log(x);
}

// Iterating Over Nested Arrays
const nestedArr = [
  [1, 2, 3, 4, 5],
  [15, 17, 19, 21, 23, 1, 2, 3, 4, 5],
  [5, 8, 9, 8, 5, 17, 1],
];

// .pop() arrays off and iterate
function dupNum(array) {
  let arr0 = array.pop();
  let newArr = [];

  while (array.length) {
    let arr1 = array.pop();

    arr0.forEach((value, index, array) => {
      if (arr1.includes(value) && !newArr.includes(value)) newArr.push(value);
    });
    arr0 = newArr;
  }
  return newArr;
}

console.log(dupNum(nestedArr));


// Object. 
// Oject.keys() Object.values(), Object.entries()

const array1 = [1, 3, 5, 9, 12]

const optimize = (value, index, array) => value > 8;
console.log(array1.findIndex(optimize))