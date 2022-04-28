// Scratch
console.log(new Date());

const name = 'franklAin';

console.log(name.search(/a/));

const name0 = name.replace(/a/gi, 'f');
console.log(name0);

function closureFunc(counter = 0) {
  return function recursive(num = 0) {
    if (counter > 10) {
      console.log(counter)
        return counter;
    } else {
      counter += num;
      console.log(counter)
      return recursive(num);
    }
  };
}

const closureFunc1 = closureFunc(1);
console.log(closureFunc1(2))