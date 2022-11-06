function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = addMark;
Student.prototype.addMarks = addMarks;
Student.prototype.getAverage = getAverage;
Student.prototype.exclude = exclude;

function addMark(mark) {
  if(this.marks === undefined) { 
    this.marks = [mark];
  } else {
      this.marks.push(mark);
  }
}

function addMarks(...args) {
  for (let arg of args) {
    this.addMark(arg);
  }
}

function getAverage() {
  return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
}

function exclude(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}