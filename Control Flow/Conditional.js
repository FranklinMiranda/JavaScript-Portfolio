// Title : Conditional Control Flow
// Date : 1/16/2023
// Author : Franklin Miranda
// Description : Conditional Control Flow includes If, Else If, and Else Statements and Switch Statements

// If, Else If, and Else Statements test for Equality and Logic, evaluating integers, characters, or boolean values
const num = 10;
const num1 = 20;

if (num + num1 > 30) {
  console.log(num + num1, 'greater than 30');
} else if (num + num1 === 30) {
  console.log(num + num1);
} else {
  console.log(num + num1, 'less than 30');
}

// Switch Statements test for Equality, evaluating integers and characters
// Switch statements use strict comparisions
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
  default:
    day = 'No day specified';
}

console.log(day);
