// Scratch
function drawStairs(n) {
  for (let i = 0; i < n; i++) {
    let total = '*';
    for (let j = n - i; j > 0; j--) {
      total = ' ' + total;
    }

    for (let k = n - i; k < n; k++) {
      total = total + '*';
    }
    console.log(total);
  }
}

drawStairs(5);
