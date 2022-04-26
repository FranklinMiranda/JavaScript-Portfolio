// Function Prototype Methods Apply, Bind, Call, and toString
console.log(new Date(2022,3,21,12,17))

// apply(), bind(), and call() are used to set a user defined .this reference for a function

const arr = [1,2,3]
const elements = [4,5,6]

arr.push.apply(arr, elements);

console.log(arr)

// .call() is the same as .apply() except that it takes a list of arguements rather than an arguement's array
//  .call() can also be used to chain Constructors during object creation


// .bind() is used to reference .this for a function
const module = {x : 42, getX : function () {return this.x;}}

const unboundGetX = module.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX())

function stringify () {return console.log('Hello')}

console.log(stringify.toString())