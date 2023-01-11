// Title : Recursion
// Date : 1/10/2023
// Author : Franklin Miranda
// Description : Recursion is when a function calls itself. It can be used to solve looping problems on closed bounded sets.

// Factorial function that calls itself to solve a factorial 
function factorial (input) {
    let result = input
    function recurse (input) {
        if (input === 0) {return result}
        result *= input
        return recurse (input -= 1)
    }
    recurse (input -= 1)
    return result
}

console.log(factorial(4))

// POW recurse function takes a base and an exponent and returns a result
function pow (base, exponent) {
    function recurse (result = base) {
        if (exponent === 1) {return result}
        exponent -= 1
        return recurse(result *= base)
    }
    return recurse ()
}

console.log(pow(2, 4))