// Title : Closure
// Date : 1/10/2023
// Author : Franklin Miranda
// Description : Closure is when variables are stored on a functions constructor and then are accessable later 


// Closure example with Once 
// The counter variable is in addByTwo's closure and is still accessible because it is saved because it is accessed in the function body
function once (call) {
    let counter = 0
    return function (input) {
        if (counter === 0) {
            counter++
            return call(input)}
        else if (counter > 0) {return 'Function already called once'}
    }
}

const addByTwo = once((input) => {return input + 2})
console.log(addByTwo(3))
console.log(addByTwo(3))


// Multiple Counter Example with Closure
function counter () {
    let count = 0
    return function () {
        count ++
        console.log(count)
    }
}

const counter1 = counter()
const counter2 = counter()

counter1()
counter1()
counter1()
counter2()