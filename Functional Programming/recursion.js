// Title : Recursion
// Date : 1/10/2023
// Author : Franklin Miranda
// Description : Recursion is when a function calls itself. It can be used to solve looping problems on closed bounded sets.

// Factorial function that calls itself to solve a factorial
function factorial(input) {
  let result = input;
  function recurse(input) {
    if (input === 0) {
      return result;
    }
    result *= input;
    return recurse((input -= 1));
  }
  recurse((input -= 1));
  return result;
}

console.log(factorial(4));

// POW recurse function takes a base and an exponent and returns a result
function pow(base, exponent) {
  function recurse(result = base) {
    if (exponent === 1) {
      return result;
    }
    exponent -= 1;
    return recurse((result *= base));
  }
  return recurse();
}

console.log(pow(2, 4));

// Flow function that runs a input through a array of functions recursively and returns the result
function flow(input, array) {
  function recurse(i = 0) {
    if (i === array.length) {
      return input;
    }
    input = array[i](input);
    return recurse((i += 1));
  }
  return recurse();
}

function multiplyBy2(num) {
  return num * 2;
}
function add7(num) {
  return num + 7;
}
function modulo4(num) {
  return num % 4;
}
function subtract10(num) {
  return num - 10;
}
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions));

// Shuffle Cards recursive function shuffles a deck of cards recursively
function shuffleCards(arr1, arr2) {
  const result = [];
  function recurse(i = 0) {
    if (!arr1[i]) {
      result.push(...arr2.slice(i));
      return result;
    } else if (!arr2[i]) {
      result.push(...arr1.slice(i));
      return result;
    }

    result.push(arr1[i], arr2[i]);
    return recurse((i += 1));
  }
  return recurse();
}

const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
