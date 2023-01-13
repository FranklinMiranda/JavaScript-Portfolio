// Title : PseudoCoding 2
// Date : 1/13/2023
// Author : Franklin Miranda
// Description : Pseudocode is an informal high-level description of a computer program or algorithm

// Function Is Prime - A function that returns true false if a number is a prime number

// Define Function isPrime that accepts two parameters a prime and a divisor
function isPrime(num, divisor = 2) {
  if (num === 1) {
    return true;
  } else if (num === divisor) {
    return true;
  } else if (num % divisor === 0) {
    return false;
  }
  return isPrime(num, (divisor += 1));
}

console.log(isPrime(98));
