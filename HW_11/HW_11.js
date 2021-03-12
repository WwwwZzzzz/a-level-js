// 01

var arr = ['Привет,', 'мир', '!'];
alert(arr.join(''));

var string = arr[0] + ' ' + arr[1] + arr[2];
alert(string);

// 02

var lan = prompt('Choose the language en or ua', '');

var en = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var ua = ['Понеділок','Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя'];

 if (lan == 'en') {
   alert(en);
 }
 if (lan == 'ua' ) {
   alert(ua);
 }

switch(lan) {
  case 'en' : alert(en);
  break;
  case 'ua' : alert(ua);
  break;
  default: alert('Only en and ua can be used');
}

var matrix = [
  ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  ['Понеділок','Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя']
];

var matrixEn = 'en'
var matrixUa = 'ua'

var sum = matrix[0].indexOf(matrixEn);
var resultEn = matrix[sum+1];

console.log(resultEn);

var sum = matrix[0].indexOf(matrixUa);
var resultUa = matrix[sum+2];

console.log(resultUa);


// 03

var floors = parseFloat(prompt("Type the floors number"));
var entrances = parseFloat(prompt("Type the entrances number"));
var flats = parseFloat(prompt("Type the flats per floor number"));
var input = parseFloat(prompt("Type the flat number you want to find"));

var findFloor = Math.ceil(input / flats);

var findEntrance = Math.ceil(findFloor / floors);

  
if(!isNaN(floors) && !isNaN(entrances) && !isNaN(flats) && !isNaN(input)) {

  if(Number.isInteger(floors) && Number.isInteger(entrances) && Number.isInteger(flats) && Number.isInteger(input)) {

    if((floors <= 25 && floors >= 1) && (entrances <= 10 && entrances >= 1) && (flats <= 20 && flats >= 1) && (input <= (floors * entrances * flats))) {
      
      alert('Flat is located in ' + findEntrance + ' entrance!');

    } else {
      alert('The entered value is more than max or below 1');
    }

  } else {
    alert('The entered number is fractional');
  }

} else {
  alert('The entered number has inavlid characters or empty');
}