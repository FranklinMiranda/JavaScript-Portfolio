// Scratch
console.log(new Date());

function cascade(number, length = String(number).length, i = 0, array = [], str = '') {
  if (i === length) {
    return array.forEach((value) => {
      console.log(Number(value));
    });
  }

  if (i === 0) {
    array.push(String(number).split('')[0]);
    str = String(number).split('')[0];
    i++;
    return cascade(number, length, i, array, str);
  }

  if (i > 0) {
    str = str + String(number).split('')[i];
    array.push(str);
    array.unshift(str);
    i++;
    return cascade(number, length, i, array, str);
  }
}

cascade(111);
// should print
/*
111
11
1
11
111
*/
