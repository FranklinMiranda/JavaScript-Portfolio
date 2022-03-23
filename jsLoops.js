// JavaScript Loops
// For Loop (Loops through code block depending on the initializer, conditional, and iterator statements)
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// For In Loop (Loops through the properties of an Object)
const car = {make : 'bmw', model: 'x3'};

for (let property in car) {
    console.log(property)
    console.log(car[property])
}

// For Of Loop (Loops through the values of an iterable object)
const count = [1, 12, 123, 1234, 12345];

for (let value of count) {
    console.log(value)
}

// While Loop (Loops through code block while condition remains true)
const count1 = [1, 9, 2, 8, 7, 3, 6, 4, 55];

while (count1.length < 20) {
    count1.push(10);
}
console.log(count1)

// Do While Loop (Loops through code block once then continues to loop while condition remains true)
const count2 = [12345, 12346, 12344];

do {
    count2.push(111);
}
while (count2.length < 5);

console.log(count2)

// Break Statement (breaks out of loop based on condition)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (let i = arr.length - 1; i > 0; i--) {
    if (i === 2) { break; }
    arr[i] = 0;
}
console.log(arr)

// Continue Statement (skips over current loop and continues to next one)
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

for (let i = arr1.length - 1; i >= 0; i--) {
    if (i === 4) { continue; }
    arr1[i] = 0;
}
console.log(arr1)