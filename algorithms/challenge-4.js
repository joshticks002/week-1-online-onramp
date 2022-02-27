function highestSum(x, y) {
  let countJ = 0;
  let countK = 0;
  let i = 1;
  while (i < 2) {
    for (let j = 0; j < x.length; j++) {
      if (x[j] > 0) {
        countJ += x[j];
      }
    }
    for (let k = 0; k < y.length; k++) {
      if (y[k] > 0) {
        countK += y[k];
      }
    }
    if (countJ > countK) {
      return countJ;
    } else {
      return countK;
    }
  }
  i++;
}

let valueX = [3, 2, 5, 7, 3, 3, 1];
let valueY = [4, 2, 2, 7, 3, 8, 6];
console.log(highestSum(valueX, valueY));

module.exports = highestSum;
