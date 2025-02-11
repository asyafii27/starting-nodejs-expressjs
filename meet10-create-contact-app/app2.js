const contacts = require('./contacts');

const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama Anda: ');
    const noHP = await contacts.tulisPertanyaan('Masukkan no HP Anda: ');
    const email = await contacts.tulisPertanyaan('Masukkan email Anda: ');

    contacts.simpanContact(nama, noHP, email)
}

main();

