function replaceDivisible(x, y) {
  let arrEl = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] % y === 0 && y !== 0) {
      arrEl.push("isDivisible");
    }
    if (x[i] % y >= 1 && y !== 0) {
      arrEl.push(x[i]);
    }
    if (y === 0) {
      arrEl.push(x[i]);
    }
  }
  console.log(arrEl);
  return arrEl;
}

let repX = [3, 2, 5, 7, 3, 3, 1];
replaceDivisible(repX, 3);

module.exports = replaceDivisible;
