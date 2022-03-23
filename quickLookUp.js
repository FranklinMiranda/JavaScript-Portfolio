// JavaScript Quicklookup
console.log(new Date());

// Strings
stringsLookUp();
function stringsLookUp() {
  const string = `string`;
  const string0 = "string";
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

  const sentence1 = "This is a sentence.";
  let newSentence = sentence1.replace("sentence", "paragraph");
  console.log(sentence1);
  console.log(newSentence);

  console.log(newSentence.toUpperCase());
  console.log(newSentence.toLowerCase());
  console.log(string.concat(sentence1, newSentence));

  let int = "5";
  let padSentence = int.padStart(5, "0");
  let padEnd = int.padEnd(5, "0");
  console.log(int);
  console.log(padSentence);
  console.log(padEnd);

  const dictionary = "dictionary";
  console.log(dictionary.indexOf("c"));
  console.log(dictionary.lastIndexOf("i"));
  console.log(dictionary.search("t"));
  console.log(dictionary.match(/i/g));

  console.log(dictionary.includes("i", 4));
  console.log(dictionary.includes("i", 5));

  console.log(dictionary.startsWith("d"));
  console.log(dictionary.startsWith("D"));

  console.log(dictionary.endsWith("ary"));
  console.log(dictionary.endsWith("y"));

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
  const string = "f";

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

  console.log(Number("6"));

  console.log(parseInt(num1));
  console.log(parseFloat(num1));
  console.log(parseFloat(num0));

  console.log(num2);
  console.log(num3);
}

// Arrays
arraysLookUp();
function arraysLookUp() {
  const cars = ["audi", "bmw", "ferrari", "honda", "toyota"];
  const planets = ["mercury", "venus", "earth"];
  console.log(cars);
  console.log(cars[0]);
  console.log(cars[cars.length - 1]);
  console.log(typeof cars);
  console.log(cars.length);
  console.log(Array.isArray(cars));
  console.log(cars.toString());

  cars.push("mercedes");
  console.log(cars);
  cars.pop();
  console.log(cars);

  cars.unshift("mercedes");
  console.log(cars);
  cars.shift();
  console.log(cars);

  console.log(cars.concat(planets));
  const carplanet = cars.concat(planets);

  console.log(carplanet);
  carplanet.splice(1, 2, "replace");
  console.log(carplanet);

  console.log(carplanet);
  console.log(carplanet.slice(1, 4));

  console.log(carplanet.includes("earth"));

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
    console.log("perfect");
  } else if (result >= 90) {
    console.log(90);
  } else {
    console.log("Failed");
  }

  switch (result) {
    default:
      console.log("You failed");
      break;
    case 100:
      console.log("perfect");
      break;
    case 90:
      console.log("A");
      break;
  }

  switch (d) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
  }
}

loopsLookUp();
function loopsLookUp() {
  const samObj = { fname: "franklin", lname: "miranda" };
  const samArr = ["bmw", "audi", "honda"];

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

functionsLookUP();
function functionsLookUP() {}

mathLookUP();
function mathLookUP() {}

datesLookUP();
function datesLookUP() {}

arrayIterationsLookUP();
function arrayIterationsLookUP() {}

nestedObjectsLookUP();
function nestedObjectsLookUP() {}
