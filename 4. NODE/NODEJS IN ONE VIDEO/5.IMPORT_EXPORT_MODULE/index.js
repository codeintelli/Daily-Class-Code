// const add = require("./calc");
const { add, sub, mul, div } = require("./calc");
let a = 2;
let b = 4;

// console.log(add.add(a, b));
// console.log(add.sub(a, b));
console.log(add(a, b));
console.log(sub(a, b));
console.log(mul(a, b));
console.log(div(a, b));
