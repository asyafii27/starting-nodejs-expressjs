const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')

    // res.json({
    //     name: 'syaffi',
    //     email: 'ahmad@gmail.com',
    //     phone: '0988373777'
    // });

    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.send('Ini adalah halaman about! haha')
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
    res.sendFile('./contact.html', {root: __dirname});
})

app.use('/', (req, res) => { 
    res.send('<h1>404. Page Not Found</h1>');
});



//apa aja yang ada di request
// - bisa mendapatkan param
// - bisa mendapatkan ip address 