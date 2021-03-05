// 01

var i;
for (i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log('Fiz');
    }
    else if (i % 3 == 0) {
        console.log('FizBuz');
    }
    else {
        console.log('Buz');
    }
}

// 02

var sum = (1200 * 8) / 500;
Math.ceil(sum);

// 03

var input = 6000;
var oneHour = 3600;
var oneMinute = 60;
var hours = Math.floor(input / oneHour);
var minutes = Math.floor(((input % oneHour) / oneMinute));
var seconds = input % oneHour % oneMinute;

if(String(hours).length < 2) {
  hours = '0' + hours;
} 
if(String(minutes).length < 2) {
  minutes = '0' + minutes;
} 
if (String(seconds).length < 2) {

  seconds = '0' + seconds;
}

console.log(hours + ' : ' + minutes + ' : ' + seconds);

// 04

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var currentMonth = new Date().getMonth();

var result = months[currentMonth];

console.log(result);