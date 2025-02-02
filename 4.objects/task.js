function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.marks = [],
  this.status = "active"
}

let StudentOne = new Student("Ivan", "male", 21)
let StudentTwo = new Student("Maria", "female", 19)


Student.prototype.setSubject = function (subject) {
  this.subject = subject;
}

Student.prototype.addMarks = function (...marks) {
  if (this.status === "active") {
    this.marks.push(...marks)
  } else {
    console.log(`Студент отчислен!`)
  }
}

Student.prototype.getAverage = function () {

  if (!this.marks || this.marks.length === 0) { 
    return 0; 
  } else {
    let sum = 0;
    for (let i = 0; i<this.marks.length; i++) {
    sum += this.marks[i];};
    return sum/this.marks.length
};
}
 

Student.prototype.exclude = function (reason) {
  if (this.status === "active"){
    this.status = "expelled"
    delete this.subject;
    delete this.marks;

    this.excluded = reason;
  }
}

