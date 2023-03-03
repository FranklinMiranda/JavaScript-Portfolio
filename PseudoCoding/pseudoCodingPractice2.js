// Title : PseudoCoding 2
// Date : 1/13/2023
// Author : Franklin Miranda
// Description : Pseudocode is an informal high-level description of a computer program or algorithm

// Function Is Prime - A function that returns true false if a number is a prime number

// Define Function isPrime that accepts two parameters a prime and i
function isPrime(num, i = 2) {
  
  if (num <= 1) {return false}
 else if (num === i) {return true}
 else if (num % i === 0) {return false} 
 
 return isPrime(num, i += 1)
}
console.log(isPrime(4));

// Function Flatten Recursively - This function takes an array and flattens it recursively
function flattenRecursively(arr) {
  const result = [];

  function recurse(i, arr, result) {
    if (i >= arr.length) return;

    if (Array.isArray(arr[i])) {
      recurse(0, arr[i], result);
    } else {
      result.push(arr[i]);
    }

    recurse(i + 1, arr, result);
  }
  recurse(0, arr, result);
  return result;
}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
