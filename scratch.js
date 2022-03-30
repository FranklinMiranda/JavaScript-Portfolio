// Scratch
console.log(new Date());

function repeater(char) {
  let counter = 1;
  repeat();
  function repeat() {
    if (counter === 5) {
      return;
    }
    char = char + char[0];
    counter++;
    repeat();
  }

  return char;
}

console.log(repeater('g'));
console.log(repeater('j'));
