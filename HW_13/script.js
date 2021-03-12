// 01

function padStart(str, number = 0, filler = null) {
  if (number == 0) {
    return str;
  } else if (number != 0 && number <= str.length) {
    return str;
  }

  if (filler == null) {
    filler = " ";
  }

  if (number != 0 && number > str.length) {
    let res = '';
    for (let i = 0; i < number; i++) {
      res += filler;
    }

    let requiredChars = number - str.length;
    let startPiece = res.slice(0, requiredChars);
    let strOutput = startPiece + str;
    return strOutput;
  }
};

padStart('abc', 10, "foo");

// 02

function toPrecision(number, digits){
  let res = [number];
      while(digits>res.length){
         res.push(0);
         digits--;
     }
     let res2 = res.join('');
     return  res2;
      
  }
  console.log(toPrecision(1.23 , 4))