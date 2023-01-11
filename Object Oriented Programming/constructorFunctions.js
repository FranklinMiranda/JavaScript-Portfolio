// Title : Object Constructors, The Prototype Chain, and New Keyword
// Date : 1/11/2023
// Author : Franklin Miranda
// Description : Object constructors are denoted with uppercase naming
// Object constructors automatically create and return objects, when used with the new keyword, and assign this binding
// Constructor.prototype can be used to access and add properties and methods to the prototype object of the Object constructor and of the created objects
// The prototype object enables all objects created by the Constructor to share properties and methods without storing them on the object instance

function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    return console.log('Hello');
  };
}
// PersonConstructor.prototype access the PersonConstructor prototype Object and stores the greeting method there, not on the individual object
PersonConstructor.prototype.greeting = function () {
  return console.log(`Hello ${this.name}`);
};
PersonConstructor.prototype.name = 'No Name Provided'

const franklin = new PersonConstructor('Franklin Miranda', 24);
const anna = new PersonConstructor();

console.log(franklin);
franklin.hello();
// The JavaScript Engine first looks on franklin for the greeting method, when it doesn't find it, it then looks on the prototype object. This chain continues until the
// __proto__ returns null.
franklin.greeting();

// PersonConstructor creates an anna object and assigns hello method on the created object instance
anna.hello();
// anna object is created with no name argument provided so it access the name property on the prototype object using the dunder proto, it does not just automattically access the property
console.log(anna.__proto__.name)
// Anna object is initialized without any provided arguments but still has access to the greeting method from its prototype Object
anna.greeting();

// The dunder proto on the franklin object and the prototype property on the PersonConstructor point to the same prototype object
// The constructor property on that prototype object point to the PersonConstructor
console.log(franklin.__proto__);
console.log(PersonConstructor.prototype);
console.log(PersonConstructor.prototype.constructor);
console.log(franklin.__proto__ === PersonConstructor.prototype);
