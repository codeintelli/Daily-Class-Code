// 1st way to export node_modules(using fatal arrow function)
const add = (a, b) => {
  return a + b;
};
// module.exports.add = add;

// 1st way to export node_modules(using normal function)
function sub(a, b) {
  return a - b;
}
// module.exports.sub = sub;

// 2nd way
const mul = (a, b) => {
  return a * b;
};
module.exports = { add, sub, mul };
// 3rd way to export
module.exports.div = (a, b) => {
  return a / b;
  //   a and b compare 0.something ma value nathi joti exact value joie che mare
};
