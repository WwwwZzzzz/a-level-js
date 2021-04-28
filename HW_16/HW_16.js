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

let getUpdatedArr = (function () { 
  let arr = []; 
  return result = function (...args) { 
    if(arguments.length > 0){ 
      arr.push(...args); 
    } else { 
      arr = []; 
    } 
    return arr 
  } 
})();


console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log(getUpdatedArr({ name: "Vasya" }));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));
