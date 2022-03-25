// Scratch
console.log(new Date())

function eitherCallback(callback1, callback2) {
  // ADD CODE HERE
  console.log(callback1);
  console.log(callback1);
  //Study
  //console.log(value);
  return (value) => {
    console.log(value);
    return callback1(value) || callback2(value);
  };
}

// Uncomment these to check your work!
function filterArray(array, callback) {
  console.log(array);
  console.log(callback());
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    console.log(callback(array[i], i, array));
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

function testReturn(callback1, value1) {
  console.log(callback1);
  console.log(value1);
  return (value1Func = (value1) => {
    console.log(value1);
    console.log(callback1);
  });
}

function addFunction(value1) {
  console.log(value1);
  return 1 + value1;
}

const funcRun = testReturn(addFunction(1), 1)();
