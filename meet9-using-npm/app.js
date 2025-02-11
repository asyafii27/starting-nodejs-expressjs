const validator = require('validator');

// console.log(validator.isEmail('ahmad@gmail.com'));
// console.log(validator.isMobilePhone('08237337', 'id-ID'));
// console.log(validator.isNumeric('0988763636'));

const chalk = require('chalk');

console.log(chalk.italic.black.bgBlue('Hello'));

const name = 'Ahmad';
const message = 'Hello World';
console.log(chalk.bold.bgRed.black(message));

const pesan = chalk`loremsatu dua tiga empat {bgRed.black lima} enam tujuh {bgGreen.italic.black delapan} sembilan sepuluh sepelas. nama saya ${name}`;
console.log(pesan);

