//First and last name:Franklin Miranda
//Today's date:1/31/2023
//Email:fdm61344@gmail.com
//Desired Cohort:Central 


/* 
Declare a variable 'nums' and set it to an array containing all number from 11 to 19.
*/
let nums = [11,12,13,14,15,16,17,18,19]

/* 
Declare a function 'isEven', which takes a number as an argument. The function should return a boolean depending on whether the passed-in number is even.
*/

function isEven (num) {
  // use modulus check using 2
  if (num % 2 === 0) {return true}
  else {return false}
}

//console.log(isEven(5))

/* 
Declare a function 'findLastTrueElement'. It should take two arguments: an array, and a callback which returns a boolean.
'findLastTrueElement' should sequentially run the callback on the elements in the passed-in array, and return the index of the LAST element for which the callback evaluates to true.
If the callback is not true for any elements, 'findLastTrueElement' should return undefined. 
*/
function findLastTrueElement (array, call) {
  let last;
  
  for (let i = 0; i < array.length; i ++) {
    // test current el and if true assign last to index
    if (call(array[i]) === true) {last = i}
  }
  
  return last
}


// Check that 'findLastTrueElement' is working correctly by calling it with 'nums' and 'isEven'. This should return the index number 7.
//console.log(findLastTrueElement(nums, isEven))


/* 
Declare a function called 'itemTracker', which takes in a string and a number as arguments, and returns a function that tracks and updates an inventory for an item. 
The string passed into 'itemTracker' will represent the item you are keeping track of, and the number is how many you currently have of that item.
The function that is returned from 'itemTracker' should accept a number argument, and will allow you to update the item's quantity. 
When this returned function is invoked, it should add the passed-in number to the inventory and return out the new quantity.

Once complete, right some code to test your 'itemTracker' function. 

Example: 
const breadUpdater = itemTracker('bread', 0);
breadUpdater(10) // 10
breadUpdater(10) // 20
breadUpdater(-5) // 15 
*/

function itemTracker (string, num) {
  // use a variable obj to track inventory
  let tracker = {}
  tracker[string] = num
  // return a function that accepts a number input
  return function (n) {
    console.log(tracker)
    tracker[string] += n
    return tracker[string]
  }
}

// const breadUpdater = itemTracker('bread', 0);
// console.log(breadUpdater(10)) // 10
// console.log(breadUpdater(10)) // 20
// console.log(breadUpdater(-5)) // 15 




/*
Declare a recursive function "mapArray" that takes at least two arguments (an array and a callback function).
"mapArray" should return a new array containing the returned values from running the callback function on each element in the array.

Once complete, right some code to test your 'mapArray' function.
*/

function mapArray (array, call, i = 0, result = []) {
  // check i = array len then return result
  if (i === array.length) {return result}
  
  // use push method to push the invocation of call with the current el
  result.push(call(array[i]))
  // call mapArray with parameters passed in
  return mapArray(array, call, i += 1, result)
  
}

let arr = [1,2,3,4,5, 4,5]
function times2 (input) {return input * 2}

//console.log(mapArray(arr, times2))


/*
Declare a function, 'Collection', which takes in an array as an argument and returns an instance of a 'Collection' object when invoked with the 'new' keyword.
'Collection' objects should function similarly to a Set - i.e., they will store UNIQUE values (no duplicates) inside where its values and keys are the same.
All Collection objects should contain their own 'size' property, which keeps track of the number of items they contain. When a Collection is first created, it should have a size of 0.
*/
function Collection (array) {
  this.size = 0
  // use loop to loop array and set key values to array el, increment size by 1 for each loop
  for (let i = 0; i < array.length; i++) {
    // check if property exists then done increment size
    if (!this[array[i]]) {this.size +=1}
    this[array[i]] = array[i]
    
  }
}

const numbers = new Collection(arr)
// console.log(numbers)
// console.log(numbers.size)


/*
Declare a function, 'add', which is accessible to ALL instances of 'Collection'. 
'add' should take in a single argument, and when invoked on a Collection instance, should add the argument to that Collection (still insuring there are no duplicate values in the Collection), increment the Collection's size property appropriately, and return the size of the collection.
*/


Collection.prototype.add = function (input) {
  // Check if input property exists on Collection
  if (!this[input]) {
    this[input] = input
  	this.size +=1
  }
  return this.size
}

// console.log(numbers.add(7))
// console.log(numbers)


/*
Declare a function, 'delete', which is accessible to ALL instances of 'Collection'. 
'delete' should take in a single argument, and when invoked on a Collection instance, should check if the passed in value exists on that Collection. 
If it does, 'delete' should completely remove that property from the the Collection and change its size property, then return the new size. 
If the element doesn't exist it should return the string "element doesn't exist". 
*/

Collection.prototype.delete = function (input) {
  // check if input exists on Collection object
  if (this[input]) {
    // delete that property and decrement size
    delete this[input]
    this.size -= 1
    
    return this.size
  }
  // return element does't exist
  else if (!this[input]) {return "element doesn't exist"}
}

// console.log(numbers.delete(7))
// console.log(numbers)
// console.log(numbers.delete(10))




/*
Declare a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter deep the object is nested.
Example:
const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools);                                        // -> false
console.log(copyOfTools[0] === tools[0]);                                  // -> false
console.log(copyOfTools[0].editor === tools[0].editor);                    // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);           // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);      // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
*/

function deepCopy (input, result = []) {
 // 
  
  
}

const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools);                                        // -> false
console.log(copyOfTools[0] === tools[0]);                                  // -> false
console.log(copyOfTools[0].editor === tools[0].editor);                    // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);           // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);      // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
