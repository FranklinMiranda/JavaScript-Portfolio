// Recursion in Functions
console.log(new Date());

// No base case
// function recurse(){
//     recurse()
// }
// recurse()

// Base case
function recurseBase() {
  if (true === true) {
    return 0;
  } else {
    recurseBase();
  }
}
console.log(recurseBase());

(function recurseCounter() {
  let counter = 0;
  function recurse() {
    if (counter === 3) return 'done';
    counter++;
    return recurse();
  }
  console.log(recurse());
})();

(function repeaterExample() {
  function repeater(char) {
    if (char.length === 5) {
      return char;
    }
    char = char + char[0];
    return repeater(char);
  }
  console.log(repeater('g'));
  console.log(repeater('j'));
})();

(function () {})();

(function () {})();
