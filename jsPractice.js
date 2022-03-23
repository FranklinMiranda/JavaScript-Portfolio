// JavaScript Refresher Practice
// Using var, let, and const declare 3 number variables num1, num2, and num3 and assign num1 = 10, num2 = 5, and num3 = 1
var num1 = 10;
let num2 = 5;
const num3 = 1;

// Using let declare 3 number variables, x = 1, y = 2, and z = 3
let x = 1, y = 2, z = 3;

console.log(x === y)

// Arithmetic Operators
console.log(x + x)

// Declare number variable a using let and set it equal to x + 12
let a = x + 12;
console.log(a)

console.log(num1 ** y)
console.log(a % y)

console.log((a ** y) >= num1)

console.log(a === num1)

// Declare string variable "greeting" using const and set it equal to "Hello World"
const greeting = "Hello World!";
console.log(greeting)

console.log(greeting + num1)

// Declare boolean variable "testValue" using const and set equal to true
const testValue = true;
console.log(testValue)

// Declare boolean variable "testCom" using const and set equal to (num1 >= num2)
const testCom = num1 >= num2;
console.log(testCom)

// Declare null variable "null1" using const and set equal to null
const null1 = null;
console.log(null1)

// Using let declare a "undefined1" variable
let undefined1;
console.log(undefined1)

// Using const, declare a object "object1" and set it equal to name: "Franklin Miranda"
const object1 = { name: "Franklin Miranda" };
console.log(object1)

// Using const declare a Array "array1" and set equal to [1, 12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789]
const array1 = [1, 12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789];
console.log(array1)
console.log(array1[0])
console.log(array1[0] === x)

// Declare a function "arrayMultiply", that loops through an array and multiplies each value by 2
// Uses a for loop
function arrayMultiply(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
    }
    return array
}

console.log(arrayMultiply(array1))

// Create a function "arrayAdd", that loops through an array and adds 2 to each value
// Use a For Of Loop
function arrayAdd(array) {
    let newArray = [];
    for (let x of array) {
        newArray.push(x + 2);
    }
    return newArray
}

console.log(arrayAdd(array1))

// Create a function "arraySubtract", that loops through an array and subtracts 1 from each value
// Use a For In Loop
function arraySubtract(array) {
    for (let x in array) {
        array[x] = array[x] - 1;
    }
    return array
}
console.log(arraySubtract(array1))

// Create a function "arrayWhile", that adds elements to the array while the length is less than index 1 of array1
function arrayWhile(array) {
    while (array.length < array[1]) {
        array.push(1);
    }
    return array
}
console.log(arrayWhile(array1))

// Create the same function as before but use a do while loop
function arrayDoWhile(array) {
    do {
        array.push(array[0])
    }
    while (array.length < array[1]);
    return array
}
console.log(arrayDoWhile(array1))

// Continue (break out of Loop)
// Create a function that multiplies all even indexed elements in the input array by 2 
function multiplyIfEvenIndex(array) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 1) { continue; }
        array[i] = array[i] * 2;
    }
    return array
}
console.log(multiplyIfEvenIndex(array1))

// Break (break out of Loop)
// Create a function "divisibleByTen" that adds 1 and breaks out of a loop if the element is divisible by 10 with a remainder of 1
function divisibleByTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 10 === 1) { console.log(array[i]) };
        if (array[i] % 10 === 1) { break; }
        array[i] = array[i] + 12;
    }
    return array
}
console.log(divisibleByTen(array1))

// Switch Statement (selects which block of code to execute based on input)
let textTest;
let ab = 12;
switch (ab) {
    case 1:
        text = "Hello"
        break;
    case 2:
        text = "Bye"
        break;
    default:
        text = "HelloBye"
}

console.log(text)