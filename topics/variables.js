// Variables
console.log(new Date());


// Pass by value and pass by reference
const array = [1,2,3]
const array1 = array
array1.push(1)

console.log(array)
console.log(array1)

// Copy and not pass by Reference - Shadow copy only one level deep, nested arrays passed by reference
const newArray = [1,2,3,[1,2,3,4,]]
const newArray1 = Array.from(newArray)
newArray1[3].push(1)

console.log(newArray)
console.log(newArray1)