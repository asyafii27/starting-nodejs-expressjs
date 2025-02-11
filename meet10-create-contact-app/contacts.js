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

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (valuePertanyaan) => {
            resolve(valuePertanyaan);
        });
    });
};

const simpanContact = (nama, noHP, email) => {
    const contact = {
        nama: nama,
        noHP: noHP,
        email: email
    };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terima kasih telah mengisi data');

    rl.close();
};

module.exports = {tulisPertanyaan: tulisPertanyaan, simpanContact: simpanContact}