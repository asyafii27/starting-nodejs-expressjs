const fs = require('fs');


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

// ambil semua data contacts dan contacts.json
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);

    return contacts;
}

// cari contacts berdasarkan nama
const findContact = (name) => {
    const contacts = loadContact();
    const contact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    return contact;
}

// menimpa file contact.json dengan data yang baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}

// menambahkan data cintact baru
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    saveContacts(contacts);
}

// check ma,a uamh duplikate
const checkDuplicate = (name) => {
    const contacts = loadContact();
    return contacts.find((contact) => contact.name === name);
}

// hapus contact
const deleteContact = (name) => {
    const contacts = loadContact();
    const filteredContacts = contacts.filter((contact) => contact.name !== name);

    console.log(filteredContacts);
    saveContacts(filteredContacts);
}

//fungsi untuk mengubah contacts
const updateContacts = (contactBaru) => {
    const contacts = loadContact();
    // hilangkan contact lama yang namanya sama dengan oldName
    const filteredContacts = contacts.filter((contact) => contact.name !== contactBaru.oldName );
    console.log(filteredContacts, contactBaru);
    delete contactBaru.oldName
    
    filteredContacts.push(contactBaru);
    saveContacts(filteredContacts);

}

module.exports = { loadContact, findContact, addContact, checkDuplicate, deleteContact, updateContacts }
