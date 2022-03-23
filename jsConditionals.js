// JavaScript Conditional Statements
// If Else if Else Statements
const x = 2;

if (x === 0) {
    console.log(0)
} else if (x === 1) {
    console.log(1)
} else {
    console.log(2)
}


// JavaScript Switch Statements
// Switch statements use strict comparison 
switch (x) {
    case 0:
        console.log('case 0')
        break;
    case 1:
    case 2:
        console.log('case 1 or case 2')
        break;
    case 3:
        console.log('case 3')
        break;
    default:
        console.log('no result')
}

// Using new Date Object and Switch Statement to calculate days of the week
const d = new Date().getDay();

switch (d) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
}