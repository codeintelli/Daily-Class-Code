// *fat arrow function
// !arrow funtion also called fat arrow functions and this is one of the more popular features of es6 they introduce a new way of writing concise function

//  es5
var sum = function (a, b) {
  return a + b;
};
console.log(sum(11, 11));

// es6
const sums = () => {
  let a = 20;
  let b = 30;
  return a + b;
};

const sums = (a, b) => a + b;
const sums = (a, b = 32) => a + b;

console.log(sums(22));
