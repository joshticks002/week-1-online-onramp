function noOfElements(x, y, z) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] >= y && x[i] <= z) {
      count++;
      console.log(count);
    }
  }
  return count;
}

let myArrX = [4, 6, 0, 8, 2, 7];
noOfElements(myArrX, 6, 9);

module.exports = noOfElements;
