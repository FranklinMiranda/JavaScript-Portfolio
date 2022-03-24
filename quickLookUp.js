// JavaScript Quicklookup
console.log(new Date());

// Strings
stringsLookUp();
function stringsLookUp() {
  const string = `string`;
  const string0 = 'string';
  console.log(typeof string);

  console.log(string === string0);
  console.log(string.length);

  console.log(string.slice(2, 5));
  console.log(string.slice(0, 5));
  console.log(string.slice(-5, -2));
  console.log(string.slice(-5, -4));

  console.log(string.substring(1, 4));
  console.log(string.substring(0, 4));
  console.log(string.substring(1, 5));

  const sentence1 = 'This is a sentence.';
  let newSentence = sentence1.replace('sentence', 'paragraph');
  console.log(sentence1);
  console.log(newSentence);

  console.log(newSentence.toUpperCase());
  console.log(newSentence.toLowerCase());
  console.log(string.concat(sentence1, newSentence));

  let int = '5';
  let padSentence = int.padStart(5, '0');
  let padEnd = int.padEnd(5, '0');
  console.log(int);
  console.log(padSentence);
  console.log(padEnd);

  const dictionary = 'dictionary';
  console.log(dictionary.indexOf('c'));
  console.log(dictionary.lastIndexOf('i'));
  console.log(dictionary.search('t'));
  console.log(dictionary.match(/i/g));

  console.log(dictionary.includes('i', 4));
  console.log(dictionary.includes('i', 5));

  console.log(dictionary.startsWith('d'));
  console.log(dictionary.startsWith('D'));

  console.log(dictionary.endsWith('ary'));
  console.log(dictionary.endsWith('y'));

  const temLit = 9;
  console.log(`This is a template literal ${temLit}`);
}

// Numbers
numbersLookUp();
function numbersLookUp() {
  const num0 = 5;
  const num1 = 12345.6789;
  const num2 = Number.MAX_VALUE;
  const num3 = Number.MIN_VALUE;
  const string = 'f';

  console.log(typeof num0);
  console.log(isNaN(string));

  console.log(num1.toExponential());
  console.log(num1.toExponential(2));
  console.log(num1.toExponential(3));

  console.log(num1.toFixed());
  console.log(num1.toFixed(1));
  console.log(num1.toFixed(2));

  console.log(num1.toPrecision());
  console.log(num1.toPrecision(1));
  console.log(num1.toPrecision(2));

  console.log(Number('6'));

  console.log(parseInt(num1));
  console.log(parseFloat(num1));
  console.log(parseFloat(num0));

  console.log(num2);
  console.log(num3);
}

// Arrays
arraysLookUp();
function arraysLookUp() {
  const cars = ['audi', 'bmw', 'ferrari', 'honda', 'toyota'];
  const planets = ['mercury', 'venus', 'earth'];
  console.log(cars);
  console.log(cars[0]);
  console.log(cars[cars.length - 1]);
  console.log(typeof cars);
  console.log(cars.length);
  console.log(Array.isArray(cars));
  console.log(cars.toString());

  cars.push('mercedes');
  console.log(cars);
  cars.pop();
  console.log(cars);

  cars.unshift('mercedes');
  console.log(cars);
  cars.shift();
  console.log(cars);

  console.log(cars.concat(planets));
  const carplanet = cars.concat(planets);

  console.log(carplanet);
  carplanet.splice(1, 2, 'replace');
  console.log(carplanet);

  console.log(carplanet);
  console.log(carplanet.slice(1, 4));

  console.log(carplanet.includes('earth'));

  carplanet.sort();
  console.log(carplanet);
  carplanet.reverse();
  console.log(carplanet);

  const ranLine = [9, 1, 7, 3, 2, 4, 5, 8, 6];

  console.log(
    ranLine.sort(function (a, b) {
      return a - b;
    })
  );

  console.log(
    ranLine.sort(function (a, b) {
      return b - a;
    })
  );

  // Fisher Yates Random Sort Method
  for (let i = ranLine.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = ranLine[i];
    ranLine[i] = ranLine[j];
    ranLine[j] = k;
  }
  console.log(ranLine);

  console.log(Math.max.apply(null, ranLine));
  console.log(Math.min.apply(null, ranLine));

  const nestArr = [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [10, 11, 12],
      [13, 14, 15],
      [16, 17, 18],
    ],
    [
      [19, 20, 21],
      [22, 23, 24],
      [25, 26, 27],
    ],
  ];
  console.log(nestArr[2][0][2]);
  console.log(nestArr[1][2][2]);
}

