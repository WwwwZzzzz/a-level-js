// 01

function counter(value) {
  let x = value;
  counter = function () {
    let arg = arguments[0] ? arguments[0] : 0;
    return (x = x + arg);
  };
  return counter();
}

console.log(counter(3));
console.log(counter(5));
console.log(counter(228));

// 02

var getUpdatedArr = (function (arg) {
  var arr = [];

  return function (arg) {
    arr.push(arg);
    return arr.filter(function (el) {
      return el != undefined;
    });
  };
})();

console.log(getUpdatedArr(3)); // [3]
console.log(getUpdatedArr(5)); // [3, 5]
console.log(getUpdatedArr({ name: "Vasya" })); // [3, 5, {name: 'Vasya'}]
console.log(getUpdatedArr()); // []
console.log(getUpdatedArr(4)); // [4]
