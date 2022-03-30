// Objects
console.log(new Date());

function objFactory(name, age) {
  const obj = Object.create(baseObject);
  obj.name = name;
  obj.age = age;
  return obj
}

const baseObject = {
  greeting: function () {return `Hello ${this.name}, you are ${this.age} years old!`},
};

const person1 = objFactory('Franklin', 23)

console.log(person1.greeting())