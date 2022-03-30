// Closures in Functions
console.log(new Date());

function add(numAdd) {
  return numAdd + 1;
}

const num = add(1);
const num2 = add(2);

console.log(add(1));
console.log(num);
console.log(num2);

const newLabel = add;
const newLabel1 = add(5);

console.log(newLabel(6));
console.log(newLabel1);

function count() {
  let counter = 1;

  function incrementCounter() {
    counter++;
    return counter;
  }

  incrementCounter();
  return counter; // Remove This to see change
}

const newCounter = count();
console.log(newCounter);

// Closure backpack Example

function outer1() {
  let counter2 = 1;
  function incrementCounter() {
    counter2++;
    return counter2;
  }
  counter2 = 3; // Comment out to check closure change

  return incrementCounter;
}

const myNewFunction = outer1();

// Involves pulling counter2 from a outer1's backpack and invoking incrementCounter on it
let myNewNumber = myNewFunction();
console.log(myNewNumber);

// counter2 is persistent being stored in Closure and is incremented again
myNewNumber = myNewFunction();
console.log(myNewNumber);

// Closure Backpack example multiple backpacks function factory TODO ScoreIncrementor
function outer3() {
  let counter3 = 0;
  function incrementCounter3() {
    counter3++;
    return counter3;
  }
  return incrementCounter3;
}

const myNewFunction3 = outer3();
let myNewNumber3 = myNewFunction3();
myNewNumber = myNewFunction3();

const anotherFunction3 = outer3();
let anotherNumber3 = anotherFunction3();

myNewNumber3 = myNewFunction();
anotherNumber3 = anotherFunction3();

// Score Factory

function scoreFactory() {
  let score = 0;
  function scoreTemplate() {
    if (score === 3) {
      return 'you already ran me 3 times';
    }
    score++;
    return score;
  }
  return scoreTemplate;
}
console.log(scoreFactory);
console.log(scoreFactory());

const scoreFactoryDef = scoreFactory;
console.log(scoreFactoryDef);

// Closure 1 initialized
const scoreTemplate1 = scoreFactory();
console.log(scoreTemplate1);

let scoreLine1 = scoreTemplate1();
console.log(scoreLine1);
console.log(scoreLine1);

scoreLine1 = scoreTemplate1();
console.log(scoreLine1);

scoreLine1 = scoreTemplate1();
console.log(scoreLine1);

// Still accessing scoreLine1's closure
let scoreLine2 = scoreTemplate1();
console.log(scoreLine2);

// Closure 2 initialized
const scoreTemplate3 = scoreFactory();
console.log(scoreTemplate3);
let scoreLine3 = scoreTemplate3();
console.log(scoreLine3);

scoreLine3 = scoreTemplate3();
console.log(scoreLine3);

scoreLine1 = scoreTemplate1();
console.log(scoreLine1);
scoreLine3 = scoreTemplate3();
console.log(scoreLine3);

// Closure 3 initialized
const scoreTemplate4 = scoreFactory();
console.log(scoreTemplate4);
let scoreLine4 = scoreTemplate4();
console.log(scoreLine4);

scoreLine4 = scoreTemplate4();
console.log(scoreLine4);

// Score Line 1 and Score Line 2 are accessing the same backpack or Closure
console.log(scoreLine1);
console.log(scoreLine2);
console.log(scoreLine3);
console.log(scoreLine4);

function closureFactory() {
  let counter = 0;
  function closureFactoryInstancer() {
    counter++;
    return counter;
  }
  return closureFactoryInstancer;
}

const closure1 = closureFactory()
let closureInstance1 = closure1()
closureInstance1 = closure1()
closureInstance1 = closure1()
console.log(closureInstance1)

const closure2 = closureFactory()
let closureInstance2 = closure2()
console.log(closureInstance2)