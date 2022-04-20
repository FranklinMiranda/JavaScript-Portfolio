// OOP 
console.log(new Date (2022, 3,19,16,04))

// 4 ways to create objects
// Object Literal Declaration
const person0 = {name : 'franklin'};


// Factory Function + Object.create() Method
const protoPerson = {greeting: function () {return `Hello ${this.name}!`}};

function objFactory (input) {
  const person = Object.create(protoPerson);
  person.name = input;
  return person
}
const person1 = objFactory('franklin');
console.log(person1.greeting(), 'Hello franklin!')


// Constructor Function + new Keyword
function PersonConstructor (input) {
  this.name = input;
}

PersonConstructor.prototype.greeting = function () {return `Hello Constructor ${this.name}!`};

const person2 = new PersonConstructor ('franklin')
console.log(person2.greeting() , 'Hello Constructor franklin!')

// Class keyword + new keyword
class person {
  constructor (input) {
    this.name = input 
  }
  greeting () {return `Hello Class ${this.name}!`}
}

const person3 = new person('franklin')
console.log(person3.greeting())


// Subclassing
class miranda extends person {
    constructor (input) {
        super(input)
        this.name = input;
    }
    get greeting () {return `Hello subclass ${this.name}!`};
}

const person4 = new miranda('franklin');
console.log(person4.greeting)

