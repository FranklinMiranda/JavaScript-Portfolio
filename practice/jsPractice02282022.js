// JavaScript Refresher Practice
console.log(new Date())
// JavaScript, HTML, CSS are front end webpage languages
// HTML is the structure, CSS is the styling, and JavaScript is the logic and instructions

// When JavaScript code is executed the Global Execution Context is started, along with the Thread of Execution and the Global Memory
// The Thread of Execution runs through the code l;ine by line and the Global Memory stores variables

// JavaScript statements are composeed of variables, operators, expressions, keywords, and statements

// JavaScript variables are declared with var, let, and const
var x = 1;
let y = 2;
const z = 3;

// Var variable can be declared without a value being initialized, Var variable can also be redeclared
var item;
item = 4;
console.log(item);

// Var variable being hoisted to top so it can be used before being declared
item1 = 5;
var item1;
console.log(item1);

// Let variables has block scope, Let variables can not be redeclared in the same block, Let variables can be redeclared in a different code block, Let variables can be reassigned
let item2;
item2 = 6;
console.log(item2);

item2 = 7;
console.log(item2);

// Const variable has block scope, Const variable can not be redeclared in the same block, Const variable can not be reassigned, Const variable must be assigned value when declared
// You can change elements of Const Array and properties of Const object but you can not reassign them different values
const item3 = 8;
console.log(item3);

//item3 = 9;
console.log(item3);

// Redeclaring a Var, Let, or Const variable with another keyword is not allowed

// JavaScript Operators
// The assignment operator "=" assigns values to variables
// The Arithmetic Operators perform arithmetic on numbers
let num1 = 10,
  num2 = 20;

// Addition operator +
let add1 = num1 + num2;
console.log(add1);

// Subtraction Operator -
let subtract1 = num2 - num1;
console.log(subtract1);

// Multiplication Operator *
let multiply1 = num1 * num2;
console.log(multiply1);

// Division Operator /
let division1 = num2 / num1;
console.log(division1);

// Exponent Operator **
let exponent1 = num1 ** num2;
console.log(exponent1);

// Modulus (Remainder) Operator %
let remainder1 = num2 % num1;
console.log(remainder1);

// Incremetor Operator ++
num1++;
console.log(num1);

// Decrement Operator --
num2--;
console.log(num2);

// JavaScript Assignment Operators
//  Assignment Operator
let num3 = num1;
console.log(num3);

// Addition Assignment Operator
num1 += num2; // num1 = num1 + num2
console.log(num1);

// Subtraction Assignment Operator
num1 -= num2; // num1 = num1 - num2
console.log(num1);

// Multiplication Assignment Operator
num1 *= num2; // num1 = num1 * num2
console.log(num1);

// Division Assigment Operator
num1 /= num2; // num1 = num1 / num2
console.log(num1);

// Exponent Assignment Operator
num1 **= num2; // num1 = num1 ** num2
console.log(num1);

// Modulus (Remainder) Assignment Operator
num1 %= num2; // num1 = num1  % num2
console.log(num1);

// String Operator + is used to concatenate strings
let string0 = "App";
let string1 = "le";
console.log(string0 + string1);

// String Operator += also concatenates strings
string0 += "le";
console.log(string1);

// String operators when used with a string and a number can cause type conversion outputing a string
console.log(string0 + num1);

// JavaScript Comparision Operators
// Less Than Operator <
const test0 = 25;
const test1 = 35;
console.log(test0 < test1);

// Less Than or Equal to Operator <=
console.log(test0 <= test1);

// Greater Than Operator >
console.log(test0 > test1);

// Greater Than or Equal to Operator >=
console.log(test0 >= test1);

// Loosely Equal (equal to in value) ==
console.log(test0 == test1);

// Not Loosely Equal (not equal to in value) !=
console.log(test0 != test1);

// Strictly Equal (equal to in value and type) ===
console.log(test0 === test1);

// Not Strictly Equal (not equal to in value and type) !==
console.log(test0 !== test1);

// Ternary Operator (assigns value to a variable based on a condition)
//let age = 20;
//let voteable = (age < 18) ? "Too young" : "Old enough";

// JavaScript Logical Operators
// Logical And Operator &&
{
  let x = 10,
    y = 20,
    z = 30;
  let a = y >= x && y <= z;
  console.log(a);
}

// Logical Or Operator ||
{
  let x = 10,
    y = 20,
    z = 30;
  let a = y <= x || y >= z;
  console.log(a);
}

// Logical Not Operator
{
  let x = 10,
    y = 20,
    z = 30;
  console.log(x !== y);
}

// JavaScript Type Operators
// Typeof Operator
{
  let x = 10;
  console.log(typeof x);
}

// Instanceof Operator

// JavaScript Data Types (JS has dynamic data types meaning the same variable can hold different data types)
// String Data (can use single, double, or backtick) '' "" ``
// Empty value has typeof as String
const string2 = "Hello";
console.log(string2);

const string3 = "";
console.log(typeof string3);
console.log(string3);

// Number Data (Integers or Floats)
const num10 = 10;
console.log(num10);

// Boolean Data (can be true or false)
const boolean0 = true;
console.log(boolean0);

// Null Data
const null0 = null;
console.log(null0);

// Undefined Data
let undefined0;
console.log(undefined0);

// Object Data (Names indexes containing key : value pairs)
const object1 = { name: "Franklin" };
console.log(object1);

// Array Data (Numbered indexes starting at 0)
const array1 = [1, 2, 3, 4, 5, 6];
console.log(array1);

