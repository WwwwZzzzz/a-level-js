const studentsArr = [];

class Student {
  constructor(enrolee) {
    studentsArr.push(enrolee);
    this.id = Student.incrementId();
    this.name = enrolee.name;
    this.surname = enrolee.surname;
    this.ratingPoint = enrolee.ratingPoint;
    this.schoolPoint = enrolee.schoolPoint;
  }

  static listOfStudents() {
    return studentsArr;
  }

  static incrementId() {
    if (!this.latestId) {
      this.latestId = 1;
    } else {
      this.latestId++;
    }
    return this.latestId;
  }
}

let user1 = new Student({
  name: "Arthur",
  surname: "Morgan",
  ratingPoint: 100,
  schoolPoint: 50,
});
Student.listOfStudents();
let user2 = new Student({
  name: "Stas",
  surname: "Berj",
  ratingPoint: 100,
  schoolPoint: 60,
});
Student.listOfStudents();
