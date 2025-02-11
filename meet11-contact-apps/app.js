const yargs = require('yargs');
// const { simpanContact } = require('../meet10-create-contact-app/contacts');
const contacts = require('./contacts');

// yargs.command('add', "menambahkan contact baru ", () => {}, (argv) => {
//     console.log(argv.nama)
// });

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "nama lengkap",
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demmandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor handPhone',
            demandOption: true,
            type: 'stirng'
        }

    },
    handler(argv) {
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     noHP: argv.noHP
        // };

        // console.log(contact);
        contacts.simpanContact(argv.nama, argv.email, argv.noHP)
    }
})

// menampilkan daftar semua nama dan no hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan no HP contact',
    handler() {
        contacts.listContact();
    },
});

// menampilan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: "nama lengkap",
            demandOption: true,
            type: 'string',
        },
        // email: {
        //     describe: 'Email',
        //     demmandOption: false,
        //     type: 'string'
        // },
        // noHP: {
        //     describe: 'Nomor handPhone',
        //     demandOption: true,
        //     type: 'stirng'
        // }
        
    },

    handler(argv) {
        contacts.detailContact(argv.nama)
    },
});

// menghapus data berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: "nama lengkap",
            demandOption: true,
            type: 'string',
        }
        
    },

    handler(argv) {
        contacts.deleteContact(argv.nama)
    },
});


yargs.parse();