// Function is a reusable block of code executed when invoked, it accepts parameters of values and other functions
// Return value is returned back to the function caller
function addition() {
  return 1 + 1;
}
console.log(addition());

// ES6 arrow notation for functions
const subtract = () => {
  return 10 - 5;
};
console.log(subtract());

// () Operator invokes function
console.log(subtract);
console.log(subtract());

// JavaScript Loops
// Switch Statement
// Create a switch statement that changes the text variable based on the input case
let textTester;
let xc = 3;

switch (xc) {
  case 1:
    textTester = "Hello World!";
    break;
  case 2:
  case 3:
    textTester = "Bye World!";
    break;
  default:
    textTester = "HelloByeWorld!";
}
console.log(textTester);

// For Loop
// Create a For Loop that loops through and array and console logs the values
let array2 = [9, 8, 7, 6, 5];
for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}

// For In Loop
// Create a For In Loop and loop through the properties of an object console logging them
const object2 = { firstName: "Franklin", lastName: "Miranda" };
for (let key in object2) {
  console.log(key);
  console.log(object2[key]);
}

// For Of Loop
// Create a For Of Loop for values in an array and console log all elements
for (let x of array2) {
  console.log(x);
}

// While Loop
// Create a While Loop that continues to add values to an array while array length is less than array[0]
while (array2.length < array2[0]) {
  array2.push(1);
}
console.log(array2);

// Do While Loop
// Create a Do While Loop that adds values to the array as long as array length is less than array2[0] * 2
do {
  array2.push(2);
} while (array2.length < array2[0] * 2);

console.log(array2);

// HTML Events
// onchange : an HTML element has been changed
// onclick : a user clicked an HTML element
// onmouseover : a user moused over an HTML element
// onmouseout : a user moved a mouse away from an HTML element
// onkeydown : a user pushed a keyboard key
// onload : the browser finished loading the page

// String Methods Practice
let newString = "Hello World and Welcome to World!";
console.log(newString.length);

let newSlice = newString.slice(1, 5);
console.log(newSlice);

newSlice = newString.slice(-9, -7);
console.log(newSlice);

newSlice = newString.substring(6, 11);
console.log(newSlice);

newSlice = newString.substr(6, 5);
console.log(newSlice);

newSlice = newString.replace(/world/gi, "Universe");
console.log(newSlice);

newSlice = newString.toUpperCase();
console.log(newSlice);

newSlice = newString.toLowerCase();
console.log(newSlice);

newConSlice = newString.concat(newSlice);
console.log(newConSlice);

let number = "1";
let padWord = number.padStart(5, 0);
console.log(padWord);

padWord = number.padEnd(5, 0);
console.log(padWord);
console.log(typeof padWord);

console.log(newSlice);
// .indexOf
console.log(newSlice.indexOf("w"));
// .lastIndexOf
console.log(newSlice.lastIndexOf("d"));
// .search (can not take a second parameter) (can take a regular expression)
console.log(newSlice.search("l"));
// .match (accepts a /""/g global match flag)
console.log(newSlice.match(/l/g));
// .include
console.log(newSlice.includes("wel"));
// .startsWith
console.log(newSlice.startsWith("h"));
// .endsWith
console.log(newSlice.endsWith("ld!"));

// JavaScript Numbers Methods
// number.toString returns the number inputed as an output string
let num4 = "94";
console.log(num4.toString());

// number.toExponential returns a number with the number rounded in exponent notation with the parameter specifing the visible decimals
num4 = 94000;
console.log(num4.toExponential(2));

// number.toFixed returns a number rounded to the specified number of decimals in the parameter
num4 = 103999.12351;
console.log(num4.toFixed(3));

// number.toPrecision returns a number with the specified length based on the parameter
num4 = 123456.789;
console.log(num4.toPrecision(2));

// number.ValueOf returns a number for a number used when a number ios a object
console.log(num4);

// Number() Method
console.log(Number(num4));

// parseInt() Method
console.log(parseInt(num4));

// parseFloat() Method
console.log(parseFloat(num4));

// MAX_VALUE is the maximum value a number can be in JavaScript
const maxNum = Number.MAX_VALUE;
console.log(maxNum);

// MIN_VALUE is the minimum value a number can be in JavaScript
const minNum = Number.MIN_VALUE;
console.log(minNum);

// JavaScript Arrays
// Array Methods
// array.length
const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(arr.length);

//array.toString
console.log(arr.toString());

// array.push
arr.push(20);
console.log(arr);

// array.pop
arr.pop;
console.log(arr);

// array.shift
arr.shift();
console.log(arr);

// array.unshift
arr.unshift(1);
console.log(arr);

// array.concat
const arr1 = [1, 2, 123, 1234, 12345];
console.log(arr.concat(arr1));

// array.splice
const arr2 = arr.splice(1, 2, 7, 8);
console.log(arr);

// array.slice
const arrSlice = arr.slice(1, 3);
console.log(arrSlice);

// array.sort (.sort will sort numbers as strings, need to use a compare function to get accurate results)
console.log(arr.sort());

//array.reverse
console.log(arr.reverse());

// array.sort(compare function) Numerical Sort
console.log(
  arr.sort(function (a, b) {
    return a - b;
  })
);

// Fisher Yates Shuffle Method
for (let i = arr.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let k = arr[i];
  arr[i] = arr[j];
  arr[j] = k;
}
console.log(arr);

// Math.max.apply (1st parameter is null 2nd parameter is array)
console.log(Math.max.apply(null, arr));

// Math.min.apply (1st parameter is null 2nd parameter is array)
console.log(Math.min.apply(null, arr));
