// Functions
console.log(new Date())

// JavaScript Functions
// In JS functions are first class functions (They are treated as any other variable)

// They can be assigned to a variable
const x = () => "Hello!";
console.log(x());

// They can be passed as an arguement to another function
const greeting = (phrase) => phrase();
console.log(greeting(x));

// They can return a function (using Variable)
const func = () => {
  return () => "Hello!";
};
retFunc = func();
console.log(retFunc());

// They can return a function (using double parentheses)
const func1 = () => {
  return () => "Greetings!";
};
console.log(func1()());

const numbArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const iterArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i]++;
    console.log(array[i]);
  }
};

iterArray(numbArray);
