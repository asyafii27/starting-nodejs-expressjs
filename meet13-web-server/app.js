const http = require('http');
// const { url } = require('inspector');
const port = 3000;
const fs = require('fs');


//req singkatan dari request
//res singkatan dari response

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: file not found');
        } else {
            res.write(data);
        }

        res.end();
    });
}


http.
    createServer((req, res) => {
        const url = req.url;
        console.log(url);
        res.writeHead(200, {
            'content-type': 'text/html'
        });

        if (url == '/about') {
            res.write('<h1> Ini adalah halaman about</h1>');
            res.end();
        } else if (url == '/contact') {
            res.write('<h1> Ini adalah halaman contact</h1>');
            res.end();
        } else {
            // res.write('<h1>Hello World</h1>');
            renderHTML('./index.html', res);
            // fs.readFile('./index.html', 'utf8', (err, data) => { //reaFile saja yang digunakan 
            //     if (err) {
            //         res.writeHead(404, { 'Content-Type': 'text/plain' });
            //         res.write('Error: file not found');
            //     } else {
            //         res.write(data);
            //     }
            //     res.end();
            // });
            // res.write('test');
        }
    })
    .listen(port, () => {
        console.log(`Server is litening on port ${port}`);
    });