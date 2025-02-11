// core module 
// file system
const fs = require('fs');
// console.log(fs);
// menuliskan string ke file (syncronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello world secara syncronus!');
// } catch(e) {
//     console.log(e);
// }

// menuliskan string ke file (asyncronous)
// fs.writeFile('data/test.txt', 'Hello world secara asyncronous', (e) => {
//     console.log(e);
// })


//membaca isi file (syncronous)
// const data = fs.readFileSync('data/test.txt');
// console.log(data.toString());

// fs.readFile('data/test')

// readline
const readline = require('readline');
const  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('masukkan nama anda : ', (nama) => {
//     rl.question('Masukkan no HP anda: ', (noHP) => {
//         console.log(`Terima kasih ${nama}, sudah menginputkan ${noHP}`);
//         rl.close();
//     });
// });

rl.question('masukkan nama anda : ', (nama) => {
    rl.question('Masukkan no HP anda: ', (noHP) => {
        const contact = {
            nama: nama,
            noHP: noHP
        };
        const file = fs.readFileSync('data/contact.json', 'utf8');
        const contacts = JSON.parse(file); //mengubah string menjadi Json

        contacts.push(contact);
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts)); //JSON.stringify digunakan untuk mengubah json ke dalam string

        console.log('Terima kasih sudah memasukkan data anda.')

        rl.close();
    });
});