// Conditionals
conditionalsLookUp();
function conditionalsLookUp() {
  const result = 90;
  const d = new Date().getDay();

  if (result === 100) {
    console.log('perfect');
  } else if (result >= 90) {
    console.log(90);
  } else {
    console.log('Failed');
  }

  switch (result) {
    default:
      console.log('You failed');
      break;
    case 100:
      console.log('perfect');
      break;
    case 90:
      console.log('A');
      break;
  }

  switch (d) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
  }
}

// Loops
loopsLookUp();
function loopsLookUp() {
  const samObj = { fname: 'franklin', lname: 'miranda' };
  const samArr = ['bmw', 'audi', 'honda'];

  for (let i = 0; i < 6; i++) {
    console.log(i);
  }

  for (let property in samObj) {
    console.log(property);
    console.log(samObj[property]);
  }

  for (let value of samArr) {
    console.log(value);
  }

  let i = 10;
  while (i < 15) {
    samArr.push(i);
    i++;
    console.log(samArr);
  }
  console.log(samArr);

  const numLine = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 12, 3, 4, 5];

  do {
    numLine.pop();
    console.log(numLine);
  } while (numLine.length > 5);

  for (let i = 0; i < 18; i++) {
    if (i === 2) {
      break;
    }
    console.log(i);
  }

  for (let i = 0; i < 18; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
  }
}

// Functions
// TODO add recusion and Asynchronous examples
functionsLookUP();
function functionsLookUP() {
  // Arrow case means function is not hoisted
  const addFunction = (a, b) => {
    return console.log(a + b);
  };
  addFunction(1, 2);

  // Function is hoisted
  subtractFunction(10, 2);
  function subtractFunction(a, b) {
    return console.log(a - b);
  }

  // Functions passes as argument to other Functions
  function greeting() {
    return 'Hello';
  }
  function phrase(message) {
    return message();
  }
  console.log(phrase(greeting));

  function greeting1() {
    return 'Hello';
  }
  function phrase1(message) {
    return message;
  }
  console.log(phrase1(greeting1()));

  function greeting2() {
    return 'Hello';
  }
  function greeting3() {
    return 'Bye';
  }
  function phrase2(message1, message2) {
    console.log(message1());
    return console.log(message2());
  }
  console.log(phrase2(greeting2, greeting3));

  // Functions can return Function using a variable
  const functionVar = () => {
    return () => 'Hello';
  };
  returnedFunction = functionVar();
  console.log(returnedFunction());

  // Functions can return a Function using double parentheses
  const functionPar = () => {
    return () => 'Hello';
  };
  console.log(functionVar()());
}

