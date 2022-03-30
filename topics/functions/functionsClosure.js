// Closures in Functions
console.log(new Date());

(function () {
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
})();

(function () {
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
})();

(function () {
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

  // Closure Backpack example multiple backpacks function factory
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
})();

(function () {
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
})();

(function () {
  function closureFactory() {
    let counter = 0;
    function closureFactoryInstancer() {
      counter++;
      return counter;
    }
    return closureFactoryInstancer;
  }

  const closure1 = closureFactory();
  let closureInstance1 = closure1();
  closureInstance1 = closure1();
  closureInstance1 = closure1();
  console.log(closureInstance1);

  const closure2 = closureFactory();
  let closureInstance2 = closure2();
  console.log(closureInstance2);
})();

(function scopeExample() {
  // Scope Example
  function createFunctionWithInput(str) {
    return function () {
      return str;
    };
  }

  const sampleFunc = createFunctionWithInput('sample');
  console.log(sampleFunc()); // should log: 'sample'
  const helloFunc = createFunctionWithInput('hello');
  console.log(helloFunc()); // should log: 'hello'
})();

(function closureCounterExample() {
  // Closure Counter Example

  function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
      counter++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }

  const willCounter = outer();
  const jasCounter = outer();

  willCounter();
  willCounter();
  willCounter();

  jasCounter();
  willCounter();
})();

(function onceExample() {
  // Closure Counter Example

  function once(callback) {
    let counter = 0;
    let result;
    return function (num) {
      if (counter < 1) {
        counter++;
        result = callback(num);
        return callback(num);
      } else {
        return result;
      }
    };
  }

  const addByTwoOnce = once(function (num) {
    return num + 2;
  });

  console.log(addByTwoOnce(5)); //should log 7
  console.log(addByTwoOnce(10)); //should log 7
  console.log(addByTwoOnce(9001)); //should log 7
})();

(function delayExample() {
  function delay(callback, waitTime) {
    return function () {
      return setTimeout(callback, waitTime);
    };
  }
  let count = 0;
  const delayedFunc = delay(() => count++, 1000);
  delayedFunc();
  console.log(count); // should print '0'
  setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
})();

(function saveOutputExample() {
  function saveOutput(func, string) {
    const obj = {};
    return function (input) {
      if (input === string) {
        return obj;
      } else {
        obj[input] = func(input);
        return func(input);
      }
    };
  }

  const multiplyBy2 = function (num) {
    return num * 2;
  };
  const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
  console.log(multBy2AndLog(2)); // should log: 4
  console.log(multBy2AndLog(9)); // should log: 18
  console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
})();

(function cycleIteratorExample() {
  function cycleIterator(array) {
   let i = 0;
   return function () {
     const result = array[i++];
     if (i >= array.length) {i = 0}
     return result
   }
  }

  const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
  const getDay = cycleIterator(threeDayWeekend);
  console.log(getDay()); // should log: 'Fri'
  console.log(getDay()); // should log: 'Sat'
  console.log(getDay()); // should log: 'Sun'
  console.log(getDay()); // should log: 'Fri'
})();

(function () {

})();
