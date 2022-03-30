// Booleans, Nulls, and Undefineds
console.log(new Date())

const testArray = [];

if (testArray.length <= 0) {console.log()}

// Ternary Operator can be used to execute certain code based on true or false
function rentalCarCost(d) {
    return d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
  }
  
  console.log(rentalCarCost(6))