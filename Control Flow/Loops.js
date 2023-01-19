// Title : Loop Control Flow
// Date : 1/16/2023
// Author : Franklin Miranda
// Description : Loop Control Flow includes For, For in, For Of, While, and Do While Statements
// Loops can also use break statements to exit loops or continue statements to skip over a loop

// For loops can be used to loop a specified number of times
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  } else if (i === 9) {
    break;
  }
  console.log(i);
}

// For in Loops can be used to iterate over keys in a object
const obj = { car1: 'bmw', car2: 'audi', car3: 'lexus', car4: 'polaris' };

for (let key in obj) {
  console.log(key, obj[key]);
}

// For of Loops can be used to iterate over the values of a iterable object
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let value of arr) {
  console.log(value);
}

// While Loops continue looping while a condition is true
let i = 10;

while (i > 0) {
  console.log(i);
  i--;
}

// Do While loops perform the code block and then loop while the condition it true
let j = 10;

do {
  console.log(j);
  j--;
} while (j > 0);
