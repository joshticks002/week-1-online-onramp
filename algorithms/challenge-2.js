function divisible(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0 && a[i] > 15) {
      count++;
      console.log(count);
    }
  }
  return count;
}

let myArrY = [14, 16, 10, 18, 12, 17];
divisible(myArrY);

module.exports = divisible;
