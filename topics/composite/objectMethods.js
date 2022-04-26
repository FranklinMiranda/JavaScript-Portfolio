// Object Methods
console.log(new Date(2022,3,19,23,10))

const obj = {label : 0, size : 1, height: 2, width: 3, depth: 4, weight: 5, mass: 6, density: 7}

const obj0 = Object.create(obj);

console.log(obj0)
Object.defineProperty(obj0, 'obj0Label', {value : 'This is the label for obj0!', enumerable : true})

console.log(obj0.obj0Label)

console.log(Object.getOwnPropertyDescriptor(obj0, 'obj0Label'))

console.log(obj0)

console.log(Object.getOwnPropertyNames(obj0))

console.log(Object.getPrototypeOf(obj0))

console.log(Object.keys(obj0))
console.log(Object.values(obj0))
console.log(Object.entries(obj0))

// Object Protection Methods
const person = {name: 'franklin', age: 23};

Object.preventExtensions(person);

person.value = 0;

console.log(person)

console.log(Object.isExtensible(person))

Object.seal(person)
delete person.name;

console.log(person)

console.log(Object.isSealed(person))

Object.freeze(person)

person.name = 'alan'

console.log(person)

console.log(Object.isFrozen(person));


