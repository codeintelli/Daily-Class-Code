// function add(a, b) {
//   return a + b;
// }
module.exports.add = (a, b) => {
  return a + b;
};
module.exports.company = "itvmh";
module.exports.div = (a, b) => {
  if (a < b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
  }
  return a / b;
};
module.exports.mul = (a, b) => {
  return a * b;
};
module.exports.sub = (a, b) => {
  return a - b;
};

// 1st way to export your function variable class prototype promise fetch xhr(ajax)
// module.exports.add = add;
// module.exports.div = div;
// module.exports.mul = mul;
// module.exports.sub = sub;
// module.exports.names = company;
// modules mare export krva 6 names nam na ane aa file ma anu name company che

// 2nd way to export modules in a bunch
// module.exports = { add, sub, mul, div, company };
