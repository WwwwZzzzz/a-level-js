// 01
console.log(firstWayOfFunc("laugh", 2));
function firstWayOfFunc(str, num) {
  return str.repeat(num);
}

// 02

let secondtWayOfFunc = function (str, num) {
  return str.repeat(num);
};

console.log(secondtWayOfFunc("laugh", 2));

// 03

let ThirdWayOfFunc = new Function("str", "num", "return str.repeat(num)");

console.log(ThirdWayOfFunc("laugh", 2));

// 04

let fourthWayOfFunc = (str, num) => str.repeat(num);

console.log(fourthWayOfFunc("laugh", 2));

// 05

console.log(getMin1(2, 3, 4, 5, 6, 7, 8, 9));
function getMin1(...digital) {
  return Math.min(...digital);
}

// 06

let getMin2 = function (...digital) {
  return Math.min(...digital);
};

console.log(getMin2(2, 3, 4, 5, 6, 7, 8, 9));

// 07

let getMin3 = new Function("...digital", "return Math.min(...digital)");

console.log(getMin3(9, 2, 3, 4, 5, 6, 7, 8, 9));

// 08

let getMin4 = (...digital) => Math.min(...digital);

console.log(getMin4(222, 10, 2, 3, 4, 5, 6, 7, 8, 9));

// 09

function buildPyramid(num) {
  for (let i = 1; i <= num; i++) {
    let xmas = "";
    for (let jingle = 1; jingle <= 2 * num - 1; jingle++) {
      if (jingle >= num + 1 - i || jingle <= num - 1 + i) {
        xmas += "#"
      } else {
        xmas += "-"
      }
    }
    console.log(xmas);
  }
}
buildPyramid(7);

// 10

let unsplit = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
function split(array) {
  return array[[0]].concat(array[[1]].concat(array[[2]]));
}

split(unsplit);


