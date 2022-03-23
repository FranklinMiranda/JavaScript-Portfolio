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

booleanLookUp();
function booleanLookUp() {}

arrayLookUp();
function arrayLookUp() {
  const cars = ["audi", "bmw", "ferrari", "honda", "toyota"];
  const planets = ["mercury", "venus", "earth"]
  console.log(cars);
  console.log(cars[0]);
  console.log(cars[cars.length - 1])
  console.log(typeof cars);
  console.log(cars.length)
  console.log(Array.isArray(cars))
  console.log(cars.toString())

  cars.push("mercedes")
  console.log(cars)
  cars.pop()
  console.log(cars)

  cars.unshift("mercedes")
  console.log(cars)
  cars.shift()
  console.log(cars)

  console.log(cars.concat(planets))
  const carplanet = cars.concat(planets)
  
  console.log(carplanet)
  carplanet.splice(1, 2, "replace")
  console.log(carplanet)

  console.log(carplanet)
  console.log(carplanet.slice(1, 4))

  console.log(carplanet.includes("earth"))
  
}

datesLookUp();
function datesLookUp() {}

MathLookUp();
function MathLookUp() {}
