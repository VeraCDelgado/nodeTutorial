const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    if (req.url === '/') {
        res.end('Welcome to our home page');

    } else if (req.url === '/about') {
        res.end('Alguna cosa que contar');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p> We can't seem to find the page you are looking for</p>
            <a href= "/">back home</a>
        `);
    }
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....');
});