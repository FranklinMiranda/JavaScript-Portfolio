// Title : ES6 Class syntax and the new keyword
// Date : 1/11/2023
// Author : Franklin Miranda
// Description : ES6 introduced class syntax which is used to simplify object creation

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hello ${this.name}`;
  }
}

const franklin = new person('franklin', 24);

console.log(franklin.name);
console.log(franklin.greeting());
console.log(franklin);
console.log(franklin.__proto__);

// The super call calls the super class constructor and pass in all provided parameters
class miranda extends person {
  constructor(name, age) {
    super(name);
    // After this.age is added to the miranda constructor, the anna object has age property initialized
    this.age = age + 1;
  }
}

const anna = new miranda('anna', 21);
console.log(anna.name);
// Because the super call does not pass in the age parameter age is not defined on anna object
console.log(anna.age);
// anna.greeting() access the greeting method from the person constructor
console.log(anna.greeting());
// anna.__proto__ access the person constructor and anna.__proto__.__proto__ access the prototype object of the person constructor
console.log(anna.__proto__);
console.log(anna.__proto__.__proto__);

// Mixins 

class Dog {
  constructor () {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!')
  }
}

const robotMixin = {
  skin: 'metal',
  speak : function () {console.log(`I have ${this.legs} legs and am made of ${this.skin}`)}
}

let robotFido = new Dog()

robotFido = Object.assign(robotFido, robotMixin)

robotFido.speak()