// Math
mathLookUP();
function mathLookUP() {
  // Math constants that can be accessed as Math.properties
  console.log(Math.E);
  console.log(Math.PI);
  console.log(Math.SQRT2);
  console.log(Math.SQRT1_2);
  console.log(Math.LN2);
  console.log(Math.LN10);
  console.log(Math.LOG2E);
  console.log(Math.LOG10E);

  // Math methods written as Math.method()
  const num = 1234.5678910111213;
  const numLine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(Math.round(num));
  console.log(Math.ceil(num));
  console.log(Math.floor(num));
  console.log(Math.trunc(num));
  console.log(Math.sign(num));
  console.log(Math.pow(10, 3));
  console.log(Math.sqrt(64));
  console.log(Math.abs(-5));
  console.log(Math.sin((30 * Math.PI) / 180));
  console.log(Math.cos((45 * Math.PI) / 180));
  console.log(Math.max.apply(null, numLine));
  console.log(Math.max(1, 2, 3, 4, 5, 11231, 12, 123123));
  console.log(Math.min(123123, 12312, 123123, 12, 1));
  console.log(Math.random());
  console.log(Math.log(10));
  console.log(Math.log2(4));
  console.log(Math.log10(1000));
  console.log(Math.floor(Math.random() * 10));

  function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(rndInt(10, 120));
}

// Dates
datesLookUP();
function datesLookUP() {
  const d = new Date();
  console.log(d);

  console.log(new Date(2022, 0, 28, 6, 36, 30, 100));
  console.log(new Date('October 14, 2021 12:00:00'));
  console.log(new Date(1000000000000));

  // Last century uses 2 digits
  console.log(new Date(98, 1));

  const a = new Date();
  console.log(a);
  console.log(a.toString());
  console.log(a.toUTCString());
  console.log(a.toDateString());
  console.log(a.toISOString());

  const f = new Date('2020-10-14');
  console.log(f);

  let msec = Date.parse(f);
  console.log(msec);

  console.log(f.getFullYear());
  console.log(f.getMonth());
  console.log(f.getDate());
  console.log(f.getHours());
  console.log(f.getMinutes());
  console.log(f.getSeconds());
  console.log(f.getMilliseconds());

  console.log(f.getTime());
  // Gets weekday
  console.log(f.getDay());

  console.log(Date.now());

  let g = new Date();
  g.setFullYear(2010);
  console.log(g);

  g.setMonth(0);
  console.log(g);

  g.setDate(14);
  console.log(g);

  g.setHours(13);
  console.log(g);

  g.setMinutes(33);
  console.log(g);

  g.setSeconds(10);
  console.log(g);

  g.setMilliseconds(140);
  console.log(g);

  g.setTime(100000000);
  console.log(g);
}

// Array Iterations
arrayIterationsLookUP();
function arrayIterationsLookUP() {
  // .forEach Method performs method on each value in the array
  const numLine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numLine0 = [];

  numLine.forEach(addFunc);

  function addFunc(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    array[index] = array[index] + array[index];
  }

  console.log(numLine);

  // .map Method creates new array by performing a function on each array element
  console.log(numLine);

  const numLine1 = numLine.map(expon);

  function expon(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    return value ** 2;
  }

  console.log(numLine);
  console.log(numLine1);

  // .filter Method creates a new array with the array elements that pass a test

  const numLine2 = numLine1.filter(filterNum);

  function filterNum(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
    return value >= 100 && value <= 200;
  }

  console.log(numLine2);

  // .reduce Method runs a function on an array to produce a single value accepts (total, value, index, array) parameters (.reduce can accept an inital value)
  const num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // Set initial value to zero ( , 0) otherwise first value is used as total
  let sum = num.reduce(reducer, 0);

  function reducer(total, value, index, array) {
    console.log(total);
    console.log(value);
    console.log(index);
    console.log(array);
    console.log(value[0]);
    return total + value[0] + value[1] + value[2];
  }
  console.log(sum);

  // .reduceRight HERE
  const num1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let sum1 = num1.reduceRight(reducer1, 0);

  function reducer1(total, value, index, array) {
    console.log(total);
    console.log(value);
    console.log(index);
    console.log(array);
    console.log(value[0]);
    return total + value[0] + value[1] + value[2];
  }
  console.log(sum1);

  // .every Method checks if all array elements pass the test, returns true false
  const testArr = [150, 160, 40, 212];

  const test = testArr.every(testFunc);

  function testFunc(value, index, array) {
    return value > 100;
  }

  console.log(test);

  // array.some Method checks if some of array elements pass the test, returns a true false
  const testArr1 = [150, 160, 40, 212, 160, 40];

  const test1 = testArr1.some(testFunc1);

  function testFunc1(value, index, array) {
    return value > 1000;
  }
  console.log(test1);

  // .indexOf
  console.log(testArr1.indexOf(160));
  console.log(testArr1.indexOf(40));

  // .lastIndexOf
  console.log(testArr1.lastIndexOf(160));
  console.log(testArr1.lastIndexOf(40));

  // .find Method searches for the first value that passes the specified test
  const finderValue = testArr1.find(finderFunc);

  function finderFunc(value, index, array) {
    return value <= 40;
  }
  console.log(finderValue);

  // .findIndex Method finds the index of the first element to pass the test function
  const finderIndex = testArr1.findIndex(criteria);

  function criteria(value, index, array) {
    return value < 50;
  }
  console.log(finderIndex);

  // .from returns an array object from any object with a length property
  const lengthP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const len = Array.from(lengthP);
  console.log(len);

  // .keys returns an Iterator Object with the keys of an array
  const cars5 = ['honda', 'toyota', 'subaru', 'kia'];
  const keys = cars5.keys();

  for (let x of keys) {
    console.log(x);
  }
}

