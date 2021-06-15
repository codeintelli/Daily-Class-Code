// callback in js
console.log("callback function in javascript");
// pretend that this response is comming from Server
const students = [
  { name: "BHOLENATH", subject: "Javascript" },
  { name: "Shiva", subject: "Python" },
];

//   console.log(student);

// callback  means a function inside a function
function enrollStudent(student, abc) {
  setTimeout(function () {
    students.push(student);
    console.log("Student have been enrolled");
    abc();
  }, 5000);
}

function getStudent() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (students) {
      str += `<li>${students.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Student have been fetched");
  }, 1000);
}
let newStudent = { name: "mahadev", subject: "GO" };
enrollStudent(newStudent, getStudent);
//   getStudent();
//   console.log(students);
