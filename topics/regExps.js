// Regular Expressions 
console.log(new Date(2022, 3,21,9,26))

const str = 'My name is Franklin Miranda';

console.log(str.search(/m/ig))

console.log(str.search(/(m | y)/ig))

const str0 = str.replace(/a/ig, 'f')
console.log(str0)

const str1 = str.replace(/[a,f]/ig, 'z');
console.log(str1)

const pattern = /e/;

console.log(pattern.test('e a i o u'))

console.log(/a/.test('e a i o u'))
