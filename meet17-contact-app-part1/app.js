const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const { loadContact, findContact } = require('./utils/contacts')
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

// Third party middleware
app.use(expressLayouts);


// Built in middleware 
app.use(express.static('public'));

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

app.get('/contact', (req, res) => {
    const contacts = loadContact();
    // console.log(contacts);
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Contact Page',
        contacts,
    });
});

app.get('/contact/:name', (req, res) => {
    const contact = findContact(req.params.name);
    // console.log(contact);
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

