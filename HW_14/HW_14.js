// 01

let string = '   ho ho ho    '
let stringArr = string.split(' ');

function arrayRemove(arr, value) {
    return arr.filter(function(element){
        return element != value;
    });
}

let resultArr = arrayRemove(stringArr, '');
let resultString = resultArr.join(' ');
console.log(resultString);

// 02

let test1 = 'asdsa';
let test2 = 'rr2132';
let test3 = '12.3';
let test4 = 'asdas41242314swda';
let digits = ["1","2","3","4","5","6","7","8","9","0"]

function parseInt(str) {
	if(digits.includes(str[0])){
		let result = '';
		let i;
		for (i = 0; i < str.length; i++) {
		  if(digits.includes(str[i])) {
		  	result += str[i];
		  } else {
		  	return Number(result);
		  }
		}
		return Number(result);
	} else {
		return NaN;
	}
}

let result = parseInt(test3);
console.log(result)

// 03

let string = 'My String';

function toLowerCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code > 64 && code < 91) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

let stringToLowerCase = toLowerCase(string);
console.log(stringToLowerCase);

// 04

function Employee(id, name, surname, salary, workExperience, isPrivileges, gender) {
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.salary = salary;
	this.workExperience = workExperience;
	this.isPrivileges = isPrivileges;
	this.gender = gender;
  }

  var man = new Employee(0, "Valeriy", "Zhmishenko", 1000, 10, true, 'male');

  console.log(Employee)

// 05

function Employee(
  id,
  name,
  surname,
  salary,
  workExperience,
  isPriviliged,
  gender
) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.salary = salary;
  this.workExperience = workExperience;
  this.isPriviliged = isPriviliged;
  this.gender = gender;
  this.getFullName = function () {
    return this.surname + " " + this.name;
  };
  this.getSalaryRate = function () {
    if (this.workExperience < 3 && this.salary <= 200) {
      return "low";
    } else if (
      this.workExperience >= 3 &&
      this.workExperience < 7 &&
      this.salary > 4000
    ) {
      return "modarate";
    } else if (
      this.isPriviliged &&
      this.workExperience >= 7 &&
      this.salary > 7000
    ) {
      return "high";
    } else {
      return "Salary Rate is above calculation";
    }
  };
}

let man = new Employee(0, "Valeriy", "Zhmishenko", 10000, 10, true, "male");

console.log(man.getFullName());
console.log(man.getSalaryRate());

// 06

function calculate(p, y) {
    return Math.log(Math.pow(p,2)) + (Math.pow(y,3))  + (Math.exp(p));
  }
  
  calculate(2, 4);