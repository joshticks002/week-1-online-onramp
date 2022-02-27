function isDivisbleByN(arr, n) {
  let arrElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % n === 0) {
      arrElements.push(arr[i]);
      console.log(arrElements);
    }
  }
  return arrElements;
}

let myArrZ = [14, 9, 10, 18, 5, 17, 3];
isDivisbleByN(myArrZ, 3);

module.exports = isDivisbleByN;
