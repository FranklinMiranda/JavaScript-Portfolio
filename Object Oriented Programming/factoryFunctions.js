// Title : Factory Functions and Object.create() Method
// Date : 1/11/12023
// Author : Franklin Miranda
// Description : Factory Functions and Object.create() Method can be used to create objects
// Object.create assigns this binding on the prototype object to refer to the the created object

// protoPerson is a prototype object that will be assigned as the prototype of objects created using Object.create()
// The greeting function is stored on the protoPerson prototype object. It is accessed via the dunder proto, and not stored on every object created by Object.create()
const protoPerson = {
  greeting: function () {
    return console.log(`Hello ${this.name}`);
  },
};

// objFactory does not create objects or assign prototypes, Object.create() does this, it is only assigning properties and returning the created object
// objFactory does not have a this binding that makes this useable within the function body
function objFactory(name, age) {
  const person = Object.create(protoPerson);
  person.name = name;
  person.age = age;

  return person;
}

const franklin = objFactory('Franklin Miranda', 24);

console.log(franklin.name);
console.log(franklin.age);
franklin.greeting();

console.log(franklin.__proto__); // This points to the protoPerson object
console.log(objFactory.prototype === franklin.__proto__); // These are not equal because objFactory is not a Object constructor function
