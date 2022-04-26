// Maps
console.log(new Date(2022, 3, 19, 23, 04))

const map0 = new Map([[1, 500], ['apple', 350], [true , 'banana']])

console.log(map0)

map0.set('orange',200)

console.log(map0)

console.log(map0.get(true))

map0.delete(true)

console.log(map0)

console.log(map0.has('apple'))

console.log(map0.entries())

console.log(map0.size)
