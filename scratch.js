// Scratch
console.log(new Date());

// Closure
function counterFactory () {
    let counter = 0;
    return function (num = 0) {
        counter += num;
        return counter
    }
}

const counter0 = counterFactory()
const counter1 = counterFactory()

counter0(1)
counter0(2)
counter1(4)

console.log(counter0())
console.log(counter1())


// Recursion 
function factorialize (num = 1) {
    if (num <= 1) {return 1}
    return num * factorialize(num - 1)
}

console.log(factorialize())

// Recursion and Closure
function once (callback) {
    let counter = 0;
    let result;
    return function (num) {
        if (counter < 1) {
        counter++
        result = callback(num)
         return callback(num)}
         else {return result}
    }
}

const fact = function (num = 1) {
    if (num <= 1) {return 1}
    return num * fact (num - 1)
}

const factorial = once(fact);
console.log(factorial(4))
console.log(factorial(6))