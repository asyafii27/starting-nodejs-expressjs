// const fs = require('fs'); //core module
// const cetakNama = require('./coba'); //local module
// const moment = require('moment'); //third party module /npm module /node_modules

// const cetakNama = require('./coba');
// const Pi = require('./coba');

// console.log(cetakNama('sandhika'), Pi);

const coba = require('./coba');
//cetakNama = method
//Pi = properti

// console.log(coba)
console.log(coba.cetakNama('Sandhika'), coba.Pi, coba.mahasiswa.cetakMhs(), new coba.orang()); //fix 1
