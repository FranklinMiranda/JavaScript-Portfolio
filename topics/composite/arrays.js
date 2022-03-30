// Arrays
console.log(new Date())

// JavaScript Arrays Refresher Practice
// An array is a composite data type in JavaScript composed of a list of elements with a numbered index
// Arrays are directly iterable and can contain other primitive data or other arrays and objects as well as functions

const cars = ["audi", "bmw", "honda", "acura", "toyota", "mitsubishi"];
console.log(cars);

// Changing an element in an Array
// change index position 1 of array cars to ferrari
cars[1] = "ferrari";
console.log(cars);

console.log(typeof cars);

// Accessing first element of array
console.log(cars[0]);

// Accessing last element of array
console.log(cars[cars.length - 1]);

// Array.isArray() is method to identify an array
console.log(Array.isArray(cars));

// array.toString converts the array into a string
console.log(cars.toString());

// array.push adds the specified value to the end of the array
cars.push("mercedes");
console.log(cars);

// array.pop removes the last element from an array
cars.pop();
console.log(cars);

// array.shift removes the first element from an array and shifts all index positions down by 1
cars.shift();
console.log(cars);

// array.unshift adds the specified element to the start of the array and shifts all index positions up by 1
cars.unshift("audi");
console.log(cars);

// array.concat concatenates the specified arrays into a new array
const cars1 = ["mazda", "tesla", "gm", "infiniti", "chrysler", "dodge"];
console.log(cars.concat(cars1));

// array.splice can remove elements from an array at a index position and replace them with an unspecified list of elements
// parameter 1 is the starting index to splice, parameter 2 is how many index positions to remove, and the remaining parameters are the elements to add
cars.splice(1, 3, "aston martin");
console.log(cars);

// array.slice slices out part of ab array into a new array
// the first parameter is the index position to start at and the second parameter is the index position to end at
console.log(cars.slice(1, 2));

// array.include() checks an array to see if it includes the parameter
console.log(cars.includes("toyota"));

// JavaScript Array sorting
// array.sort() Method sorts arrays alphabetically
console.log(cars.sort());

// array.reverse() Method reverses sorting order of array
console.log(cars.reverse());

// Numerical Sort using sort function .sort(function (a,b) {return a - b})
let numLine = [9, 7, 5, 3, 1, 2, 4, 6, 8];
console.log(
  numLine.sort(function (a, b) {
    return a - b;
  })
);

// Fisher Yates Random sort Method
for (let i = numLine.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let k = numLine[i];
  numLine[i] = numLine[j];
  numLine[j] = k;
}

console.log(numLine);

// Math.max.apply can be used to find the highest value in an array
console.log(Math.max.apply(null, numLine));

// Math.min.apply can be used to find the lowest value in an array
console.log(Math.min.apply(null, numLine));

// Nested Arrays
const nestedArr = [
  [1, 2, 3, 4, 5],
  ["a", "b", "c", "d", "e"],
  [5, 8, 9, 8, 5],
];

// Accessing arrays and elements in a Nested Array
console.log(nestedArr[0][4]);