// Objects
objectsLookUp();
function objectsLookUp() {
  const string = `string`;
  const string0 = 'string';
  console.log(typeof string);

  console.log(string === string0);
  console.log(string.length);

  console.log(string.slice(2, 5));
  console.log(string.slice(0, 5));
  console.log(string.slice(-5, -2));
  console.log(string.slice(-5, -4));

  console.log(string.substring(1, 4));
  console.log(string.substring(0, 4));
  console.log(string.substring(1, 5));

  const sentence1 = 'This is a sentence.';
  let newSentence = sentence1.replace('sentence', 'paragraph');
  console.log(sentence1);
  console.log(newSentence);

  console.log(newSentence.toUpperCase());
  console.log(newSentence.toLowerCase());
  console.log(string.concat(sentence1, newSentence));

  let int = '5';
  let padSentence = int.padStart(5, '0');
  let padEnd = int.padEnd(5, '0');
  console.log(int);
  console.log(padSentence);
  console.log(padEnd);

  const dictionary = 'dictionary';
  console.log(dictionary.indexOf('c'));
  console.log(dictionary.lastIndexOf('i'));
  console.log(dictionary.search('t'));
  console.log(dictionary.match(/i/g));

  console.log(dictionary.includes('i', 4));
  console.log(dictionary.includes('i', 5));

  console.log(dictionary.startsWith('d'));
  console.log(dictionary.startsWith('D'));

  console.log(dictionary.endsWith('ary'));
  console.log(dictionary.endsWith('y'));

  const temLit = 9;
  console.log(`This is a template literal ${temLit}`);
}

// Nested Objects
nestedObjectsLookUP();
function nestedObjectsLookUP() {
  // Iterating Over Nested Arrays
  const nestedArr = [
    [1, 2, 3, 4, 5],
    [15, 17, 19, 21, 23, 1, 2, 3, 4, 5],
    [5, 8, 9, 8, 5, 17, 1],
  ];

  // .pop() arrays off and iterate
  function dupNum(array) {
    let arr0 = array.pop();
    let newArr = [];

    while (array.length) {
      let arr1 = array.pop();

      arr0.forEach((value, index, array) => {
        if (arr1.includes(value) && !newArr.includes(value)) newArr.push(value);
      });
      arr0 = newArr;
    }
    return newArr;
  }
  console.log(dupNum(nestedArr));
}

// Nested Objects
jsHTMLLookUP();
function jsHTMLLookUP() {
  document.getElementById('Id').innerHTML = 'Replacement Text';
  document.getElementById('Id').style.size = '3px';
  document.getElementById('Id').style.display = 'none';
  document.getElementById('Id').style.display = 'block';
}
