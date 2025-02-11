const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');


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

const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    return contacts;
}

const simpanContact = (nama, email, noHP) => {
    const contact = {
        nama: nama,
        noHP: noHP,
        email: email
    };
    // const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    // const contacts = JSON.parse(fileBuffer);
    const contacts = loadContact();

    // check duplicate
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(chalk.red.inverse.bold('Nama Kontak sudah terdaftar. Gunakan nama kontak yang lain!'));
        return false //return false supaya tidak lanjut ke bawah
    }

    // cek email
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('Email tidak valid!'));
            return false //return false supaya tidak lanjut ke bawah
        }
    }

    // cek no HP
    if (!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(chalk.red.inverse.bold('No HP tidak valid'));
        return false //return false supaya tidak lanjut ke bawah
    }

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terima kasih telah mengisi data');

};


const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak'));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP} - ${contact.email}`);
        return false;
    })
}

const detailContact = (nama) => {
    const contacts = loadContact();

    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() == nama.toLowerCase()
    );

    if (!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        
        return false;
    }
    
    console.log(chalk.green.inverse.bold(contact.nama));
    
    if (contact.email) {
        console.log(contact.email);
    }
    console.log(contact.noHP);

}

// menghapus kontak berdasarkan nama
const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    );

    if (contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    }
};

module.exports = {simpanContact: simpanContact, listContact: listContact, detailContact: detailContact}