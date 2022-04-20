// Sets
console.log(new Date(2022,3,19,22,52))

const set0 = new Set (['a','a','b','c','d','e','f','g','h','i','j','k','l'])

console.log(set0)

set0.add('m')
set0.add('n')
set0.add('o')
set0.add('p')
set0.add('q')
set0.add('r')
set0.add('s')
set0.add('t')

console.log(set0)

set0.forEach(function (val) {console.log(val)} )

const set0Iterator = set0.values()

console.log(set0Iterator)