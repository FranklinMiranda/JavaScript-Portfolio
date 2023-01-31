// Type JavaScript here and click "Run Code" or press Ctrl + s
//console.log('Hello, world!');


// Challenge 1
function countdown(n) {
	if (n === 0) {return}
   console.log(n)
  return countdown(n - 1)
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);


// Challenge 2
function sum(array, total = 0) {
  if (array.length === 0) {return total}
 let num = array.pop()
 total += num
  return sum(array, total)
}

// uncomment these to check your work
 // console.log(sum([1,1,1])); // -> returns 3
 // console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
function palindrome(string) {
	if (string.length === 1) {return true}
  else if (string.length === 2 && string[0] === string [1]) {return true}
  string = string.replace(/[\s\W]/gi, '').toLowerCase()
  
  if (string[0] !== string[string.length - 1]) {return false}
  else {string = string.slice(1, -1)
       return palindrome(string)}
  
  
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false


// Challenge 4

function isPrime(num, div = 2) {
	if (num <= 0) {return false}
  else if (num === 1) {return false}
  else if (num === div) {return true}
  else if (num % div === 0) {return false}
  else {return isPrime(num, div += 1)}  
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false


//Challenge 5
function pathFinder(obj, arr, i = 0) {
	if (i === arr.length - 1) {return obj[arr[i]]}
	
  return pathFinder(obj[arr[i]], arr, i += 1)
}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"


//Challenge 6
function flattenRecursively(arr, result = [], i = 0) {
	if (i >= arr.length) {return result}
  
  if (Array.isArray(arr[i])) {return flattenRecursively(arr[i], result, 0)}
  else {result.push(arr[i])}
  
  return flattenRecursively(arr, result, i + 1)
}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


//Challenge 7
function findInOrderedSet(arr, target, i = 0) {
	if (i === arr.length) {return false}
  else if (arr[i] === target) {return true}
  
  return findInOrderedSet(arr, target, i + 1)
}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8
function countWaysToReachNthStair(n) {
if (n === 0) {return 1}
else if (n < 0) {return 0}
  
  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2)
}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))


//Challenge 9
function getPermutations(arr) {
	let result = []
  
  if (arr.length === 0) {return []}
  if (arr.length === 1) {return [arr]}
  
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i]
    const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1))
    const remainingNumsPermuted = getPermutations(remainingNums)
    
    for (let j = 0; j < remainingNumsPermuted.length; j ++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j])
     
      result.push(permutedArray)
      
    }
   
  }
   
  return result
}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


//Challenge 10
function getRangeBetween(x, y, arr = []) {
	if (y - x === 1) {return arr}
  
  x ++
  arr.push(x)
  return getRangeBetween(x,y,arr)
}

console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
