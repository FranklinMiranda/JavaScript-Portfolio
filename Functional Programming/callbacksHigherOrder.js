// Title : Callbacks and Higher Order Functions
// Date : 1/10/2023
// Author : Franklin Miranda
// Description : Callbacks are functions passed into other functions. The function that accepts the callback is the Higher Order Function.

// Sort Method used with a numerical compare function
// The Sort Method is the Higher Order Function and the numSort Function is the Callback
const numArr = [1,2,5,4,7,8]
function numSort (a,b) {
    return a - b
} 

console.log(numArr.sort(numSort))

// 