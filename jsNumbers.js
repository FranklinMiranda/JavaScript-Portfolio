// JavaScript Numbers are always 64-bit Floating Point numbers
// Floating point arithmetic is not always accurate, may have to multiply then divide by 10

let x = "y";
console.log(isNaN(x))

// JavaScript numbers are primitive data types created from literals

// number.toString() returns the number as a string 
let number = 123456789;
console.log(number.toString())
console.log(typeof(number))

// number.toExponential() returns the number as a string with the number rounded and written using exponent notation
let num1 = 12345.6789;
console.log(num1.toExponential(6))

// number.toFixed returns the number as a string with the specified number of decimals
let num2 = 123456.1234;
console.log(num2.toFixed(2))

// number.toPrecision() returns the number as a string of a specified length
console.log(num2.toPrecision(2))

// number.valueOf() returns the number as a number (used to convert number objects to primitives)
console.log(num2.valueOf())

// Number() Method converts variables to numbers
console.log(Number("6"))

// parseInt() Method converts variables to integer
console.log(parseInt("5.55"))

// parseFloat() Method converts variable to floating point number
console.log(parseFloat("5.55"))

// MAX_VALUE is largest possible number in JavaScript
let y = Number.MAX_VALUE;
console.log(y)

// MIN_VALUE is smallest possible number in JavaScript
let z = Number.MIN_VALUE;
console.log(z)
