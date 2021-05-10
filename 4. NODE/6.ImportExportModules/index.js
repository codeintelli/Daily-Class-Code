// const add = require("./calculator");
const { add, sub, mul, div, company } = require("./calculator");
let a = 2;
let b = 4;
let calc = `Addition is :- ${add(a, b)} \n Substraction is:- ${sub(
  a,
  b
)} \n  Multiplication is:- ${mul(a, b)} \n Division is :- ${div(a, b)} `;
console.log(calc);
// console.log(add(a, b));
// console.log(sub(a, b));
// console.log(div(a, b));
// console.log(mul(a, b));
// console.log(company);

// console.log(add.add(a, b));
// console.log(add.sub(a, b));
// console.log(add.div(a, b));
// console.log(add.mul(a, b));
// console.log(add.company);
