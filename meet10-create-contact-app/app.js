const fs = require('fs');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

// membuat file jika direktori belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// membuat file jika file nya belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// rl.question('Masukkan nama Anda: ',  (nama) => {
//     rl.question('Masukkan nmomor HP Anda: ', (noHP) => {
//         rl.question('Masukkan email anda: ', (email) => {
//             const contact = {
//                 nama: nama,
//                 noHP: noHP,
//                 email: email
//             };
//             const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
//             const contacts = JSON.parse(fileBuffer);
    
//             contacts.push(contact);
    
//             fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    
//             rl.close();
//         })

//     })
// })

// pertanyaan menggunakan promesss
const pertanyaan1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan nama Anda: ', (nama) => {
            resolve(nama);
        });
    });
};

const pertanyaan2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan nomor HP Anda: ', (noHP) => {
            resolve(noHP);
        });
    });
};

const pertanyaan3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan email Anda: ', (email) => {
            resolve(email);
        });
    });
};

const main = async () => {
    const nama = await pertanyaan1();
    const noHP = await pertanyaan2();
    const email = await pertanyaan3();

    const contact = {
        nama: nama,
        noHP: noHP,
        email: email
    };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    rl.close();
}

main();

