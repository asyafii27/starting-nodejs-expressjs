const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const { loadContact, findContact, addContact, checkDuplicate } = require('./utils/contacts')
const port = 3000;
const { body, validationResult, check } = require('express-validator');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

// gunakan ejs
app.set('view engine', 'ejs');

// Third party middleware
app.use(expressLayouts);

// Built in middleware 
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser('secret'));

// konfigurasi session
app.use(
    session({
        cookie: { maxAge : 6000 },
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(flash());

app.get('/', (req, res) => {
    res.render('index', {
        layout: 'layouts/main-layout',
        name: 'Ahmad Syafii',
        title: 'Home Page'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'About Page'
    });
  });

  app.post('/contact', 

    // validator with body
    // body('email').isEmail(), 
    // body('noHP').isMobilePhone('id-ID'), (req, res) => {
        
    // validator with check
    [
        // custom nama supaya tidak duplikate
        body('name').custom((value) => {
            const duplicate = checkDuplicate(value);

            if (duplicate) {
                throw new Error('Nama sudah terdaftar!');
            }

            return true;
        }),
        check('email', 'Email tidak valid').isEmail(), 
        check('noHP', 'No Handphoe tidak valid').isMobilePhone('id-ID'),
    ], 
    (req, res) => {

    const errors = validationResult(req);
    //cek testing error
    if (!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array( )});

        res.render('add-contact', {
            title: 'Add',
            layout: 'layouts/main-layout',
            errors: errors.array()
        })
    }


    addContact(req.body);
    req.flash('msg', 'Data Contact berhasil ditambahkan');

    res.redirect('/contact');
  });

app.get('/contact', (req, res) => {
    const contacts = loadContact();
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Contact Page',
        contacts,
        msg: req.flash('msg')
    });
});

// halaman tambah data contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form tabah data', 
        layout: 'layouts/main-layout'
    })
})

// halaman detail contact
app.get('/contact/:name', (req, res) => {
    const contact = findContact(req.params.name);
    res.render('detail', {
        layout: 'layouts/main-layout',
        title: 'Detail Contact Page',
        contact,
    });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/cek-query', (req, res) => {
    res.send(`query: ${req.query.category}` )
})


app.get('/mahasiswa', (req, res) => {
    const mahasiswa = [
        {
            name: 'Ahmad Syafii',
            email: 'ahmad@gmail.com'
        },
        {
            name: 'Hanief',
            email: 'hanief@gamil.com'
        },
        {
            name: 'Rudi',
            email: 'rudi@gamil.com'
        }
    ]
    res.render('mahasiswa', {
        name: 'Ahmad Syafii',
        title: 'Home',
        mahasiswa: mahasiswa
    });
});

// app.use('/', (req, res) => { 
//     res.send('<h1>404. Page Not Found</h1>');
//     console.log('middleware 404');
// });

