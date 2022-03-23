// JavaScript Practice

// JavaScript Strings Practice
// JavaScript String Methods
// string.length property
const string = "Hello Worlds";
console.log(string.length);

// escape sequence
const string0 = 'Hello Worlds and "Welcome"';
console.log(string0);

// \n \t \v new line, hoizontal and vertical tabulator
const string1 = "Hello \nWorld";
console.log(string1);

const string2 = "Hello \tWorld";
console.log(string2);

const string3 = "Hello \vWorld";
console.log(string3);

// string .slice() .substring() . substr() Methods (.substring does not accept negative parameters) (.substr accepts start and length as parameters)
console.log(string.slice(1, 7));
console.log(string.substring(1, 5));
console.log(string.substr(1, 6));

// .replace() Method
console.log(string.replace("Worlds", "Universe"));

// .toUpperCase() .toLowerCase() Methods
console.log(string.toUpperCase());
console.log(string.toLowerCase());

// .concat() Method
console.log(string.concat(string1, string2, string3));

// .padStart() .padEnd() Methods (pad works for number strings)
const num = "9";
console.log(num.padStart(3, 0));
console.log(num.padEnd(6, 1));

// JavaScript String Search
// .indexOf() Method (accepts second parameter as start position)
console.log(string.indexOf("e"));

// .lastIndexOf() Method (accepts second parameter as start position)
console.log(string.lastIndexOf("W"));

// .search() Method (accepts no second parameter)
console.log(string.search("s"));

// .match() Method (/""/ g flag searches for all matches and /""/i searches case insensitive)
console.log(string.match(/l/g));

// .include() Method
console.log(string.includes("lo"));

// .startsWith() Method
console.log(string.startsWith("H"));

// .endsWith() Method
console.log(string.endsWith("ds"));

// JavaScript String Template Literals
console.log(`The number is ${num}!`);

// JavaScript Numbers Practice
// JavaScript Number Methods

// NaN not a legal number isNaN returns if a value is NaN (typeof NaN is number)
const num0 = NaN;
console.log(typeof num0);
console.log(isNaN(num0));

// .toString() Method
let num1 = 135792468;
console.log(num1.toString());

// .toExponential() Method (Returns in exponent form with the parameter as the number of decimal points displayed)
console.log(num1.toExponential());

// .toFixed() Method (Returns rounded number with the parameter as the number of decimal points to display)
num1 = 1.35792468;
console.log(num1.toFixed(1));

// .toPrecision() Method (Returns a rounded number with the parameter as the length of the number to be displayed)
console.log(num1.toPrecision(98));

// Number() Global Method
console.log(Number(num1));

// parseInt() Global Method
console.log(parseInt(num1));

//parseFloat() Global Method
console.log(parseFloat(num1));

// .MAX_VALUE
const num2 = Number.MAX_VALUE;
console.log(num2);

// .MIN_VALUE
const num3 = Number.MIN_VALUE;
console.log(num3);

// JavaScript Arrays Practice
const cars = ["audi", "bmw", "honda", "toyota", "kia", "subaru", "infiniti", "acura", "chrysler"];
console.log(cars);
console.log(cars[cars.length - 1]);
console.log(cars[0]);

// Array.isArray() Method
console.log(Array.isArray(cars));

// .toString() Method
console.log(cars.toString());

// .push() Method
cars.push("mercedes");
console.log(cars);

// .pop() Method
cars.pop();
console.log(cars);

// .shift() Method
cars.shift();
console.log(cars);

// .unshift() Method
cars.unshift("maybach");
console.log(cars);

// .concat() Method
const cars1 = ["tesla"];
console.log(cars.concat(cars1));

// .splice() Method (parameter 1 is the start position, parameter 2 is how many elements to remove, and the remaining parameters are elements to add)
const carS = cars.splice(1, 2, "insert");
console.log(cars);

// .slice() Method
console.log(cars.slice(1, 3));

// Array Sorting Methods
// .sort() Method
console.log(cars.sort());

// .reverse() Method
console.log(cars.reverse());

// .sort(compare function) Method for numerically acccurate sort
const num4 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(
  num4.sort(function (a, b) {
    return a - b;
  })
);

// Fisher Yates Random Sort Method
for (let i = num4.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let k = num4[i];
  num4[i] = num4[j];
  num4[j] = k;
}
console.log(num4);

// Math.max.apply
console.log(Math.max.apply(null, num4));

// Math.min.apply
console.log(Math.min.apply(null, num4));

// Array Iterators
// .forEach() Method (value, index, array)
const arr = [1, 2, 3, 4, 5];
const arr1 = [];

arr.forEach(add1);

function add1(value, index, array) {
  return arr1.push(value + 1);
}
console.log(arr1);

// .map() Method (value, index, array)
const arr2 = arr1.map(multi2);

function multi2(value, index, array) {
  return value * 2;
}
console.log(arr2);

// .filter() Method (value, index, array)
const arr3 = arr2.filter(moreThan6);

function moreThan6(value, index, array) {
  return value > 6;
}
console.log(arr3);

// .reduce() and .reduceRight() Method (total, value, index, array)
const sum = arr3.reduce(reduceS);

function reduceS(total, value, index, array) {
  return total + value;
}
console.log(sum);

// .every() Method (value, index, array)
const test = arr3.every(greaterThan5);

function greaterThan5(value, index, array) {
  return value > 5;
}
console.log(test);

// .some() Method (value, index, array)
const testS = arr3.some(greaterThan20);

function greaterThan20(value, index, array) {
  return value > 20;
}
console.log(testS);

// .indexOf() Method
console.log(arr3.indexOf(12));

// .lastIndexOf() Method
console.log(arr3.lastIndexOf(10));

// .find() Method (value, index, array)
const testV = arr2.find(tester);

function tester(value, index, array) {
  return value >= 10;
}
console.log(testV);

// .findIndex() Method (value, index, array)
const testA = arr2.findIndex(testerA);

function testerA(value, index, array) {
  return value > 11;
}
console.log(testA);

// Array.from
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const arrAlpha = Array.from(alphabet);

console.log(arrAlpha);

// .keys
const keys = arrAlpha.keys();

for (let x of keys) {
  console.log(x);
}

// Nested Array Practice
const nestedArr = [
  [1, 2, 3, 4, 5],
  [15, 17, 19, 21, 23, 1, 2, 3, 4, 5],
  [5, 8, 9, 8, 5, 17, 1],
];

const increaseArr = (array) => {
  for (let arr of array) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return array;
};
console.log(nestedArr[2][0]);
console.log(JSON.stringify(increaseArr(nestedArr)));
