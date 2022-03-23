// JavaScript Math
// Math object has no constructor and can be used before being created
// Math properties are accessed using Math.property
// JavaScript provides 8 constants than can be accessed as properties

// Euler's Number
console.log(Math.E);

// PI
console.log(Math.PI);

// Square Root of 2
console.log(Math.SQRT2);

// Square Root of 1/2
console.log(Math.SQRT1_2);

// Natural Logarithm of 2
console.log(Math.LN2);

// Natural Logarithm of 10
console.log(Math.LN10);

// Base 2 Logarithm of E
console.log(Math.LOG2E);

// Base 10 Logarithm of E
console.log(Math.LOG10E);

// Math Methods are written as Math.method(number)
const num = 11.23456789;
// Math.round() Method returns a number rounded to the nearest integer
console.log(Math.round(num));

// Math.ceil() Method returns a number rounded up to its nearest integer
console.log(Math.ceil(num));

// Math.floor() Method returns a number rounded down to its nearest integer
console.log(Math.floor(num));

// Math.trunc() Method returns the integer part of a number
console.log(Math.trunc(num));

// Math.sign() Method returns (1, 0, -1) if a number is positive, negative, or null
const num1 = 0;
console.log(Math.sign(num1));

// Math.pow() Method
console.log(Math.pow(10, 3));

// Math.sqrt() Method
console.log(Math.sqrt(64));

// Math.abs() Method
console.log(Math.abs(-10000));

// Math.sin() Method (Accepts radians as parameter) (Angle in radian = Angle in degrees * PI / 180)
console.log(Math.sin((30 * Math.PI) / 180));

// Math.cos() Method
console.log(Math.cos((45 * Math.PI) / 180));

// Math.min() Method
const x = Math.min(1, 12, 123, 1234, 12345);
console.log(x);

// Math.max() Method
const y = Math.max(1, 12, 123, 1234, 12345);
console.log(y);

// Math.random() Method
const z = Math.random();
console.log(z);

// Math.log() Method
console.log(Math.log(10));

// Math.log2() Method
console.log(Math.log2(4));

// Math.log10() Method
console.log(Math.log10(10));

// JavaScript Random
console.log(Math.floor(Math.random() * 10));

// Random Integer Function (includes min and max)
function rndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(rndInt(10, 12));
