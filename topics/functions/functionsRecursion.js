// Recursion in Functions
console.log(new Date());

// No base case
// function recurse(){
//     recurse()
// }
// recurse()

// Base case
function recurseBase() {
  if (true === true) {
    return 0;
  } else {
    recurseBase();
  }
}
console.log(recurseBase());

(function recurseCounter() {
  let counter = 0;
  function recurse() {
    if (counter === 3) return 'done';
    counter++;
    return recurse();
  }
  console.log(recurse());
})();

(function repeaterExample() {
  function repeater(char) {
    if (char.length === 5) {
      return char;
    }
    char = char + char[0];
    return repeater(char);
  }
  console.log(repeater('g'));
  console.log(repeater('j'));
})();

(function factorialExample() {
  function factorial(num, product = 1) {
    if (num === 1) {
      return product;
    }
    product *= num;
    num--;
    return factorial(num, product);
  }

  console.log(factorial(10));
})();

(function getLengthExample() {
  function getLength(array, counter = 0) {
    if (array[0] === undefined) {
      return counter;
    }
    counter++;
    array.pop();
    return getLength(array, counter);
  }

  console.log(getLength([1])); // -> 1
  console.log(getLength([1, 2])); // -> 2
  console.log(getLength([1, 2, 3, 4, 5])); // -> 5
  console.log(getLength([])); // -> 0
})();

(function powExample() {
  function pow(base, exponent, result = base) {
    if (exponent === 1) {
      return result;
    }
    result *= base;
    exponent--;
    return pow(base, exponent, result);
  }

  console.log(pow(2, 4)); // -> 16
  console.log(pow(3, 5)); // -> 243
})();

(function flowExample() {
  function flow(input, funcArray, i = 0) {
    if (i === funcArray.length) {
      return input;
    }
    input = funcArray[i](input);
    i++;
    return flow(input, funcArray, i);
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
  console.log(flow(2, arrayOfFunctions)); // -> -7
})();

(function shuffleCardsExample() {
  function shuffleCards(topHalf, bottomHalf, i = 0, result = []) {
    if (i > Math.max(topHalf.length, bottomHalf.length)) {
      return result;
    }
    if (topHalf[i] !== undefined) {
      result.push(topHalf[i]);
    }
    if (bottomHalf[i] !== undefined) {
      result.push(bottomHalf[i]);
    }
    i++;
    return shuffleCards(topHalf, bottomHalf, i, result);
  }

  const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
  const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
  console.log(shuffleCards(topHalf, bottomHalf));
  /*-> ['Queen of Diamonds',
              'Jack of Hearts',
              'Five of Hearts',
              'Ten of Spades',
              'Ace of Spades',
              'Eight of Clubs',
            ]
        */
})();

(function () {})();
(function () {})();
