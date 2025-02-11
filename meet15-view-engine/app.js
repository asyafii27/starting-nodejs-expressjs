const express = require('express');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname})
    res.render('index', {
        name: 'Ahmad Syafii',
        title: 'Home'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/produk/:id/category/:idCategory', (req, res) => {
    res.send('Product ID: ' + req.params.id + ' category id: ' + req.params.idCategory);
});

app.get('/cek-query', (req, res) => {
    res.send(`query: ${req.query.category}` )
})

app.get('/contact', (req, res) => {
    res.render('contact');
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

app.use('/', (req, res) => { 
    res.send('<h1>404. Page Not Found</h1>');
});

