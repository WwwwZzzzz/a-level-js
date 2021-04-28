// 01

const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];

class Student{
    static array = [];
    constructor(enrollee) {
        Student.array.push(enrollee);
        Student.array.sort(function(a,b){
            return b.ratingPoint - a.ratingPoint || b.schoolPoint - a.schoolPoint;
        });
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        this.id = Student.array.indexOf(enrollee);
        this.setId();
    }

    setId(){
        for (let index in Student.array){
            if(index > 4){
                Student.array[index].isSelfPayment = true;
            } else {
                Student.array[index].isSelfPayment = false;
            }
            Student.array[index].id = +index + 1;
        }
    }
}

for(let studentPayload of studentArr){
    new Student(studentPayload);
}

console.log(Student.array)

// 02

class CustomString {
  constructor() {
    this.reverse = function (str) {
      return str.split("").reverse().join("");
    };
    this.ucFirst = function (str) {
      return str[0].toUpperCase() + str.slice(1);
    };
    this.ucWords = function (str) {
      const words = str.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }

      return words.join(" ");
    };
  }
}

const myString = new CustomString();

console.log(myString.reverse("qwerty"));
console.log(myString.ucFirst("qwerty"));
console.log(myString.ucWords("qwerty qwerty qwerty"));

// 03

class Validator {
  constructor() {
    this.checkIsEmail = function (str) {
      const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegEx.test(str);
    };
    this.checkIsDomain = function (str) {
      const domainRegEx = new RegExp(
        "^(https?:\\/\\/)?" +
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
          "((\\d{1,3}\\.){3}\\d{1,3}))" +
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
          "(\\?[;&a-z\\d%_.~+=-]*)?" +
          "(\\#[-a-z\\d_]*)?$",
        "i"
      );
      return !!domainRegEx.test(str);
    };
    this.checkIsDate = function (str) {
      let dateFormat;
      if (toString.call(str) === "[object Date]") {
        return true;
      }
      if (typeof str.replace === "function") {
        str.replace(/^\s+|\s+$/gm, "");
      }
      dateFormat = /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/;
      return dateFormat.test(str);
    };
    this.checkIsPhone = function (str) {
      str = str.replace(/[\s\-]/g, "");
      let phoneUaRegExp = /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/;
      return phoneUaRegExp.test(str);
    };
  }
}

var validator = new Validator();

console.log(validator.checkIsEmail("vasya.pupkin@gmail.com"));
console.log(validator.checkIsDomain("google.com"));
console.log(validator.checkIsDate("30.11.2019"));
console.log(validator.checkIsPhone("+38 (066) 937-99-92"));
