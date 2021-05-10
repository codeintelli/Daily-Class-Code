const chalk = require("chalk");
const validator = require("validator");
// console.log(chalk.red("shiva"));
// console.log(chalk.red.underline.inverse("shiva"));
// console.log(chalk.bgBlackBright("shiva"));
const res = validator.isEmail("Shiva@shiva.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
